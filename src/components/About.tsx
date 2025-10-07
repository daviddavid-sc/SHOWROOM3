import React from 'react';
import { Users, MapPin, CheckCircle, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                STAVEBNINY - Váš spolehlivý partner od roku 1996
              </h2>
              
              <p className="text-lg text-gray-600 mb-6">
                Více než čtvrt století poskytujeme špičkové služby v oblasti instalatérství, 
                topenářství a stavebnictví. Naše motto „Špatná kvalita zůstává i když se zapomene na cenu" 
                vyjadřuje náš přístup k práci - kvalita je pro nás na prvním místě.
              </p>
              
              <p className="text-lg text-gray-600 mb-8">
                Sídlíme v Domažlicích na adrese Prokopa Velikého 691 a naše služby poskytujeme 
                v celém regionu. Máme bohaté zkušenosti s projekty všech velikostí - od drobných 
                oprav až po kompletní rekonstrukce.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Certifikace</h4>
                    <p className="text-gray-600">Všichni naši technici jsou řádně certifikováni</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Garance</h4>
                    <p className="text-gray-600">Na všechny práce poskytujeme záruku</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Rychlost</h4>
                    <p className="text-gray-600">Rychlá reakce na vaše požadavky</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-500 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-800">Kvalita</h4>
                    <p className="text-gray-600">Používáme pouze kvalitní materiály</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Stats & Contact */}
            <div className="space-y-8">
              
              {/* Company Image */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.pexels.com/photos/5691654/pexels-photo-5691654.jpeg" 
                  alt="STAVEBNINY - profesionální práce" 
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Stats */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Důvěra zákazníků</h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-700 mb-2">27+</div>
                    <div className="text-gray-600">let zkušeností</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-700 mb-2">1000+</div>
                    <div className="text-gray-600">spokojených zákazníků</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-700 mb-2">100%</div>
                    <div className="text-gray-600">garancí na práce</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-700 mb-2">24/7</div>
                    <div className="text-gray-600">pohotovost</div>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="bg-red-700 text-white p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <MapPin className="mr-2" size={24} />
                  Kde nás najdete
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold">STAVEBNINY</div>
                    <div className="text-red-100">Prokopa Velikého 691</div>
                    <div className="text-red-100">Domažlice, Česká republika</div>
                  </div>
                  
                  <div>
                    <div className="font-semibold">Oblasti působení:</div>
                    <div className="text-red-100">Domažlice a okolí, Plzeňský kraj</div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-3">
                  "S firmou STAVEBNINY spolupracujeme již několik let. Vždy profesionální přístup, 
                  kvalitně odvedená práce a dodržení termínů. Můžeme jen doporučit!"
                </p>
                <div className="text-sm text-gray-600">- Jana K., Domažlice</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;