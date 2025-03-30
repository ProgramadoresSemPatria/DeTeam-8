
import React from "react";
import FAQSection from "@/components/general/FAQSection";
import Pricing from "@/components/general/Pricing";
import Testimonials from "@/components/general/Testimonials";

const SaibaMais = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">


      <Testimonials />

      <Pricing />

      <FAQSection />

    </div>
  );
};

export default SaibaMais;
