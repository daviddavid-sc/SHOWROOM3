import React from 'react';
import { Shield, Award, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-red-700 via-red-800 to-red-900 text-white py-20">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <img 
          src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg" 
          alt="Stavební práce" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Kvalita, která <span className="text-red-200">přetrvá</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
            27+ let zkušeností v instalatérských, topenářských a stavebních pracích. 
            Špičková řemeslná kvalita pro váš domov.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={scrollToContact}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg"
            >
              Nezávazná poptávka
            </button>
            <a 
              href="tel:+420379123456"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-700 transition-colors"
            >
              +420 379 123 456
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <div className="bg-red-600 p-4 rounded-full mb-4">
                <Shield size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Certifikovaní odborníci</h3>
              <p className="text-red-200 text-center">Všechny práce provádíme s garantovanou kvalitou a v souladu s platnými normami</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-red-600 p-4 rounded-full mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">27+ let zkušeností</h3>
              <p className="text-red-200 text-center">Od roku 1996 poskytujeme špičkové služby v Domažlicích a okolí</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-red-600 p-4 rounded-full mb-4">
                <Clock size={32} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Rychlé řešení</h3>
              <p className="text-red-200 text-center">Rychlá reakce na vaše požadavky, profesionální přístup a dodržování termínů</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;