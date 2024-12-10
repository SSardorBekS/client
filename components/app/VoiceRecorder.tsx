"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Mic, Square, Loader2 } from 'lucide-react';

export const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [duration, setDuration] = useState(0);

  const formatTime = (seconds:any) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="p-6 mb-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Yangi yozuv</h2>
          <div className="text-sm text-gray-500">
            {formatTime(duration)}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            size="lg"
            variant={isRecording ? "destructive" : "default"}
            onClick={() => setIsRecording(!isRecording)}
          >
            {isRecording ? (
              <>
                <Square className="mr-2 h-5 w-5" />
                To'xtatish
              </>
            ) : (
              <>
                <Mic className="mr-2 h-5 w-5" />
                Yozishni boshlash
              </>
            )}
          </Button>

          <Input
            placeholder="Yozuv uchun sarlavha (ixtiyoriy)"
            className="max-w-md"
          />
        </div>

        {isRecording && (
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Ovoz yozilmoqda...</span>
          </div>
        )}
      </div>
    </Card>
  );
};
