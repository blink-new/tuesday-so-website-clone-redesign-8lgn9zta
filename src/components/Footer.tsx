import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
      <div className="container-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-bold gradient-text">Tuesday.so</span>
            </div>
            <p className="text-tuesday-gray mb-4">
              The work operating system that lets you manage everything in one place.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-tuesday-darkBlue font-medium mb-4">Product</h5>
            <ul className="space-y-3">
              <li><a href="/product" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Features</a></li>
              <li><a href="/integrations" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Integrations</a></li>
              <li><a href="/enterprise" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Enterprise</a></li>
              <li><a href="/security" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Security</a></li>
              <li><a href="/pricing" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Pricing</a></li>
              <li><a href="/templates" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Templates</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-tuesday-darkBlue font-medium mb-4">Resources</h5>
            <ul className="space-y-3">
              <li><a href="/help" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Help Center</a></li>
              <li><a href="/community" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Community</a></li>
              <li><a href="/webinars" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Webinars</a></li>
              <li><a href="/blog" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Blog</a></li>
              <li><a href="/changelog" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">What's New</a></li>
              <li><a href="/status" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-tuesday-darkBlue font-medium mb-4">Company</h5>
            <ul className="space-y-3">
              <li><a href="/about" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">About Us</a></li>
              <li><a href="/careers" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Careers</a></li>
              <li><a href="/partners" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Partners</a></li>
              <li><a href="/press" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Press</a></li>
              <li><a href="/contact" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Contact Us</a></li>
              <li><a href="/investors" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Investors</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-tuesday-gray text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Tuesday.so, Inc. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="/terms" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Terms of Service</a>
              <a href="/privacy" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Privacy Policy</a>
              <a href="/cookies" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Cookies</a>
              <a href="/accessibility" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Accessibility</a>
              <a href="/sitemap" className="text-tuesday-gray hover:text-tuesday-blue transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;