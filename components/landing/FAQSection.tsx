import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

export const FAQSection = () => {
  const faqs = [
    {
      question: 'Voice Diary qanday ishlaydi?',
      answer: "Voice Diary sizga kunlik fikrlaringizni ovozli yozib qoldirishga imkon beradi. Barcha yozuvlar avtomatik ravishda matn ko'rinishiga o'tkaziladi va kategoriyalarga ajratiladi. Keyin esa bu yozuvlar asosida AI yordamida shaxsiy kitobingizni yaratishingiz mumkin."
    },
    {
      question: 'Ovozli yozuvlar qayerda saqlanadi?',
      answer: "Barcha ovozli yozuvlar va ma'lumotlar xavfsiz cloud serverlarida shifrlab saqlanadi. Faqat siz o'z ma'lumotlaringizga kira olasiz."
    },
    {
      question: 'Qanday yozish uslublari mavjud?',
      answer: "Biz bir nechta professional yozish uslublarini taklif qilamiz: klassik adabiyot, zamonaviy uslub, she'riy uslub, memuar va dramatik uslub. Har bir uslub o'ziga xos xususiyatlarga ega."
    },
    {
      question: 'Voice Diary mobil qurilmalarda ishlaydi?',
      answer: 'Ha, Voice Diary responsive dizaynga ega va barcha zamonaviy qurilmalarda ishlaydi. iOS va Android uchun maxsus mobil ilovalarimiz ham mavjud.'
    },
    {
      question: 'Kitob yaratish qancha vaqt oladi?',
      answer: "Kitob yaratish jarayoni odatda 10-15 daqiqa davom etadi. Bu sizning yozuvlaringiz hajmiga va tanlangan uslubga bog'liq."
    },
    {
      question: "Ma'lumotlarni eksport qilish mumkinmi?",
      answer: 'Ha, barcha yozuvlaringiz va kitoblaringizni PDF, Word va audio formatlarida eksport qilishingiz mumkin.'
    },
    {
      question: "Qo'llab-quvvatlash xizmati bormi?",
      answer: "Professional va Biznes tarif rejalarida 24/7 qo'llab-quvvatlash xizmati mavjud. Bepul rejada esa standart email orqali yordam olishingiz mumkin."
    },
    {
      question: "Voice Diary qanday tillarni qo'llab-quvvatlaydi?",
      answer: "Hozirda o'zbek, rus va ingliz tillarida ovozni tanish va kitob yaratish funksiyalari mavjud. Boshqa tillar ustida ishlar olib borilmoqda."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Ko'p so'raladigan savollar
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Voice Diary haqida eng ko'p so'raladigan savollarga javoblar
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Boshqa savollaringiz bormi?
          </p>
          <Link 
            href="/contact"
            className="mt-2 inline-flex text-primary hover:text-primary/90 font-medium"
          >
            Biz bilan bog'laning
          </Link>
        </div>
      </div>
    </section>
  );
};