import { useEffect, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  const testimonials = [
    {
      id: 1,
      content: "Tuesday.so completely transformed how our marketing team manages campaigns. We've cut our planning time in half and improved collaboration across teams.",
      author: "Sarah Johnson",
      title: "Marketing Director, TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      logo: "https://via.placeholder.com/100x40"
    },
    {
      id: 2,
      content: "As a product team, we needed something flexible enough to adapt to our agile workflow. Tuesday.so provided exactly that, plus incredible analytics that help us track our progress.",
      author: "Michael Chen",
      title: "Product Manager, InnovateTech",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      logo: "https://via.placeholder.com/100x40"
    },
    {
      id: 3,
      content: "Tuesday.so has been a game-changer for our remote team. The clear visibility into everyone's tasks and the seamless integrations with our existing tools made adoption incredibly easy.",
      author: "Emily Rodriguez",
      title: "Operations Lead, GlobalServices",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      logo: "https://via.placeholder.com/100x40"
    }
  ];
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-16 md:py-24 bg-tuesday-light">
      <div className="container-lg">
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="mb-4">Trusted by <span className="gradient-text">thousands</span> of teams worldwide</h2>
          <p className="text-lg text-tuesday-gray">
            See why teams of all sizes and industries choose Tuesday.so to manage their work.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-200">
                    <div className="mb-8">
                      {/* Stars */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-lg md:text-xl text-tuesday-darkBlue italic">"{testimonial.content}"</p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author} 
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-tuesday-darkBlue">{testimonial.author}</h4>
                          <p className="text-sm text-tuesday-gray">{testimonial.title}</p>
                        </div>
                      </div>
                      <img 
                        src={testimonial.logo} 
                        alt="Company logo" 
                        className="h-8 w-auto opacity-80"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white rounded-full p-2 shadow-md border border-gray-200 text-tuesday-darkBlue hover:text-tuesday-blue transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white rounded-full p-2 shadow-md border border-gray-200 text-tuesday-darkBlue hover:text-tuesday-blue transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex ? "w-8 bg-tuesday-blue" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Logo Cloud */}
        <div className={`mt-20 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-center text-tuesday-gray mb-8">Trusted by innovative companies around the world</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all">
                <img 
                  src={`https://via.placeholder.com/120x40?text=LOGO${i+1}`} 
                  alt={`Customer ${i+1}`} 
                  className="h-8 md:h-10 w-auto" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;