import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleProductDropdown = () => {
    setProductDropdownOpen(!productDropdownOpen);
  };

  const navLinks = [
    { name: "Pricing", href: "/pricing" },
    { name: "Demo", href: "/#demo" },
    { name: "Affiliates", href: "/#affiliates" },
    { name: "Comparison", href: "/#comparison" },
  ];

  return (
    <header className="w-full py-4 border-b border-gray-100 bg-white">
      <div className="container-lg flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold gradient-text">Tuesday.so</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="relative group">
            <button 
              className="flex items-center px-4 py-2 text-tuesday-darkBlue hover:text-tuesday-blue transition-colors" 
              onClick={toggleProductDropdown}
            >
              Product <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className={`absolute left-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out ${productDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              <div className="py-2 px-2">
                <a href="/features" className="block px-4 py-2 text-sm text-tuesday-darkBlue hover:bg-gray-50 rounded-md">Features</a>
                <a href="/use-cases" className="block px-4 py-2 text-sm text-tuesday-darkBlue hover:bg-gray-50 rounded-md">Use Cases</a>
                <a href="/integrations" className="block px-4 py-2 text-sm text-tuesday-darkBlue hover:bg-gray-50 rounded-md">Integrations</a>
                <a href="/security" className="block px-4 py-2 text-sm text-tuesday-darkBlue hover:bg-gray-50 rounded-md">Security</a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              link.name === "Pricing" ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-base font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              )
            ))}
          </div>
          <a href="/enterprise" className="px-4 py-2 text-tuesday-darkBlue hover:text-tuesday-blue transition-colors">Enterprise</a>
          <a href="/templates" className="px-4 py-2 text-tuesday-darkBlue hover:text-tuesday-blue transition-colors">Templates</a>
          <a href="/resources" className="px-4 py-2 text-tuesday-darkBlue hover:text-tuesday-blue transition-colors">Resources</a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <a href="/login" className="text-tuesday-darkBlue hover:text-tuesday-blue transition-colors">Log in</a>
          <a href="/get-started" className="btn-primary px-5 py-2">Get Started</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          type="button" 
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-tuesday-darkBlue hover:text-tuesday-blue focus:outline-none" 
          onClick={toggleMobileMenu}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-100 mt-4`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <div>
            <button 
              className="w-full flex justify-between items-center px-4 py-3 text-tuesday-darkBlue hover:bg-gray-50" 
              onClick={toggleProductDropdown}
            >
              Product <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${productDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {productDropdownOpen && (
              <div className="pl-4 space-y-1 pb-1">
                <a href="/features" className="block px-4 py-2 text-sm text-tuesday-darkBlue hover:bg-gray-50">Features</a>
                <a href="/use-cases" className="block px-4 py-2 text-sm text-tuesday-darkBlue hover:bg-gray-50">Use Cases</a>
                <a href="/integrations" className="block px-4 py-2 text-sm text-tuesday-darkBlue hover:bg-gray-50">Integrations</a>
                <a href="/security" className="block px-4 py-2 text-sm text-tuesday-darkBlue hover:bg-gray-50">Security</a>
              </div>
            )}
          </div>
          <Link to="/pricing" className="block px-4 py-3 text-tuesday-darkBlue hover:bg-gray-50">Pricing</Link>
          {navLinks.slice(1).map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="block px-4 py-3 text-tuesday-darkBlue hover:bg-gray-50"
            >
              {link.name}
            </a>
          ))}
          <a href="/enterprise" className="block px-4 py-3 text-tuesday-darkBlue hover:bg-gray-50">Enterprise</a>
          <a href="/templates" className="block px-4 py-3 text-tuesday-darkBlue hover:bg-gray-50">Templates</a>
          <a href="/resources" className="block px-4 py-3 text-tuesday-darkBlue hover:bg-gray-50">Resources</a>
          <a href="/login" className="block px-4 py-3 text-tuesday-darkBlue hover:bg-gray-50">Log in</a>
          <div className="px-4 pt-2 pb-4">
            <a href="/get-started" className="w-full btn-primary block text-center px-5 py-3">Get Started</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;