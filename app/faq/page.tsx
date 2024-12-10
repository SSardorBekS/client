import { FAQSection } from "@/components/faq/FAQSection";
import { FAQSearch } from "@/components/faq/FAQSearch";
import { FAQCategories } from "@/components/faq/FAQCategories";
import { FAQContact } from "@/components/faq/FAQContact";
import Layout from "@/components/layout/layout";

export default function FAQPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Ko'p so'raladigan savollar
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Voice Diary haqida eng ko'p beriladigan savollarga javoblar
            </p>
          </div>

          <FAQSearch />
          <FAQCategories />
          <FAQSection />
          <FAQContact />
        </div>
      </div>
    </Layout>
  );
}
