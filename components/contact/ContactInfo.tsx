import {
    Phone,
    Mail,
    MapPin,
    Clock,
    MessageCircle,
    Facebook,
    Instagram,
    Twitter,
    Linkedin
  } from 'lucide-react';
  
  export const ContactInfo = () => {
    const contactDetails = [
      {
        icon: <Phone className="h-6 w-6" />,
        title: 'Telefon',
        details: ['+998 90 123 45 67', '+998 71 234 56 78'],
        action: 'tel:+998901234567'
      },
      {
        icon: <Mail className="h-6 w-6" />,
        title: 'Email',
        details: ['info@voicediary.uz', 'support@voicediary.uz'],
        action: 'mailto:info@voicediary.uz'
      },
      {
        icon: <MapPin className="h-6 w-6" />,
        title: 'Manzil',
        details: ['Toshkent shahri,', 'Yunusobod tumani, A.Temur ko\'chasi, 12-uy'],
        action: 'https://maps.google.com'
      },
      {
        icon: <Clock className="h-6 w-6" />,
        title: 'Ish vaqti',
        details: ['Dushanba - Juma: 9:00 - 18:00', 'Dam olish kunlari: Shanba, Yakshanba'],
      },
      {
        icon: <MessageCircle className="h-6 w-6" />,
        title: 'Live Chat',
        details: ['24/7 online qo\'llab-quvvatlash'],
        action: '#'
      }
    ];
  
    const socialLinks = [
      { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
      { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
      { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
      { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' }
    ];
  
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Bog'lanish ma'lumotlari
        </h2>
        
        <div className="space-y-6">
          {contactDetails.map((contact, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {contact.icon}
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {contact.title}
                </h3>
                <div className="mt-1">
                  {contact.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {contact.action ? (
                        <a 
                          href={contact.action}
                          className="hover:text-primary transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
  
        <div className="mt-8 pt-8 border-t">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Ijtimoiy tarmoqlar
          </h3>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };