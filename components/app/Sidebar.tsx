"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Book,
  FolderOpen,
  Home,
  BarChart2,
  Settings,
  PenTool,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/diary' },
    { icon: FolderOpen, label: 'Mening yozuvlarim', href: '/diary/notes' },
    { icon: Book, label: 'Kitoblarim', href: '/diary/books' },
    { icon: BarChart2, label: 'Statistika', href: '/diary/stats' },
    { icon: PenTool, label: 'Yozish uslublari', href: '/diary/styles' },
    { icon: Settings, label: 'Sozlamalar', href: '/diary/settings' },
  ];

  return (
    <div
      className={cn(
        "h-[calc(100vh-4rem)] bg-white border-r transition-all duration-300",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-4 flex flex-col h-full">
        <Button
          variant="ghost"
          size="sm"
          className="self-end mb-6"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>

        <div className="space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className={cn(
                "w-full justify-start",
                isCollapsed ? "px-2" : "px-4"
              )}
            >
              <item.icon className="h-5 w-5" />
              {!isCollapsed && <span className="ml-3">{item.label}</span>}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
