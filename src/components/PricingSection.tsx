import React from "react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Best for exploring Tuesday",
    features: [
      "100 credits / month",
      "Unlimited B2B lead database",
      "Up to 100 per people/company search",
      "Triple-verified emails and mobile phone numbers",
      "Credits only used on success",
      "AI email personalization",
      "Access to 50+ workflow templates",
      "Export to CSV",
    ],
    cta: "Try it free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    description: "Best for individuals",
    features: [
      "24,000 credits/yr",
      "Everything from Free",
      "Up to 25,000 per people/company search",
      "Auto-reload new leads (daily sync)",
      "Email tools integrations (Smartlead, Instantly, Apollo.io, etc.)",
      "Get data from anywhere (webhooks)",
      "Send data anywhere (API, Zapier)",
    ],
    cta: "Try it free",
    highlight: false,
  },
  {
    name: "Team",
    price: "$399",
    period: "/month",
    description: "Best for small teams and agencies",
    features: [
      "120,000 credits/yr",
      "Everything from Pro",
      "Up to 100,000 per people/company search",
      "3 users included ($99 per additional user)",
      "CRM integrations (HubSpot, Salesforce, Pipedrive, etc.)",
      "1-on-1 cold email coaching call",
      "Access to President’s Club Outreach Workshop ($499 value!)",
    ],
    cta: "Try it free",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Best for large companies",
    features: [
      "Custom credits",
      "Everything from Team",
      "Done-for-you workflows and implementation",
      "Dedicated account manager",
      "Priority customer support",
      "Custom user seats to fit your needs",
    ],
    cta: "Talk to sales",
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="container-lg py-20" id="pricing">
      <h2 className="text-4xl font-extrabold text-center mb-4">Select the right plan for your business</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center mt-12">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex-1 min-w-[260px] max-w-sm bg-white rounded-2xl border border-gray-200 shadow-sm p-8 flex flex-col items-center transition-all duration-300 hover:shadow-lg ${
              plan.highlight ? "ring-2 ring-primary/60 scale-105 z-10" : ""
            }`}
          >
            {plan.badge && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full shadow">{plan.badge}</span>
            )}
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <div className="flex items-end gap-1 mb-2">
              <span className="text-4xl font-extrabold gradient-text">{plan.price}</span>
              <span className="text-base text-gray-500 font-medium">{plan.period}</span>
            </div>
            <p className="text-gray-600 mb-4 text-center">{plan.description}</p>
            <ul className="text-gray-700 text-sm mb-6 space-y-2 text-left w-full max-w-xs mx-auto">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="#get-started"
              className={`w-full text-center rounded-lg px-6 py-3 font-semibold transition-all shadow-md ${
                plan.highlight
                  ? "btn-primary text-white"
                  : "border border-primary text-primary bg-white hover:bg-primary hover:text-white"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
