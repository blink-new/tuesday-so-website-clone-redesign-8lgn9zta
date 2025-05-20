import React from "react";

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16">
      <div className="container-lg text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
          Ready to supercharge your lead generation?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of companies using Tuesday to find, connect with, and convert high-quality leads at scale.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#get-started"
            className="px-8 py-3 bg-white text-primary-600 hover:bg-white/90 transition-all duration-300 rounded-lg font-semibold shadow-lg"
          >
            Get started for free
          </a>
          <a
            href="#talk-to-sales"
            className="px-8 py-3 bg-transparent border border-white text-white hover:bg-white/10 transition-all duration-300 rounded-lg font-semibold"
          >
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
}