import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';

export const FAQContact = () => {
  return (
    <div className="max-w-3xl mx-auto text-center bg-white rounded-lg shadow-sm p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Savolingizga javob topa olmadingizmi?
      </h2>
      <p className="text-gray-600 mb-8">
        Bizning qo'llab-quvvatlash xizmati sizga yordam berishdan xursand bo'ladi
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button className="flex items-center">
          <MessageCircle className="mr-2 h-5 w-5" />
          Live Chat
        </Button>
        <Link href="/contact">
          <Button variant="outline" className="flex items-center">
            <Phone className="mr-2 h-5 w-5" />
            Biz bilan bog'laning
          </Button>
        </Link>
      </div>
    </div>
  );
};