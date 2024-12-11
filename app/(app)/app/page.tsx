"use client";

import RealTimeSpeechToText from "@/components/speech-section";

import {
  EditorCommand,
  EditorCommandEmpty,
  EditorCommandItem,
  EditorCommandList,
  EditorContent,
  type EditorInstance,
  EditorRoot,
  type JSONContent,
} from "novel";

import { useState } from "react";

export default function AppPage() {
  const [content, setContent] = useState(null);

  return (
    <>
    <EditorRoot>
      <EditorContent
      />
    </EditorRoot>
      <RealTimeSpeechToText />
    </>
  )
}