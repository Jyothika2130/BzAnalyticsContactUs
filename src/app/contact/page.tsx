"use client";

import PageHero from "../components/PageHero";
import ContactLocations from "../components/ContactLocations";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactFormPage from "../components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />

      <div className="relative">
        <PageHero title="Contact Us" breadcrumb="Contact us" />

        <ContactFormPage />
      </div>

      <ContactLocations />

      <Footer />
    </>
  );
}