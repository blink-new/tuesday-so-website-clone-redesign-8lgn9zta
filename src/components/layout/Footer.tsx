import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container-lg">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src="/tuesday-logo.svg" alt="Tuesday.so" className="h-9" />
            </Link>
            <p className="text-gray-600 mb-6 max-w-md">
              Scale Personalized outreach with Triple-Verified email and mobile number leads.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/tuesday-ai/" target="_blank" rel="noopener noreferrer" 
                className="text-gray-500 hover:text-tuesday-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/Tuesday_AI" target="_blank" rel="noopener noreferrer" 
                className="text-gray-500 hover:text-tuesday-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/@Tuesday_AI" target="_blank" rel="noopener noreferrer" 
                className="text-gray-500 hover:text-tuesday-blue transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h3 className="font-semibold text-tuesday-darkBlue mb-4">Comparison</h3>
            <ul className="space-y-3">
              <li><Link to="/comparison/tuesday-vs-apollo-io" className="text-gray-600 hover:text-tuesday-blue transition-colors">Tuesday vs. Apollo.io</Link></li>
              <li><Link to="/comparison/tuesday-vs-zoominfo" className="text-gray-600 hover:text-tuesday-blue transition-colors">Tuesday vs. Zoominfo</Link></li>
              <li><Link to="/comparison/tuesday-vs-lusha" className="text-gray-600 hover:text-tuesday-blue transition-colors">Tuesday vs. Lusha</Link></li>
              <li><Link to="/comparison/tuesday-vs-cognism" className="text-gray-600 hover:text-tuesday-blue transition-colors">Tuesday vs. Cognism</Link></li>
              <li><Link to="/comparison/tuesday-vs-rocket-reach" className="text-gray-600 hover:text-tuesday-blue transition-colors">Tuesday vs. RocketReach</Link></li>
              <li><Link to="/comparison/tuesday-vs-snov-io" className="text-gray-600 hover:text-tuesday-blue transition-colors">Tuesday vs. Snov.io</Link></li>
              <li><Link to="/comparison/tuesday-vs-seamless" className="text-gray-600 hover:text-tuesday-blue transition-colors">Tuesday vs. Seamless</Link></li>
              <li><Link to="/comparison/tuesday-vs-clay" className="text-gray-600 hover:text-tuesday-blue transition-colors">Tuesday vs. Clay</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-tuesday-darkBlue mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/demo" className="text-gray-600 hover:text-tuesday-blue transition-colors">Demo</Link></li>
              <li><a href="https://help.tuesday.so/" className="text-gray-600 hover:text-tuesday-blue transition-colors">Help Center</a></li>
              <li><Link to="/roi-calculator" className="text-gray-600 hover:text-tuesday-blue transition-colors">ROI Calculator</Link></li>
              <li><Link to="/affiliates" className="text-gray-600 hover:text-tuesday-blue transition-colors">Affiliate Program</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-tuesday-darkBlue mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-tuesday-blue transition-colors">Privacy</Link></li>
              <li><Link to="/terms-and-conditions" className="text-gray-600 hover:text-tuesday-blue transition-colors">Terms</Link></li>
              <li><Link to="/talk-to-sales" className="text-gray-600 hover:text-tuesday-blue transition-colors">Contact Sales</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Tuesday.so. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;