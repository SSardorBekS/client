"use client"

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export const FAQSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Savolingizni qidiring..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 py-6 text-lg"
        />
      </div>
    </div>
  );
};