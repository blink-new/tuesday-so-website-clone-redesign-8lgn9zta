import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What happens if I want additional credits?",
    a: "You can purchase additional credits at a discounted rate directly from your dashboard. We offer flexible packs that let you pay only for what you need with no long-term commitments.",
  },
  {
    q: "Do you have enterprise packages?",
    a: "Yes! Our enterprise plan is fully customizable to meet the unique needs of large organizations. Our team will work with you to create a tailored solution that scales with your business. Contact our sales team for a personalized demo.",
  },
  {
    q: "How accurate is the data provided by Tuesday?",
    a: "Tuesday provides triple-verified emails and phone numbers, ensuring industry-leading accuracy. Our validation process includes real-time verification, pattern matching, and domain validation to ensure deliverability rates of 95%+.",
  },
  {
    q: "How do I generate personalized emails using AI?",
    a: "Our AI email writer analyzes each prospect's profile data and crafts relevant, personalized messages at scale. The AI considers job title, company info, industry trends, and engagement history to create compelling outreach that feels personal and drives higher response rates.",
  },
  {
    q: "Can Tuesday save me time on lead generation?",
    a: "Absolutely! Tuesday automates the most time-consuming parts of lead generation - research, validation, personalization, and outreach. Our users report saving 10+ hours per week while improving their conversion rates by an average of 35%.",
  },
  {
    q: "Is there a limit to how many leads I can search?",
    a: "Each plan has specific limits on the number of leads you can search per month. Our credit system ensures you only pay for verified contacts, and unused credits roll over to the next month on annual plans.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  
  return (
    <section className="container-lg pb-24">
      <h2 className="text-3xl font-bold text-center mb-4 gradient-text">Frequently asked questions</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Everything you need to know about Tuesday. Can't find the answer you're looking for?{" "}
        <a href="#contact" className="text-primary font-medium hover:underline">Contact our support team</a>.
      </p>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className={`border rounded-xl bg-white shadow-sm overflow-hidden transition-all duration-300 ${
              open === i ? "shadow-md" : ""
            }`}
          >
            <button
              className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="text-lg font-semibold text-gray-900">{faq.q}</span>
              <span className="ml-4 flex-shrink-0 text-primary">
                {open === i ? (
                  <Minus size={20} className="transition-transform duration-300" />
                ) : (
                  <Plus size={20} className="transition-transform duration-300" />
                )}
              </span>
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-5 text-gray-600">
                <p className="text-base leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}