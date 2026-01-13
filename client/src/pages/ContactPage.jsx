import React from "react";
import ContactHero from "../components/ContactPage/ContactHero";
import LocationSection from "../components/ContactPage/LocationSection";
import FAQSection from "../components/ContactPage/FAQSection";
import HeroSection from "../components/AboutUsPage/HeroSection";

const ContactPage = () => {
  return (
    <>
      <main>
        <HeroSection />
        <LocationSection />
        <ContactHero />
        <FAQSection />
      </main>
    </>
  );
};

export default ContactPage;
