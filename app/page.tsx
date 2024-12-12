import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mic, Book, FolderOpen, Award, Settings2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { PricingSection } from "@/components/landing/PricingSection";

const LandingPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Navbar */}
        {/* <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Mic className="h-8 w-8 text-primary" />
                <span className="ml-2 text-xl font-bold text-gray-900">
                  Voice Diary
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/login">
                  <Button variant="ghost">Kirish</Button>
                </Link>
                <Link href="/sign-up">
                  <Button>Ro'yxatdan o'tish</Button>
                </Link>
              </div>
            </div>
          </div>
        </nav> */}
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="mb-12 lg:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Ovozli kundalik yuritish va kitob yaratish platformasi
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Kundalik yozish yangi davri. Ovozli yozib qoldiring,
                  xotiralaringizni saqlang va ulardan shaxsiy kitobingizni
                  yarating.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/sign-up">
                    <Button size="lg" className="w-full sm:w-auto">
                      Boshlash
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto"
                    >
                      Ko'proq ma'lumot
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-3xl" />
                <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <Mic className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-gray-200 rounded w-3/4" />
                          <div className="h-2 bg-gray-200 rounded w-1/2 mt-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Asosiy imkoniyatlar
              </h2>
              <p className="text-xl text-gray-600">
                Voice Diary bilan xotiralaringizni saqlashning eng qulay usuli
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Mic className="h-8 w-8" />,
                  title: "Ovozli yozish",
                  description:
                    "Kundalikni ovozli yozib qoldiring va uni matn ko'rinishida saqlang",
                },
                {
                  icon: <Book className="h-8 w-8" />,
                  title: "Kitob yaratish",
                  description:
                    "Kundaliklar asosida AI yordamida shaxsiy kitobingizni yarating",
                },
                {
                  icon: <FolderOpen className="h-8 w-8" />,
                  title: "Kategoriyalar",
                  description:
                    "Yozuvlaringizni kategoriyalarga ajrating va tartibga soling",
                },
                {
                  icon: <Settings2 className="h-8 w-8" />,
                  title: "Keng sozlamalar",
                  description: "Turli xil yozish uslublari va tillarni tanlang",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <PricingSection /> */}

        {/* How It Works */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Qanday ishlaydi?
              </h2>
              <p className="text-xl text-gray-600">
                3 ta oddiy qadam bilan boshlang
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Ro'yxatdan o'ting",
                  description:
                    "Tizimga kiring va shaxsiy profilingizni yarating",
                },
                {
                  step: "2",
                  title: "Kundalik yozing",
                  description: "Kunlik fikrlaringizni ovozli yozib qoldiring",
                },
                {
                  step: "3",
                  title: "Kitob yarating",
                  description:
                    "Yozuvlaringiz asosida shaxsiy kitobingizni yarating",
                },
              ].map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Bugun boshlaymizmi?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/sign-up">
                <Button size="lg" variant="secondary">
                  Ro'yxatdan o'tish
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white hover:bg-white/10"
                >
                  Kirish
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Mic className="h-8 w-8 text-primary" />
                  <span className="ml-2 text-xl font-bold text-white">
                    Voice Diary
                  </span>
                </div>
                <p className="text-sm">Kundalik yuritishning zamonaviy usuli</p>
              </div>

              {["Mahsulot", "Kompaniya", "Yordam"].map((title, index) => (
                <div key={index}>
                  <h3 className="text-white font-semibold mb-4">{title}</h3>
                  <ul className="space-y-2 text-sm">
                    {[1, 2, 3].map((i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Link {i}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
              <p>&copy; 2024 Voice Diary. Barcha huquqlar himoyalangan.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
