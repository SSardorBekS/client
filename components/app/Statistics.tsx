import { Card } from '@/components/ui/card';
import { Clock, Book, BarChart, Mic } from 'lucide-react';

export const Statistics = () => {
  const stats = [
    {
      title: "Bugun",
      value: "3 ta",
      description: "Yozilgan kundaliklar",
      icon: Clock,
      trend: "+2"
    },
    {
      title: "Jami",
      value: "156 ta",
      description: "Barcha kundaliklar",
      icon: Book,
      trend: "+12"
    },
    {
      title: "Audio",
      value: "5.4 soat",
      description: "Jami yozilgan vaqt",
      icon: Mic,
      trend: "+0.5"
    },
    {
      title: "O'rtacha",
      value: "2.3",
      description: "Kunlik yozuvlar",
      icon: BarChart,
      trend: "+0.3"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <Card key={stat.title} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{stat.title}</p>
              <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              <p className="text-sm text-gray-600 mt-1">{stat.description}</p>
            </div>
            <div className="text-primary">
              <stat.icon className="h-8 w-8" />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-green-600 text-sm font-medium">
              {stat.trend} so'nggi 7 kunda
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};
