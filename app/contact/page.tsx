import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { MapSection } from "@/components/contact/MapSection";
import Layout from "@/components/layout/layout";

export default function ContactPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Biz bilan bog'laning
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Savollaringiz bormi? Biz sizga yordam berishdan xursandmiz
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <ContactInfo />
            <ContactForm />
          </div>

          <MapSection />
        </div>
      </div>
    </Layout>
  );
}
