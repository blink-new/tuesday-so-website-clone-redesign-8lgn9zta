import React, { useState } from "react";

const faqs = [
  {
    q: "What happens if I want additional credits?",
    a: "You can purchase additional credits at a discounted rate directly from your dashboard. No interruption to your workflow!",
  },
  {
    q: "Do you have enterprise packages?",
    a: "Yes! Our enterprise plan is fully customizable for large teams and organizations. Contact sales for a tailored solution.",
  },
  {
    q: "How accurate is the data provided by Tuesday?",
    a: "Tuesday provides triple-verified emails and mobile numbers, ensuring industry-leading accuracy and deliverability.",
  },
  {
    q: "How do I generate personalized emails using AI?",
    a: "Our AI email writer analyzes each prospect’s profile and crafts a relevant, personalized message for you—at scale.",
  },
  {
    q: "Can Tuesday save me time on lead generation?",
    a: "Absolutely! Automate research, personalization, and outreach to save hours every week and boost your results.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="container-lg py-16" id="faq">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently asked questions</h2>
      <div className="max-w-2xl mx-auto divide-y divide-gray-200 rounded-xl bg-white shadow-sm">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              className="w-full flex justify-between items-center py-5 px-6 text-left focus:outline-none hover:bg-gray-50 transition"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="font-medium text-lg text-gray-900">{faq.q}</span>
              <span className={`ml-4 transition-transform ${open === i ? "rotate-180" : "rotate-0"}`}>
                ▼
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 px-6 ${open === i ? "max-h-40 py-2" : "max-h-0 py-0"}`}
              style={{ color: '#64748b' }}
            >
              <p className="text-base leading-relaxed">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
