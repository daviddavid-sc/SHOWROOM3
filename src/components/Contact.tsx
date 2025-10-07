import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Děkujeme za vaši poptávku! Brzy se vám ozveme.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Kontaktujte nás</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Potřebujete poradenství nebo cenovou nabídku? Rádi se vám věnujeme a najdeme 
              nejlepší řešení pro váš projekt.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Nezávazná poptávka</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Jméno a příjmení *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Typ služby
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Vyberte službu</option>
                    <option value="tepelna-cerpadla">Tepelná čerpadla</option>
                    <option value="vytapeni">Vytápění</option>
                    <option value="voda">Voda a kanalizace</option>
                    <option value="plyn">Plyn</option>
                    <option value="zednictvi">Zednictví</option>
                    <option value="koupelny">Koupelny</option>
                    <option value="jine">Jiné</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Popis práce *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Popište co potřebujete, termín realizace, místo realizace..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-red-700 text-white px-6 py-4 rounded-md hover:bg-red-800 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Odeslat poptávku</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Emergency Contact */}
              <div className="bg-red-600 text-white p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Pohotovostní služba</h3>
                <p className="mb-4">Máte poruchu vytápění nebo vody? Volejte 24/7!</p>
                <a 
                  href="tel:+420379123456"
                  className="bg-white text-red-600 px-6 py-3 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
                >
                  +420 379 123 456
                </a>
              </div>

              {/* Contact Details */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Kontaktní informace</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="text-red-700 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800">Telefon</h4>
                      <a href="tel:+420379123456" className="text-red-700 hover:text-red-800">
                        +420 379 123 456
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="text-red-700 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <a href="mailto:info@stavebniny.cz" className="text-red-700 hover:text-red-800">
                        info@stavebniny.cz
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-red-700 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800">Adresa</h4>
                      <p className="text-gray-600">
                        STAVEBNINY<br />
                        Prokopa Velikého 691<br />
                        Domažlice, Česká republika
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="text-red-700 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-gray-800">Pracovní doba</h4>
                      <p className="text-gray-600">
                        Po - Pá: 7:00 - 17:00<br />
                        So: 8:00 - 12:00<br />
                        Ne: Pohotovost
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-red-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Oblasti působení</h3>
                <div className="text-gray-700">
                  <p className="mb-2"><strong>Hlavní oblast:</strong> Domažlice a okolí</p>
                  <p className="mb-2"><strong>Další oblasti:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Klatovy a okolí</li>
                    <li>• Horšovský Týn</li>
                    <li>• Stod a okolí</li>
                    <li>• Další města v Plzeňském kraji</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;