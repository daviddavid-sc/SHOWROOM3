import React from 'react';
import { Hammer, Home, Palette, Ruler, CheckCircle, Phone, HardHat } from 'lucide-react';

const ZednickePrice = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <img 
            src="https://images.pexels.com/photos/5691451/pexels-photo-5691451.jpeg" 
            alt="Zednické práce" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-6">
              <Hammer size={64} className="mx-auto text-gray-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Zednické práce
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Kvalitní zednické práce pro stavby, rekonstrukce a opravy. 
              Od základů po finální úpravy s důrazem na preciznost a trvanlivost.
            </p>
            <a 
              href="tel:+420379123456"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg inline-flex items-center"
            >
              <Phone className="mr-2" size={20} />
              Nezávazná poptávka
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Naše zednické služby</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Poskytujeme kompletní zednické práce pro všechny typy stavebních projektů
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-gray-600 mb-6">
                <Home size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Stavební práce</h3>
              <p className="text-gray-600 mb-4">
                Kompletní stavební práce pro novostavby rodinných domů, 
                bytů i komerčních objektů.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Základy a spodní stavba</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Svislé nosné konstrukce</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Přizdívky a příčky</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Komíny a ventilace</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-gray-600 mb-6">
                <Hammer size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Rekonstrukce</h3>
              <p className="text-gray-600 mb-4">
                Kompletní rekonstrukce starších objektů včetně 
                bourání, přestaveb a modernizací.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Bourací práce</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Přestavby dispozic</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Modernizace objektů</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Zateplení fasád</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-gray-600 mb-6">
                <Ruler size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Opravy zdiva</h3>
              <p className="text-gray-600 mb-4">
                Odborné opravy poškozených zdí, prasklin, 
                vlhkosti a dalších stavebních defektů.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Opravy prasklin</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Sanace vlhkého zdiva</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Výměna poškozených cihel</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Reprofilace spár</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-gray-600 mb-6">
                <Palette size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Obkladačské práce</h3>
              <p className="text-gray-600 mb-4">
                Profesionální pokládka obkladů a dlažeb 
                v koupelnách, kuchyních i exteriérech.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Keramické obklady</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Přírodní kámen</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Mozaiky</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Dlažby interiér/exteriér</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-gray-600 mb-6">
                <HardHat size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Omítky a štuky</h3>
              <p className="text-gray-600 mb-4">
                Všechny typy omítek od hrubých až po 
                dekorativní a speciální povrchové úpravy.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Hrubé a jemné omítky</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Dekorativní omítky</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Štuky a štukové prvky</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Sanační omítky</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-gray-600 mb-6">
                <Home size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Venkovní práce</h3>
              <p className="text-gray-600 mb-4">
                Stavební práce v exteriéru včetně terás, 
                plotů, zpevněných ploch a zahradní architektury.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Terasy a balkóny</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Ploty a zídky</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Zpevněné plochy</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Zahradní prvky</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Techniques */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Materiály a technologie</h2>
            <p className="text-xl text-gray-600">
              Používáme pouze kvalitní materiály a moderní stavební technologie
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Traditional Materials */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-700">Tradiční materiály</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Pálené cihly</h4>
                    <p className="text-gray-600 text-sm">Klasický materiál pro nosné konstrukce a příčky</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Přírodní kámen</h4>
                    <p className="text-gray-600 text-sm">Žula, pískovec pro obklady a dekorativní prvky</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Vápenné malty</h4>
                    <p className="text-gray-600 text-sm">Prodyšné malty pro historické objekty</p>
                  </div>
                </div>
              </div>

              {/* Modern Materials */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-green-700">Moderní materiály</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Pórobeton</h4>
                    <p className="text-gray-600 text-sm">Lehké tepelně izolační bloky</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Keramické bloky</h4>
                    <p className="text-gray-600 text-sm">Vysoká tepelná izolace a pevnost</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Zdící pěny</h4>
                    <p className="text-gray-600 text-sm">Moderní spojovací materiály</p>
                  </div>
                </div>
              </div>

              {/* Specialized Techniques */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-blue-700">Speciální technologie</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Injektáž</h4>
                    <p className="text-gray-600 text-sm">Sanace vlhkého zdiva chemickou cestou</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Strukturální lepení</h4>
                    <p className="text-gray-600 text-sm">Pevné spojení různých materiálů</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Diamantové řezání</h4>
                    <p className="text-gray-600 text-sm">Přesné řezání betonu a zdiva</p>
                  </div>
                </div>
              </div>

              {/* Quality Assurance */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-orange-700">Kontrola kvality</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Měření rovinnosti</h4>
                    <p className="text-gray-600 text-sm">Pravidelná kontrola přesnosti provedení</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Kontrola spojů</h4>
                    <p className="text-gray-600 text-sm">Ověření pevnosti maltových spojů</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Dokumentace postupu</h4>
                    <p className="text-gray-600 text-sm">Fotodokumentace a protokoly o provedených pracích</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Typy projektů</h2>
            <p className="text-xl text-gray-600">
              Realizujeme projekty všech velikostí a typů
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Home className="text-green-600" size={48} />
                </div>
                <h3 className="text-xl font-bold mb-4">Rodinné domy</h3>
                <p className="text-gray-600">Kompletní výstavba nebo rekonstrukce rodinných domů</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <HardHat className="text-blue-600" size={48} />
                </div>
                <h3 className="text-xl font-bold mb-4">Bytové domy</h3>
                <p className="text-gray-600">Stavba a rekonstrukce bytových domů a vila</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Hammer className="text-orange-600" size={48} />
                </div>
                <h3 className="text-xl font-bold mb-4">Komerční objekty</h3>
                <p className="text-gray-600">Obchody, kanceláře, sklady a výrobní haly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Náš postup práce</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Konzultace a měření</h4>
                  <p className="text-gray-600">Prohlídka objektu, konzultace požadavků a přesné zaměření</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Návrh a rozpočet</h4>
                  <p className="text-gray-600">Vypracování technického návrhu a detailního rozpočtu</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Příprava staveniště</h4>
                  <p className="text-gray-600">Zajištění materiálu, nástrojů a bezpečnostních opatření</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Realizace</h4>
                  <p className="text-gray-600">Kvalitní provedení všech prací podle projektu a norem</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">5</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Kontrola a předání</h4>
                  <p className="text-gray-600">Finální kontrola kvality a předání díla s garancí</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Plánujete stavební projekt?</h2>
          <p className="text-xl mb-8 text-gray-300">
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
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-700 transition-colors"
            >
              Napsat email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZednickePrice;