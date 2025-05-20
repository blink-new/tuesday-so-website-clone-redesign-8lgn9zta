import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Tuesday helped us grow our outbound pipeline by 300% in just 3 months. The data quality is unmatched.",
    name: "Sarah Johnson",
    title: "VP of Sales, TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    quote: "The AI email personalization is a game-changer. We're seeing 3x higher response rates since switching to Tuesday.",
    name: "Mark Rodriguez",
    title: "Growth Lead, StartupX",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80",
  },
  {
    quote: "There's simply no better platform for B2B lead generation. The ROI speaks for itself - 12x return in our first quarter.",
    name: "Alicia Chen",
    title: "CMO, Enterprise Solutions",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=120&q=80",
  },
];

export default function PricingTestimonials() {
  return (
    <section className="container-lg py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-2">Trusted by thousands of companies</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        See why thousands of businesses choose Tuesday for their lead generation needs
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="bg-gray-50 p-6 rounded-xl relative">
            <Quote className="absolute text-primary/10 h-16 w-16 -top-2 -left-2" />
            <div className="relative">
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-8 mt-16">
        {[
          "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=60&q=80",
          "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=60&q=80",
          "https://images.unsplash.com/photo-1586336900097-9adf5c58f9e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=60&q=80",
          "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=60&q=80",
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=120&h=60&q=80",
        ].map((logo, i) => (
          <img 
            key={i} 
            src={logo} 
            alt={`Company ${i+1}`} 
            className="h-12 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
    </section>
  );
}