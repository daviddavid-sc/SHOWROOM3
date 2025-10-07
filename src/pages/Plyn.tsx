import React from 'react';
import { Flame, Shield, Settings, AlertTriangle, CheckCircle, Phone, FileText } from 'lucide-react';

const Plyn = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-red-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <img 
            src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg" 
            alt="Plynové instalace" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-6">
              <Flame size={64} className="mx-auto text-orange-200" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Plynové instalace
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Bezpečné plynové instalace provedené autorizovanými technikami. 
              Komplexní služby od přípojek po revize s garancí bezpečnosti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+420379123456"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg inline-flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Konzultace zdarma
              </a>
              <a 
                href="#safety"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-700 transition-colors"
              >
                Bezpečnost
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Warning */}
      <section className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3 text-center">
            <Shield size={24} />
            <span className="font-semibold">POZOR!</span>
            <span>-</span>
            <span>Plynové instalace smí provádět pouze autorizované osoby</span>
            <span>-</span>
            <span className="font-bold">Jsme certifikovaní odborníci</span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Naše plynové služby</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Komplexní služby v oblasti plynových instalací s důrazem na bezpečnost a kvalitu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-orange-600 mb-6">
                <Settings size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Plynové přípojky</h3>
              <p className="text-gray-600 mb-4">
                Nové plynové přípojky včetně vyřízení všech povolení 
                a koordinace s plynárenskou společností.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Vyřízení povolení</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Koordinace s RWE/E.ON</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />HUP a regulátory</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Revize a kolaudace</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-orange-600 mb-6">
                <Flame size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vnitřní plynovody</h3>
              <p className="text-gray-600 mb-4">
                Rozvody plynu v objektech podle platných norem 
                a bezpečnostních předpisů.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Ocelové potrubí</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Měděné rozvody</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Flexibilní přívody</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Tlakové zkoušky</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-orange-600 mb-6">
                <Shield size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Plynové spotřebiče</h3>
              <p className="text-gray-600 mb-4">
                Instalace, připojení a servis plynových spotřebičů 
                včetně komínových systémů.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Plynové kotle</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Ohřívače vody</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Sporáky a trouby</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Krby a kamna</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-8 rounded-lg hover:shadow-lg transition-shadow border-2 border-orange-200">
              <div className="text-red-600 mb-6">
                <FileText size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-700">Revize a kontroly</h3>
              <p className="text-gray-600 mb-4">
                Povinné revize plynových zařízení podle platné legislativy. 
                Pravidelné kontroly pro vaši bezpečnost.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Roční revize spotřebičů</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Kontrola komínů</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Měření emisí</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Revizní zprávy</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-orange-600 mb-6">
                <Settings size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Opravy a modernizace</h3>
              <p className="text-gray-600 mb-4">
                Opravy plynových zařízení, modernizace starých instalací 
                a výměna zastaralých komponentů.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Opravy úniků</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Výměna regulátorů</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Modernizace rozvodů</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Nouzové opravy</li>
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-lg hover:shadow-lg transition-shadow border-2 border-red-200">
              <div className="text-red-600 mb-6">
                <AlertTriangle size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-700">Pohotovost</h3>
              <p className="text-gray-600 mb-4">
                24/7 pohotovostní služba pro havárie a úniky plynu. 
                Rychlý zásah certifikovaných techniků.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Úniky plynu</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Poruchy spotřebičů</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Rychlý příjezd</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Bezpečnostní opatření</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Bezpečnost na prvním místě</h2>
              <p className="text-xl text-gray-600">
                Plyn je nebezpečný - proto věřte pouze certifikovaným odborníkům
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Shield className="text-orange-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Autorizovaní technici</h4>
                      <p className="text-gray-600">Všichni naši pracovníci mají platnou autorizaci pro práce s plynem</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <FileText className="text-orange-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Dodržování norem</h4>
                      <p className="text-gray-600">Přísné dodržování ČSN a bezpečnostních předpisů</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Settings className="text-orange-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Kvalitní materiály</h4>
                      <p className="text-gray-600">Používáme pouze certifikované komponenty od renomovaných výrobců</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <CheckCircle className="text-orange-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Záruka kvality</h4>
                      <p className="text-gray-600">Poskytujeme záruku na všechny provedené práce</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-red-700">Varovné signály úniku plynu</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                    <AlertTriangle className="text-red-600" size={20} />
                    <span className="font-semibold">Zápach plynu (přidaný merkaptant)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                    <AlertTriangle className="text-red-600" size={20} />
                    <span className="font-semibold">Syčení u plynového potrubí</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                    <AlertTriangle className="text-red-600" size={20} />
                    <span className="font-semibold">Zvadlá vegetace nad potrubím</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                    <AlertTriangle className="text-red-600" size={20} />
                    <span className="font-semibold">Probublávání v kaluži</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-red-600 text-white rounded-lg">
                  <h4 className="font-bold mb-2">V případě úniku plynu:</h4>
                  <ul className="text-sm space-y-1">
                    <li>1. Nepoužívejte elektrické spotřebiče</li>
                    <li>2. Nevypínejte světla</li>
                    <li>3. Otevřete okna</li>
                    <li>4. Opusťte budovu</li>
                    <li>5. Zavolejte hasiče: 150</li>
                    <li>6. Kontaktujte nás: +420 379 123 456</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Povinné revize</h2>
            <p className="text-xl text-gray-600">
              Přehled povinností majitelů plynových zařízení
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-orange-700">Roční kontroly</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Plynové kotle</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Ohřívače vody</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Krby a kamna</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Sporáky</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-700">Kontroly komínů</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />1x ročně - běžná kontrola</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />1x za 3 roky - revize</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Čištění dle potřeby</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Revizní zpráva</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-green-700">Měření emisí</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Kotle nad 10 kW</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />1x za 2 roky</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Protokol o měření</li>
                  <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Seřízení hoření</li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-red-700">Sankce za nesplnění</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><AlertTriangle size={16} className="text-red-500 mr-2" />Pokuty až 50 000 Kč</li>
                  <li className="flex items-center"><AlertTriangle size={16} className="text-red-500 mr-2" />Odpojení od plynu</li>
                  <li className="flex items-center"><AlertTriangle size={16} className="text-red-500 mr-2" />Problémy s pojišťovnou</li>
                  <li className="flex items-center"><AlertTriangle size={16} className="text-red-500 mr-2" />Bezpečnostní riziko</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Potřebujete plynové instalace?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Kontaktujte nás pro bezpečné a odborné řešení vašich plynových potřeb
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+420379123456"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2" size={20} />
              +420 379 123 456
            </a>
            <a 
              href="mailto:info@stavebniny.cz"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-700 transition-colors"
            >
              Napsat email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plyn;