"use client"

import React, { useState, useRef, useEffect } from 'react';
import { Mic, MicOff, Loader2, AlertCircle } from 'lucide-react';
import axios from 'axios';

// Define types for props
interface RealTimeSpeechToTextProps {
  onSpeech: (transcription: string) => void;
}

const RealTimeSpeechToText: React.FC<RealTimeSpeechToTextProps> = ({ onSpeech }) => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [newText, setNewText] = useState<string>('');
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // Start recording function
  const startRecording = async () => {
    try {
      setIsConnecting(true);
      setError('');

      // Start audio recording for backend
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      
      mediaRecorderRef.current.ondataavailable = (event: BlobEvent) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
          sendAudioToBackend(event.data); // Send the audio chunk as soon as it's available
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        setIsRecording(false);
      };

      mediaRecorderRef.current.start(500); // Collect audio in 0.5-second chunks (for faster real-time updates)

      setIsRecording(true);
      setIsConnecting(false);
    } catch (error) {
      console.error('Error starting recording:', error);
      setError('Error occurred while starting recording.');
      setIsConnecting(false);
    }
  };

  // Stop recording function
  const stopRecording = async () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }

    setIsRecording(false);
  };

  // Send audio to backend for transcription
  const sendAudioToBackend = async (audioBlob: Blob) => {
    const formData = new FormData();
    formData.append('audio', audioBlob, 'recording.webm');

    try {
      const response = await axios.post('http://localhost:8000/transcribe', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const { transcription } = response.data;
      setTranscript(prev => prev + ' ' + transcription);
      setNewText(transcription);
      onSpeech(transcription); // Callback to pass the new transcription
    } catch (error) {
      console.error('Error sending audio:', error);
      setError('Error occurred while sending audio.');
    }
  };

  // Rendering wave animation when recording
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

      {/* <div className="border rounded-lg p-4 min-h-40 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
        <h2 className="text-lg font-semibold mb-2">Real-time Transcript:</h2>
        <p className="whitespace-pre-wrap">
          {transcript}
          {newText && (
            <span className="inline-block animate-fadeIn text-blue-600">
              {newText}
            </span>
          )}
        </p>
      </div> */}
    </div>
  );
};

export default RealTimeSpeechToText;
