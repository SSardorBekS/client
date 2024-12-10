import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@/components/ui/accordion';
  
  export const FAQSection = () => {
    const faqData = {
      general: [
        {
          question: 'Voice Diary nima?',
          answer: 'Voice Diary - bu ovozli kundalik yuritish va kitob yaratish platformasi. U sizga kundalik fikrlaringizni ovozli yozib qoldirish, ularni matn ko\'rinishida saqlash va keyinchalik shaxsiy kitobingizni yaratish imkonini beradi.'
        },
        {
          question: 'Voice Diary qanday ishlaydi?',
          answer: 'Platforma uch bosqichda ishlaydi: 1) Ovozli yozuvlarni yozib olish 2) Ovozni avtomatik ravishda matnga o\'girish 3) Matnlarni kategoriyalash va kitob yaratish. Bularning barchasi AI texnologiyalari yordamida amalga oshiriladi.'
        }
      ],
      account: [
        {
          question: 'Qanday ro\'yxatdan o\'tish mumkin?',
          answer: 'Ro\'yxatdan o\'tish uchun email manzilingiz va parol kiritishingiz kerak. Shuningdek, Google yoki Facebook orqali ham ro\'yxatdan o\'tish mumkin.'
        },
        {
          question: 'Profilni o\'chirish mumkinmi?',
          answer: 'Ha, profilingizni istalgan vaqtda o\'chirib tashlashingiz mumkin. Buning uchun Sozlamalar > Akkaunt > Profilni o\'chirish bo\'limiga o\'ting.'
        }
      ],
      features: [
        {
          question: 'Qanday formatdagi audio fayllarni yuklash mumkin?',
          answer: 'Platforma MP3, WAV, M4A formatlarini qo\'llab-quvvatlaydi. Maksimal audio fayl hajmi - 100MB.'
        },
        {
          question: 'Kitob yaratish qancha vaqt oladi?',
          answer: 'Kitob yaratish jarayoni odatda 10-15 daqiqa davom etadi. Bu sizning yozuvlaringiz hajmi va tanlangan uslubga bog\'liq.'
        }
      ],
      pricing: [
        {
          question: 'Bepul versiyada qanday cheklovlar bor?',
          answer: 'Bepul versiyada kuniga 10 ta ovozli yozuv, oyiga 30 daqiqalik audio konvertatsiya va asosiy statistika mavjud.'
        },
        {
          question: 'To\'lov usullari qanday?',
          answer: 'Biz VISA, MasterCard, PayPal va mahalliy to\'lov tizimlarini qo\'llab-quvvatlaymiz. To\'lovlar oylik yoki yillik asosda amalga oshirilishi mumkin.'
        }
      ],
      technical: [
        {
          question: 'Qanday qurilmalarda foydalanish mumkin?',
          answer: 'Voice Diary web versiyasi barcha zamonaviy brauzerlarda ishlaydi. Shuningdek, iOS va Android uchun mobil ilovalarimiz mavjud.'
        },
        {
          question: 'Internet tezligi qanday bo\'lishi kerak?',
          answer: 'Minimal internet tezligi - 1 Mbps. Optimal ishlash uchun 5 Mbps va undan yuqori tezlik tavsiya etiladi.'
        }
      ],
      security: [
        {
          question: 'Ma\'lumotlar qanday himoyalanadi?',
          answer: 'Barcha ma\'lumotlar end-to-end shifrlash orqali himoyalanadi. Fayllar xavfsiz cloud serverlarda saqlanadi va faqat siz kirish huquqiga egasiz.'
        },
        {
          question: 'Maxfiylik siyosati qanday?',
          answer: 'Biz foydalanuvchilar maxfiyligini jiddiy qabul qilamiz. Sizning ma\'lumotlaringiz hech qachon uchinchi tomonlarga berilmaydi.'
        }
      ]
    };
  
    return (
      <div className="max-w-3xl mx-auto mb-16">
        <Accordion type="single" collapsible className="space-y-4">
          {Object.entries(faqData).map(([category, questions]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize">
                {category}
              </h3>
              {questions.map((faq, index) => (
                <AccordionItem key={index} value={`${category}-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
          ))}
        </Accordion>
      </div>
    );
  };
  