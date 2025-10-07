import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const services = [
    { name: 'Tepelná čerpadla', path: '/tepelna-cerpadla' },
    { name: 'Topení', path: '/topeni' },
    { name: 'Vodoinstalace', path: '/vodoinstalace' },
    { name: 'Plyn', path: '/plyn' },
    { name: 'Zednické práce', path: '/zednicke-prace' },
    { name: 'Rekonstrukce koupelen', path: '/rekonstrukce-koupelen' }
  ];

  const isActivePage = (path: string) => {
    return location.pathname === path;
  };

  const isServicesActive = () => {
    return services.some(service => service.path === location.pathname);
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-red-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+420379123456" className="flex items-center space-x-1 hover:text-red-200 transition-colors">
              <Phone size={14} />
              <span>+420 379 123 456</span>
            </a>
            <a href="mailto:info@stanli.cz" className="flex items-center space-x-1 hover:text-red-200 transition-colors">
              <Mail size={14} />
              <span>info@stavebniny.cz</span>
            </a>
          </div>
          <div className="text-sm hidden md:block">
            27+ let zkušeností | Prokopa Velikého 100, Domažlice
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-red-700">STAVEBNINY</div>
            <div className="ml-3 text-sm text-gray-600 hidden md:block">
              Od roku 1996
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/"
              className={`font-medium transition-colors ${
                isActivePage('/') ? 'text-red-700' : 'text-gray-700 hover:text-red-700'
              }`}
            >
              Domů
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className={`flex items-center font-medium transition-colors ${
                  isServicesActive() ? 'text-red-700' : 'text-gray-700 hover:text-red-700'
                }`}
              >
                Služby
                <ChevronDown size={16} className="ml-1" />
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md border z-50"
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className={`block px-4 py-3 text-sm transition-colors border-b border-gray-100 last:border-b-0 ${
                        isActivePage(service.path) 
                          ? 'text-red-700 bg-red-50' 
                          : 'text-gray-700 hover:text-red-700 hover:bg-gray-50'
                      }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-red-700 font-medium transition-colors"
            >
              O nás
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-red-700 font-medium transition-colors"
            >
              Kontakt
            </button>
            <a 
              href="tel:+420379123456"
              className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors font-medium"
            >
              Zavolat nyní
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/"
                className={`font-medium text-left ${
                  isActivePage('/') ? 'text-red-700' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Domů
              </Link>
              
              <div className="space-y-2">
                <div className="font-medium text-gray-700">Služby:</div>
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className={`block pl-4 text-sm ${
                      isActivePage(service.path) ? 'text-red-700' : 'text-gray-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection('about');
                }}
                className="text-gray-700 font-medium text-left"
              >
                O nás
              </button>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  scrollToSection('contact');
                }}
                className="text-gray-700 font-medium text-left"
              >
                Kontakt
              </button>
              <a 
                href="tel:+420379123456"
                className="bg-red-700 text-white px-6 py-2 rounded-md hover:bg-red-800 transition-colors font-medium text-center"
              >
                Zavolat nyní
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;