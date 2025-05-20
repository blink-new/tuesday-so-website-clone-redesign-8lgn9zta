import { useState, useEffect } from 'react';
import { CheckCircle2, BarChart4, Briefcase, Calendar, MessageSquare, Users, Database } from 'lucide-react';

const Features = () => {
  const [visibleSection, setVisibleSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setVisibleSection((prev) => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      id: 0,
      title: 'Boards',
      description: 'Organize and track everything with fully customizable boards.',
      icon: <BarChart4 size={40} className="text-tuesday-blue" />,
      benefits: [
        'Drag and drop interface',
        'Multiple view options (Kanban, Timeline, Calendar)',
        'Custom fields and formulas',
        'Progress tracking'
      ]
    },
    {
      id: 1,
      title: 'Dashboards',
      description: 'Get a high-level overview with custom dashboards.',
      icon: <Briefcase size={40} className="text-tuesday-purple" />,
      benefits: [
        'Visual data representation',
        'Real-time updates',
        'Customizable widgets',
        'Key performance indicators'
      ]
    },
    {
      id: 2,
      title: 'Collaboration',
      description: 'Work together with your team seamlessly.',
      icon: <Users size={40} className="text-tuesday-blue" />,
      benefits: [
        'Real-time commenting',
        'Task assignments',
        'File sharing',
        'Activity logs'
      ]
    }
  ];

  const tools = [
    { name: 'Task Management', icon: <CheckCircle2 size={24} className="mb-2 text-tuesday-blue" /> },
    { name: 'Timeline & Gantt', icon: <Calendar size={24} className="mb-2 text-tuesday-purple" /> },
    { name: 'Team Chat', icon: <MessageSquare size={24} className="mb-2 text-tuesday-blue" /> },
    { name: 'Database', icon: <Database size={24} className="mb-2 text-tuesday-purple" /> }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-lg">
        {/* Section Header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="mb-4">One platform for all your <span className="gradient-text">work management</span> needs</h2>
          <p className="text-lg md:text-xl">
            From simple tasks to complex projects, Tuesday.so gives your team the tools and flexibility to accomplish anything.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Feature Navigation */}
          <div className={`rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="divide-y divide-gray-100">
              {features.map((feature) => (
                <div 
                  key={feature.id}
                  className={`p-6 cursor-pointer transition-all duration-300 ${visibleSection === feature.id ? 'bg-tuesday-light' : 'hover:bg-gray-50'}`}
                  onClick={() => setVisibleSection(feature.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-white p-2 shadow-sm border border-gray-100">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{feature.title}</h3>
                      <p className="text-tuesday-gray">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Feature Details */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="absolute -inset-1 bg-gradient-to-r from-tuesday-blue to-tuesday-purple rounded-xl blur opacity-20 -z-10"></div>
              
              <h3 className="text-2xl font-bold mb-6">{features[visibleSection].title}</h3>
              <p className="text-tuesday-gray mb-8">{features[visibleSection].description}</p>
              
              <ul className="space-y-4">
                {features[visibleSection].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="gradient-bg rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={14} className="text-white" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <a href="/features" className="btn-primary px-6 py-3 inline-block">
                  Explore {features[visibleSection].title}
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tools Grid */}
        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="mb-4">All the <span className="gradient-text">tools</span> you need</h2>
            <p className="text-lg text-tuesday-gray max-w-2xl mx-auto">
              Tuesday.so combines the best of project management, spreadsheets, kanban boards, and chat in one unified platform.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="feature-card text-center">
                <div className="flex flex-col items-center">
                  {tool.icon}
                  <h4 className="text-lg font-semibold">{tool.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;