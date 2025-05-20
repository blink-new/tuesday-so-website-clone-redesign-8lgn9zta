import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import ReviewBar from "../components/ReviewBar";
import PricingTestimonials from "../components/PricingTestimonials";
import CTABanner from "../components/CTABanner";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9fafc]">
      <Header />
      <main className="flex-1">
        <section className="container-lg pt-20 pb-8 text-center">
          <h1 className="text-5xl font-extrabold mb-4 gradient-text">Pricing</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Select the right plan for your business. Start for free, upgrade anytime. No credit card required.
          </p>
          <ReviewBar />
        </section>
        <Pricing />
        <PricingTestimonials />
        <CTABanner />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}