import React from "react";
import ContactHero from "../components/ContactPage/ContactHero";
import LocationSection from "../components/ContactPage/LocationSection";
import FAQSection from "../components/ContactPage/FAQSection";
import { StartSection } from "../components/ContactPage/StartSection";

const ContactPage = () => {
  return (
    <>
      <main>
        <StartSection />
        <LocationSection />
        <ContactHero />
        <FAQSection />
      </main>
    </>
  );
};

export default ContactPage;
