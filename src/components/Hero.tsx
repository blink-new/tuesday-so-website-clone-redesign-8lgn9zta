import { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 md:py-24 overflow-hidden bg-tuesday-light">
      <div className="container-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1>
              Team <span className="gradient-text">collaboration</span> has never been this simple
            </h1>
            <p className="text-lg md:text-xl">
              Manage projects, track tasks, and collaborate with your team - all in one place. Tuesday.so helps you work efficiently and get things done.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/get-started" className="btn-primary px-6 py-3 text-center">
                Get Started Free
              </a>
              <a href="/demo" className="btn-outline px-6 py-3 text-center">
                Watch Demo
              </a>
            </div>
            
            <ul className="space-y-2 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-tuesday-blue flex-shrink-0" />
                <span className="text-tuesday-gray">No credit card required</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-tuesday-blue flex-shrink-0" />
                <span className="text-tuesday-gray">Unlimited time on Free plan</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-tuesday-blue flex-shrink-0" />
                <span className="text-tuesday-gray">Setup in minutes</span>
              </li>
            </ul>
          </div>
          
          {/* Hero Image */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-tuesday-blue to-tuesday-purple rounded-xl blur opacity-30"></div>
              <div className="relative bg-white p-2 rounded-xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Tuesday.so Dashboard" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="gradient-bg rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                    +5
                  </div>
                  <div>
                    <p className="text-sm font-medium text-tuesday-darkBlue">Team members joined</p>
                    <p className="text-xs text-tuesday-gray">Just now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;