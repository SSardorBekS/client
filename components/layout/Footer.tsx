import Link from 'next/link';
import { Mic, Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
  const navigation = {
    main: [
      { name: 'Bosh sahifa', href: '/' },
      { name: 'Xizmatlar', href: '/#features' },
      { name: 'Narxlar', href: '/#pricing' },
      { name: 'FAQ', href: '/#faq' },
      { name: "Bog'lanish", href: '/contact' },
    ],
    product: [
      { name: 'Xususiyatlar', href: '#' },
      { name: "Qo'llanma", href: '#' },
      { name: 'Narxlar', href: '#' },
      { name: 'Yangiliklar', href: '#' },
    ],
    company: [
      { name: 'Biz haqimizda', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Hamkorlar', href: '#' },
      { name: 'Vakansiyalar', href: '#' },
    ],
    legal: [
      { name: 'Maxfiylik siyosati', href: '#' },
      { name: 'Foydalanish shartlari', href: '#' },
      { name: 'Litsenziya', href: '#' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '#',
        icon: Facebook
      },
      {
        name: 'Instagram',
        href: '#',
        icon: Instagram
      },
      {
        name: 'Twitter',
        href: '#',
        icon: Twitter
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: Linkedin
      }
    ]
  };

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="flex items-center">
              <Mic className="h-8 w-8 text-primary text-white" />
              <span className="ml-2 text-xl font-bold text-white">
                Voice Diary
              </span>
            </Link>
            <p className="text-gray-400 text-base">
              Kundalik yuritishning zamonaviy usuli. Ovozli yozing, saqlang va o'z kitobingizni yarating.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Mahsulot
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Kompaniya
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Huquqiy
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Kontakt
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="mailto:info@voicediary.uz"
                      className="text-base text-gray-300 hover:text-white flex items-center"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      info@voicediary.uz
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+998901234567"
                      className="text-base text-gray-300 hover:text-white flex items-center"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      +998 90 123 45 67
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Voice Diary. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};
