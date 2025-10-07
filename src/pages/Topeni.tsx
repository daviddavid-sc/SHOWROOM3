import React from 'react';
import { Thermometer, Home, Settings, Shield, CheckCircle, Phone } from 'lucide-react';

const Topeni = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <img 
            src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg" 
            alt="Vytápění" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-6">
              <Thermometer size={64} className="mx-auto text-red-200" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Vytápění
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
              Komplexní vytápěcí systémy pro váš domov. Od návrhu přes instalaci 
              až po servis - zajistíme vám teplo a komfort po celý rok.
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

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Naše vytápěcí služby</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Poskytujeme komplexní řešení vytápění pro všechny typy objektů
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-red-600 mb-6">
                <Home size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ústřední vytápění</h3>
              <p className="text-gray-600 mb-4">
                Klasické ústřední vytápění s radiátory. Instalace, modernizace 
                a servis stávajících systémů.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Plynové kotle</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Elektrické kotle</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Kombinované kotle</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Kondenzační technika</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-red-600 mb-6">
                <Settings size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Podlahové vytápění</h3>
              <p className="text-gray-600 mb-4">
                Moderní a komfortní způsob vytápění s rovnoměrným rozložením tepla 
                po celé místnosti.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Vodní podlahové vytápění</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Elektrické podlahové vytápění</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Regulace po místnostech</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Inteligentní ovládání</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-red-600 mb-6">
                <Shield size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Modernizace</h3>
              <p className="text-gray-600 mb-4">
                Modernizace starých kotelen a vytápěcích systémů pro vyšší 
                účinnost a nižší provozní náklady.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Výměna starých kotlů</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Nová regulace</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Termostatické hlavice</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Izolace potrubí</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Heating */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Typy vytápění</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Gas Heating */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-700">Plynové vytápění</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Kondenzační kotle</h4>
                    <p className="text-gray-600 text-sm">Nejvyšší účinnost až 110%, úspora plynu až 30%</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Klasické kotle</h4>
                    <p className="text-gray-600 text-sm">Osvědčená technologie, výhodná pořizovací cena</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Kombinované kotle</h4>
                    <p className="text-gray-600 text-sm">Vytápění + ohřev teplé vody v jednom</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700 font-semibold">
                    ✓ Rychlý ohřev ✓ Nižší investice ✓ Dostupnost paliva
                  </p>
                </div>
              </div>

              {/* Electric Heating */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-green-700">Elektrické vytápění</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Elektrické kotle</h4>
                    <p className="text-gray-600 text-sm">Čisté vytápění bez emisí, snadná instalace</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Akumulační topení</h4>
                    <p className="text-gray-600 text-sm">Využití levného nočního proudu</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Přímotopy</h4>
                    <p className="text-gray-600 text-sm">Rychlé a přesné vytápění jednotlivých místností</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700 font-semibold">
                    ✓ Bez emisí ✓ Tichý provoz ✓ Přesná regulace
                  </p>
                </div>
              </div>

              {/* Solid Fuel Heating */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-orange-700">Vytápění tuhými palivy</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Kotle na dřevo</h4>
                    <p className="text-gray-600 text-sm">Ekologické vytápění obnovitelným zdrojem</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Kotle na pelety</h4>
                    <p className="text-gray-600 text-sm">Automatické podávání, vysoká účinnost</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Kombinované kotle</h4>
                    <p className="text-gray-600 text-sm">Flexibilita více typů paliv</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-700 font-semibold">
                    ✓ Obnovitelný zdroj ✓ Nízké provozní náklady ✓ Nezávislost
                  </p>
                </div>
              </div>

              {/* Hybrid Systems */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-purple-700">Hybridní systémy</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Tepelné čerpadlo + kotel</h4>
                    <p className="text-gray-600 text-sm">Optimální kombinace účinnosti a spolehlivosti</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Solární systémy</h4>
                    <p className="text-gray-600 text-sm">Doplnění jakéhokoliv zdroje o solární energii</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Inteligentní řízení</h4>
                    <p className="text-gray-600 text-sm">Automatické přepínání mezi zdroji</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <p className="text-sm text-purple-700 font-semibold">
                    ✓ Maximální úspora ✓ Vysoká spolehlivost ✓ Budoucnost
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Jak postupujeme</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Analýza potřeb</h4>
                  <p className="text-gray-600">Prohlídka objektu, výpočet tepelných ztrát a návrh optimálního řešení</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Cenová nabídka</h4>
                  <p className="text-gray-600">Detailní rozpočet včetně materiálu, práce a časový harmonogram</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Realizace</h4>
                  <p className="text-gray-600">Profesionální instalace s minimálním dopadem na váš běžný život</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Předání a servis</h4>
                  <p className="text-gray-600">Zkušební provoz, zaškolení obsluhy a pravidelný servis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Potřebujete nový vytápěcí systém?</h2>
          <p className="text-xl mb-8 text-red-100">
            Kontaktujte nás pro odbornou konzultaci a cenovou nabídku na míru
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+420379123456"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center justify-center"
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

export default Topeni;