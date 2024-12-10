import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import Layout from "@/components/layout/layout";

const LandingPage = () => {
  return (
    <Layout>
      {/* Existing sections */}

      {/* Add new sections */}
      <PricingSection />
      <FAQSection />

      {/* Footer */}
    </Layout>
  );
};

export default LandingPage;
