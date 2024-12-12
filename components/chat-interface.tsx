"use client";

import { useState, useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";  // Import Editor.js

const ChatInterface = ({ content, setContent }: any) => {
  const [messages, setMessages] = useState<any[]>([
    {
      id: 1,
      text: content || "Hello, how can I assist you?",
      isAssistant: true,
    },
  ]);
  const editorContainers = useRef<Map<number, HTMLDivElement>>(new Map());

  // Initialize Editor for a given message
  const initEditor = (messageId: number) => {
    const editorContainerRef = editorContainers.current.get(messageId);

    if (editorContainerRef && !editorContainers.current.has(messageId)) {
      const editor = new EditorJS({
        holder: editorContainerRef,
        data: {
          blocks: [
            {
              type: "paragraph",
              data: {
                text: "",
              },
            },
          ],
        },
        onChange: async (api) => {
          const savedData = await api.save();
          const updatedMessages = messages.map((msg) =>
            msg.id === messageId
              ? { ...msg, text: savedData.blocks[0].data.text }
              : msg
          );
          setMessages(updatedMessages);
          setContent(updatedMessages);
        },
      });

      editorContainers.current.set(messageId, editorContainerRef);
    }
  };

  // Add new message with its own editor
  const addNewMessage = () => {
    const newMessageId = messages.length + 1;
    const newMessage = {
      id: newMessageId,
      text: "",
      isAssistant: false,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Trigger editor initialization after the message is added
    initEditor(newMessageId);
  };

  return (
    <div className="flex flex-col w-full mx-auto m-8 p-4 bg-white rounded-lg shadow-lg max-w-3xl">
      <div className="flex-1 overflow-auto space-y-4">
        {/* Render existing chat messages */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`p-3 rounded-lg ${
              message.isAssistant ? "bg-blue-100 self-start" : "bg-gray-100 self-end"
            }`}
          >
            <p className="text-gray-800">{message.text}</p>
            {/* Render EditorJS container only for user messages */}
            {!message.isAssistant && (
              <div
                ref={(el) => {
                  if (el) {
                    editorContainers.current.set(message.id, el);
                    initEditor(message.id);
                  }
                }}
                className="border p-4 mt-4 rounded-lg shadow-inner"
              ></div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default ChatInterface;
