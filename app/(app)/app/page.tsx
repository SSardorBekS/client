"use client";

import ChatInterface from "@/components/chat-interface";
import RealTimeSpeechToText from "@/components/speech-section";

import { useState } from "react";

export default function AppPage() {
  const [content, setContent] = useState("");

  const startNewEditorBlock = () => {
    setContent(""); // Clear content when a new block starts
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <ChatInterface content={content} setContent={setContent} />
      <RealTimeSpeechToText onSpeech={setContent} startNewEditorBlock={startNewEditorBlock} />
    </div>
  );
}
