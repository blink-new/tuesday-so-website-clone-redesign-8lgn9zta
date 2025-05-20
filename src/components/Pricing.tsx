import React, { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "per month, billed annually",
    description: "Best for exploring Tuesday",
    cta: "Try it free",
    features: [
      "100 credits / month",
      "Unlimited b2b lead database",
      "Up to 100 per people/company search",
      "Triple-verified emails and mobile phone numbers",
      "Credits only used on success",
      "AI email personalization",
      "Access to 50+ workflow templates",
      "Export to CSV",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "per month, billed annually",
    description: "Best for individuals",
    cta: "Try it free",
    features: [
      "24,000 credits/yr",
      "Everything from Free",
      "Up to 25,000 per people/company search",
      "Auto-reload new leads (daily sync)",
      "Email tools integrations (Smartlead, Instantly, Apollo.io, etc.)",
      "Get data from anywhere (webhooks)",
      "Send data anywhere (API, Zapier)",
    ],
    highlight: false,
  },
  {
    name: "Team",
    price: "$399",
    period: "per month, billed annually",
    description: "Best for small teams and agencies",
    cta: "Try it free",
    features: [
      "120,000 credits/yr",
      "Everything from Pro",
      "Up to 100,000 per people/company search",
      "3 users included ($99 per additional user)",
      "CRM integrations (HubSpot, Salesforce, Pipedrive, etc.)",
      "1-on-1 cold email coaching call",
      "Access to President's Club Outreach Workshop ($499 value!)",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Best for large companies",
    cta: "Talk to sales",
    features: [
      "Custom credits",
      "Everything from Team",
      "Done-for-you workflows and implementation",
      "Dedicated account manager",
      "Priority customer support",
      "Custom user seats to fit your needs",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("annual");

  return (
    <section className="container-lg py-16 min-h-[80vh]">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 gradient-text">Select the right plan for your business</h1>
      
      <div className="flex justify-center items-center gap-4 mb-12">
        <button 
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${billingPeriod === "monthly" ? "bg-primary/10 text-primary" : "text-gray-500 hover:text-gray-800"}`}
          onClick={() => setBillingPeriod("monthly")}
        >
          Monthly
        </button>
        <div className="h-6 w-px bg-gray-300"></div>
        <button 
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${billingPeriod === "annual" ? "bg-primary/10 text-primary" : "text-gray-500 hover:text-gray-800"}`}
          onClick={() => setBillingPeriod("annual")}
        >
          Annual <span className="ml-1 text-xs font-bold text-green-500">Save 20%</span>
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-xl overflow-hidden flex flex-col items-center transition-all duration-300 hover:-translate-y-1 ${
              plan.highlight 
              ? 'bg-white border-2 border-primary shadow-lg z-10' 
              : 'bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300'
            }`}
          >
            {plan.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full shadow-md">
                {plan.badge}
              </span>
            )}
            <div className="w-full p-6 flex flex-col items-center">
              <span className="uppercase text-xs font-bold tracking-widest text-primary mb-2">{plan.name}</span>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-extrabold gradient-text">{plan.price}</span>
              </div>
              <span className="text-xs text-gray-400 mb-2">{plan.period}</span>
              <span className="text-sm text-gray-600 mb-6 text-center">{plan.description}</span>
              <a
                href="#get-started"
                className={`w-full text-center rounded-lg px-6 py-3 font-semibold transition-all shadow-sm ${
                  plan.highlight
                    ? "btn-primary text-white"
                    : "border border-primary text-primary bg-white hover:bg-primary hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
            
            <div className="w-full bg-gray-50 p-6">
              <p className="text-xs font-medium text-gray-500 uppercase mb-3">What's included:</p>
              <ul className="text-left text-sm text-gray-700 space-y-3 w-full">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5"><Check size={16} /></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}