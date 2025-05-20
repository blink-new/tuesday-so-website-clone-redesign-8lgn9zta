import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('cta-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-section" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-tuesday-light rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tuesday-light rounded-full blur-3xl opacity-50"></div>
      
      <div className="container-lg relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to revolutionize how your team <span className="gradient-text">works together</span>?
          </h2>
          <p className="text-lg md:text-xl text-tuesday-gray mb-10 max-w-2xl mx-auto">
            Join thousands of teams who've already transformed their workflow with Tuesday.so. Get started for free and see the difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/get-started" 
              className="btn-primary group px-8 py-4 text-lg flex items-center justify-center gap-2"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="/contact-sales" 
              className="btn-outline px-8 py-4 text-lg"
            >
              Contact Sales
            </a>
          </div>
          
          <p className="mt-6 text-sm text-tuesday-gray">
            No credit card required · Free plan available · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;