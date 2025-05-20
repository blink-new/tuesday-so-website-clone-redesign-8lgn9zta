import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [comparisonsOpen, setComparisonsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleComparisons = () => {
    setComparisonsOpen(!comparisonsOpen);
  };

  return (
    <header className="relative bg-white border-b border-gray-100 py-4">
      <div className="container-lg flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src="/tuesday-logo.svg" alt="Tuesday.so" className="h-9" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <Link to="/pricing" className="px-4 py-2 text-tuesday-darkBlue hover:text-tuesday-blue transition-colors">
            Pricing
          </Link>
          
          <div className="relative group">
            <button 
              className="flex items-center px-4 py-2 text-tuesday-darkBlue hover:text-tuesday-blue transition-colors"
              onClick={toggleComparisons}
            >
              Comparison <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            <div className={`absolute left-0 mt-2 w-64 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity duration-150 ${comparisonsOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <div className="p-2">
                <Link to="/comparison/tuesday-vs-apollo-io" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Tuesday vs. Apollo.io
                </Link>
                <Link to="/comparison/tuesday-vs-zoominfo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Tuesday vs. Zoominfo
                </Link>
                <Link to="/comparison/tuesday-vs-lusha" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Tuesday vs. Lusha
                </Link>
                <Link to="/comparison/tuesday-vs-cognism" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Tuesday vs. Cognism
                </Link>
              </div>
            </div>
          </div>
          
          <Link to="/affiliates" className="px-4 py-2 text-tuesday-darkBlue hover:text-tuesday-blue transition-colors">
            Affiliates
          </Link>
          
          <Link to="/demo" className="px-4 py-2 text-tuesday-darkBlue hover:text-tuesday-blue transition-colors">
            Demo
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" className="border-gray-200">
            Log In
          </Button>
          <Button variant="gradient">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-tuesday-darkBlue" />
          ) : (
            <Menu className="h-6 w-6 text-tuesday-darkBlue" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute inset-x-0 top-full bg-white z-50 shadow-lg transform transition-transform duration-200 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container px-4 py-4 space-y-4">
          <Link to="/pricing" className="block py-2 text-tuesday-darkBlue">
            Pricing
          </Link>
          
          <div>
            <button 
              className="flex items-center py-2 text-tuesday-darkBlue w-full justify-between"
              onClick={toggleComparisons}
            >
              Comparison <ChevronDown className={`h-4 w-4 transform transition-transform ${comparisonsOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`pl-4 mt-1 space-y-2 ${comparisonsOpen ? 'block' : 'hidden'}`}>
              <Link to="/comparison/tuesday-vs-apollo-io" className="block py-2 text-sm text-gray-700">
                Tuesday vs. Apollo.io
              </Link>
              <Link to="/comparison/tuesday-vs-zoominfo" className="block py-2 text-sm text-gray-700">
                Tuesday vs. Zoominfo
              </Link>
              <Link to="/comparison/tuesday-vs-lusha" className="block py-2 text-sm text-gray-700">
                Tuesday vs. Lusha
              </Link>
              <Link to="/comparison/tuesday-vs-cognism" className="block py-2 text-sm text-gray-700">
                Tuesday vs. Cognism
              </Link>
            </div>
          </div>
          
          <Link to="/affiliates" className="block py-2 text-tuesday-darkBlue">
            Affiliates
          </Link>
          
          <Link to="/demo" className="block py-2 text-tuesday-darkBlue">
            Demo
          </Link>
          
          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3">
            <Button variant="outline" className="w-full justify-center border-gray-200">
              Log In
            </Button>
            <Button variant="gradient" className="w-full justify-center">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;