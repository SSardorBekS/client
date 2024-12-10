"use client"

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export const FAQCategories = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Barcha savollar' },
    { id: 'general', name: 'Umumiy savollar' },
    { id: 'account', name: 'Akkaunt' },
    { id: 'features', name: 'Funksiyalar' },
    { id: 'pricing', name: 'Narxlar' },
    { id: 'technical', name: 'Texnik savollar' },
    { id: 'security', name: 'Xavfsizlik' }
  ];

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? 'default' : 'outline'}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
