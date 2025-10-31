import { Hero } from "./components/Hero";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Services } from "./components/Services";
import { Method } from "./components/Method";
import { SuccessCases } from "./components/SuccessCases";
import { AboutUs } from "./components/AboutUs";
import { Resources } from "./components/Resources";
import { BookingSection } from "./components/BookingSection";
import { Footer } from "./components/Footer";
import { SEO } from "./components/SEO";
import { CookieConsent } from "./components/CookieConsent";
import { Toaster } from "./components/ui/sonner";
import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen">
      <SEO />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Method />
      <SuccessCases />
      <AboutUs />
      <Resources />
      <BookingSection />
      <Footer />
      <CookieConsent />
      <Toaster />
    </div>
  );
}
