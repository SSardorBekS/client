"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Loader2, AlertCircle } from 'lucide-react';
import axios from 'axios';

const RealTimeSpeechToText = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState('');
  const [newText, setNewText] = useState('');
  const [sessionId, setSessionId] = useState('');
  
  const recognition = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setError('Speech recognition is not supported in this browser.');
      return;
    }

    recognition.current = new SpeechRecognition();
    recognition.current.continuous = true;
    recognition.current.interimResults = true;
    recognition.current.lang = 'en-US';

    return () => {
      stopRecording();
    };
  }, []);

  useEffect(() => {
    if (recognition.current) {
      recognition.current.onresult = (event) => {
        const last = event.results.length - 1;
        const result = event.results[last];
        const text = result[0].transcript;
        
        if (result.isFinal) {
          setNewText(text);
          setTranscript(prev => prev + ' ' + text);
          sendTranscriptionToBackend(text, true);
        }
      };

      recognition.current.onerror = (event) => {
        console.error('Recognition error:', event.error);
        setError(getErrorMessage(event));
        stopRecording();
      };

      recognition.current.onend = () => {
        if (isRecording) {
          recognition.current.start();
        }
      };
    }
  }, [isRecording]);

  const startRecording = async () => {
    try {
      setIsConnecting(true);
      setError('');

      // Start speech recognition
      await recognition.current.start();

      // Start audio recording for backend
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      
      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        await sendAudioToBackend(audioBlob);
        audioChunksRef.current = [];
      };

      mediaRecorderRef.current.start(1000); // Collect audio in 1-second chunks

      // Create a new session
      const response = await axios.post('https://api.255.uz/transciption/sessions/create');
      setSessionId(response.data.session_id);

      setIsRecording(true);
      setIsConnecting(false);
    } catch (error) {
      console.error('Error starting recording:', error);
      setError(getErrorMessage(error));
      setIsConnecting(false);
    }
  };

  const stopRecording = async () => {
    if (recognition.current) {
      recognition.current.stop();
    }

    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }

    // End the session
    if (sessionId) {
      try {
        await axios.post(`https://api.255.uz/transciption/sessions/${sessionId}/end`, {
          final_transcript: transcript
        });
      } catch (error) {
        console.error('Error ending session:', error);
      }
    }

    setIsRecording(false);
  };

  const sendTranscriptionToBackend = async (text, isFinal) => {
    if (!sessionId) return;

    try {
      await axios.post('https://api.255.uz/transciption/transcriptions/save', {
        session_id: sessionId,
        text,
        is_final: isFinal
      });
    } catch (error) {
      console.error('Error saving transcription:', error);
    }
  };

  const sendAudioToBackend = async (audioBlob) => {
    if (!sessionId) return;

    const formData = new FormData();
    formData.append('audio', audioBlob, 'recording.webm');
    formData.append('session_id', sessionId);

    try {
      await axios.post('https://api.255.uz/transciption/audio/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (error) {
      console.error('Error uploading audio:', error);
    }
  };

  const getErrorMessage = (error) => {
    if (error.error === 'not-allowed' || error.error === 'permission-denied') {
      return 'Microphone access denied. Please enable it in your settings.';
    } else if (error.error === 'no-speech') {
      return 'No speech detected. Please try again.';
    } else if (error.error === 'audio-capture') {
      return 'No microphone found. Please check your device settings.';
    } else if (error.error === 'network') {
      return 'Network error occurred. Please check your connection.';
    } else if (error.error === 'aborted') {
      return 'Recording was aborted. Please try again.';
    } else {
      return 'Error occurred. Please try again.';
    }
  };

  const WaveRings = () => (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 animate-ping-slow rounded-full border-2 border-red-200 opacity-75" />
      <div className="absolute inset-0 animate-ping-slower rounded-full border-2 border-red-100 opacity-50" 
           style={{ animationDelay: '0.5s' }} />
      <div className="absolute inset-0 animate-ping-slowest rounded-full border-2 border-red-50 opacity-25"
           style={{ animationDelay: '1s' }} />
    </div>
  );

  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4 animate-fadeIn">
          <div className="flex items-center gap-2 text-red-700">
            <AlertCircle className="w-5 h-5" />
            <p>{error}</p>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative">
          {isRecording && <WaveRings />}
          <button
            onClick={isRecording ? stopRecording : startRecording}
            className={`relative p-4 rounded-full transform transition-all duration-300 ease-in-out ${
              isRecording 
                ? 'bg-red-500 hover:bg-red-600 scale-110 hover:scale-105' 
                : 'bg-blue-500 hover:bg-blue-600 hover:scale-110'
            } text-white shadow-lg hover:shadow-xl`}
            disabled={isConnecting}
          >
            <div className={`transform transition-transform duration-300 ${isRecording ? 'rotate-180' : 'rotate-0'}`}>
              {isRecording ? (
                <MicOff className="w-6 h-6" />
              ) : (
                <Mic className="w-6 h-6" />
              )}
            </div>
          </button>
        </div>
        
        <div className="text-center">
          {isConnecting && (
            <div className="flex items-center gap-2 animate-fadeIn">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Connecting...</span>
            </div>
          )}
          {isRecording && (
            <span className="text-red-500 flex items-center gap-2 animate-fadeIn">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"/>
              Recording...
            </span>
          )}
        </div>
      </div>

      <div className="border rounded-lg p-4 min-h-40 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
        <h2 className="text-lg font-semibold mb-2">Real-time Transcript:</h2>
        <p className="whitespace-pre-wrap">
          {transcript}
          {newText && (
            <span className="inline-block animate-fadeIn text-blue-600">
              {newText}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default RealTimeSpeechToText;