"use client"

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreVertical, Pencil, Trash, Calendar } from 'lucide-react';

export const NotesList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const notes = [
    {
      id: 1,
      title: "Bugungi reja va maqsadlar",
      content: "Bugun juda samarali kun bo'ldi. Ertalab soat 6 da turib...",
      duration: "2:35",
      date: "2024-02-20",
      category: "Kundalik rejalar"
    },
    {
      id: 2,
      title: "Yangi loyiha g'oyalari",
      content: "Yangi startup g'oyasi haqida o'yladim. Asosiy maqsad...",
      duration: "5:12",
      date: "2024-02-19",
      category: "Biznes"
    },
    {
      id: 3,
      title: "Kitob taqrizi",
      content: "Bugun o'qigan kitobim haqida fikrlarim...",
      duration: "3:45",
      date: "2024-02-18",
      category: "Shaxsiy"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">So'nggi yozuvlar</h2>
        <Input
          placeholder="Yozuvlarni qidirish..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-xs"
        />
      </div>

      <div className="grid gap-4">
        {notes.map((note) => (
          <Card key={note.id} className="p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="font-medium">{note.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {note.content}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Calendar className="mr-1 h-4 w-4" />
                    {note.date}
                  </span>
                  <span>{note.duration}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    {note.category}
                  </span>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Pencil className="mr-2 h-4 w-4" />
                    Tahrirlash
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    <Trash className="mr-2 h-4 w-4" />
                    O'chirish
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};