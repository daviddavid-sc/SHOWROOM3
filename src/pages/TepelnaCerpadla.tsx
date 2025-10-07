import React from 'react';
import { Zap, Thermometer, Leaf, Calculator, CheckCircle, Phone } from 'lucide-react';

const TepelnaCerpadla = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <img 
            src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg" 
            alt="Tepelné čerpadlo" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-6">
              <Zap size={64} className="mx-auto text-green-200" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tepelná čerpadla
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Moderní a efektivní řešení pro vytápění vašeho domova. 
              Úspora až 75% nákladů na vytápění s ekologickým přístupem.
            </p>
            <a 
              href="tel:+420379123456"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg inline-flex items-center"
            >
              <Phone className="mr-2" size={20} />
              Konzultace zdarma
            </a>
          </div>
        </div>
      </section>

      {/* Types of Heat Pumps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Typy tepelných čerpadel</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nabízíme komplexní řešení pro všechny typy objektů a požadavků
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-blue-600 mb-6">
                <Thermometer size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vzduch-voda</h3>
              <p className="text-gray-600 mb-4">
                Nejpopulárnější typ tepelného čerpadla. Využívá teplo z venkovního vzduchu 
                pro ohřev vody v topném systému.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Nižší pořizovací náklady</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Jednoduchá instalace</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Vhodné pro většinu domů</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-blue-600 mb-6">
                <Leaf size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Země-voda</h3>
              <p className="text-gray-600 mb-4">
                Nejvýkonnější systém využívající stabilní teplotu země 
                prostřednictvím zemních kolektorů nebo vrtů.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Nejvyšší účinnost</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Stabilní výkon</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Dlouhá životnost</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-blue-600 mb-6">
                <Calculator size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Voda-voda</h3>
              <p className="text-gray-600 mb-4">
                Využívá teplo ze spodní vody prostřednictvím studní. 
                Velmi efektivní řešení tam, kde je dostupná spodní voda.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Vynikající účinnost</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Konstantní výkon</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Možnost chlazení</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Výhody tepelných čerpadel</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <CheckCircle className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Úspora nákladů</h4>
                      <p className="text-gray-600">Snížení nákladů na vytápění až o 75% oproti klasickým způsobům vytápění</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Leaf className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Ekologické řešení</h4>
                      <p className="text-gray-600">Využívá obnovitelné zdroje energie, minimální produkce CO₂</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Thermometer className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Celoroční komfort</h4>
                      <p className="text-gray-600">Vytápění v zimě, chlazení v létě, ohřev teplé vody</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Zap className="text-green-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Vysoká účinnost</h4>
                      <p className="text-gray-600">COP až 5,0 - z 1 kWh elektřiny získáte až 5 kWh tepla</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Kalkulace úspor</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Rodinný dům 120 m²</span>
                    <span className="font-semibold">Roční náklady</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Plynový kotel</span>
                    <span className="text-red-600 font-semibold">85 000 Kč</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tepelné čerpadlo</span>
                    <span className="text-green-600 font-semibold">21 000 Kč</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t font-bold text-lg">
                    <span>Úspora za rok</span>
                    <span className="text-green-600">64 000 Kč</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700">
                    * Výpočet je orientační a závisí na typu objektu, izolaci a způsobu vytápění
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Proces instalace</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Konzultace a návrh</h4>
                  <p className="text-gray-600">Prohlídka objektu, návrh optimálního řešení a kalkulace nákladů</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Projektová dokumentace</h4>
                  <p className="text-gray-600">Vypracování kompletní projektové dokumentace a vyřízení povolení</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Instalace</h4>
                  <p className="text-gray-600">Profesionální instalace certifikovanými technici s garancí kvality</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Uvedení do provozu</h4>
                  <p className="text-gray-600">Zkušební provoz, seřízení a předání s kompletní dokumentací</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">5</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Servis a údržba</h4>
                  <p className="text-gray-600">Pravidelný servis a 24/7 pohotovostní služba pro maximální spolehlivost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Zajímá vás instalace tepelného čerpadla?</h2>
          <p className="text-xl mb-8 text-red-100">
            Kontaktujte nás pro bezplatnou konzultaci a cenovou nabídku na míru
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+420379123456"
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2" size={20} />
              +420 379 123 456
            </a>
            <a 
              href="mailto:info@stavebniny.cz"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-700 transition-colors"
            >
              Napsat email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TepelnaCerpadla;