import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const PricingSection = () => {
  const plans = [
    {
      name: 'Bepul',
      price: '0',
      description: 'Asosiy funksiyalardan foydalanish uchun',
      features: [
        'Kunlik 10 ta ovozli yozuv',
        'Text konvertatsiya - 30 daqiqa/oy',
        'Oddiy kategoriyalash',
        'Asosiy statistika',
      ],
      buttonText: 'Boshlash',
      popular: false
    },
    {
      name: 'Professional',
      price: '99,000',
      description: 'Professional yozuvchilar uchun',
      features: [
        'Cheksiz ovozli yozuvlar',
        'Text konvertatsiya - cheksiz',
        'Kengaytirilgan kategoriyalash',
        'AI bilan kitob yaratish',
        'Barcha statistikalar',
        "24/7 qo'llab-quvvatlash"
      ],
      buttonText: "Pro versiyani sinab ko'rish",
      popular: true
    },
    {
      name: 'Biznes',
      price: '299,000',
      description: 'Katta loyihalar va biznes uchun',
      features: [
        'Professional rejaning barcha funksiyalari',
        'Bir nechta foydalanuvchilar',
        'API integratsiya',
        'Custom domenlar',
        'SLA kafolati',
        'Shaxsiy menejer'
      ],
      buttonText: "Biznes bilan bog'lanish",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Qulay narxlar
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Har qanday ehtiyoj uchun mos tarif rejasi
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white shadow-lg ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-32">
                  <div className="rounded-full bg-primary py-2 text-center text-sm font-semibold text-white">
                    Eng mashhur
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.price !== '0' && (
                    <span className="text-base font-medium text-gray-500">
                      /oy
                    </span>
                  )}
                </p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="ml-3 text-sm text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link href="/sign-up">
                    <Button
                      variant={plan.popular ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};