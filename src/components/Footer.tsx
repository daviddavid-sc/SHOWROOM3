import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-4">STAVEBNINY</h3>
            <p className="text-gray-300 mb-4">
              Váš spolehlivý partner pro instalatérské, topenářské a stavební práce od roku 1996.
            </p>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <MapPin size={16} />
              <span>Domažlice a okolí</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 mb-2">
              <Phone size={16} />
              <a href="tel:+420379123456" className="hover:text-red-400">+420 379 123 456</a>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail size={16} />
              <a href="mailto:info@stavebniny.cz" className="hover:text-red-400">info@stavebniny.cz</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Naše služby</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-red-400 transition-colors">Tepelná čerpadla</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Vytápění</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Voda a kanalizace</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Plyn</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Zednictví</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Koupelny</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-red-400 transition-colors">Domů</a></li>
              <li><a href="#services" className="hover:text-red-400 transition-colors">Služby</a></li>
              <li><a href="#about" className="hover:text-red-400 transition-colors">O nás</a></li>
              <li><a href="#contact" className="hover:text-red-400 transition-colors">Kontakt</a></li>
              <li><a href="tel:+420379123456" className="hover:text-red-400 transition-colors">Pohotovost 24/7</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Spojte se s námi</h4>
            <div className="mb-4">
              <p className="text-gray-300 mb-2">
                <strong>Pracovní doba:</strong><br />
                Po - Pá: 7:00 - 17:00<br />
                So: 8:00 - 12:00<br />
                Ne: Pohotovost
              </p>
            </div>
            
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                <Instagram size={24} />
              </a>
            </div>

            <a 
              href="tel:+420379123456"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors font-semibold inline-block"
            >
              Zavolat nyní
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} STAVEBNINY. Všechna práva vyhrazena.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-red-400 transition-colors">Ochrana osobních údajů</a>
              <a href="#" className="hover:text-red-400 transition-colors">Obchodní podmínky</a>
              <a href="#" className="hover:text-red-400 transition-colors">Cookies</a>
            </div>
          </div>
          
          <div className="text-center mt-4 pt-4 border-t border-gray-700">
            <p className="text-gray-500 text-sm italic">
              "Špatná kvalita zůstává i když se zapomene na cenu"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;