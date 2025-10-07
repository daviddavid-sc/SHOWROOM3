import React from 'react';
import { Droplets, Wrench, Home, ShowerHead, CheckCircle, Phone, AlertTriangle } from 'lucide-react';

const Vodoinstalace = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <img 
            src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg" 
            alt="Vodoinstalace" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-6">
              <Droplets size={64} className="mx-auto text-blue-200" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Vodoinstalace
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Kompletní vodoinstalační služby pro váš domov i firmu. 
              Od nových instalací po opravy a modernizace s garancí kvality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+420379123456"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg inline-flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Pohotovost 24/7
              </a>
              <a 
                href="#services"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
              >
                Zobrazit služby
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3 text-center">
            <AlertTriangle size={24} />
            <span className="font-semibold">POHOTOVOST 24/7</span>
            <span>-</span>
            <span>Havárie vody a kanalizace</span>
            <span>-</span>
            <a href="tel:+420379123456" className="font-bold hover:underline">+420 379 123 456</a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Naše vodoinstalační služby</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zajišťujeme kompletní služby v oblasti vody a kanalizace pro všechny typy objektů
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-6">
                <Home size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vodovodní přípojky</h3>
              <p className="text-gray-600 mb-4">
                Nové vodovodní přípojky včetně vyřízení povolení a koordinace 
                s vodovodní společností.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Nové přípojky</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Rekonstrukce stávajících</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Vyřízení povolení</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Vodoměrné šachty</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-6">
                <Droplets size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Vnitřní rozvody</h3>
              <p className="text-gray-600 mb-4">
                Kompletní vnitřní vodovodní instalace pro novostavby, 
                rekonstrukce i modernizace stávajících rozvodů.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Plastové potrubí</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Měděné rozvody</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Izolace potrubí</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Tlakové zkoušky</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-6">
                <ShowerHead size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sanitární technika</h3>
              <p className="text-gray-600 mb-4">
                Instalace a výměna sanitární techniky - umyvadla, WC, 
                sprchové kouty, vany a další.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Umyvadla a WC</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Sprchové kouty</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Vany a vířivky</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Baterie a směšovače</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-6">
                <Wrench size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Opravy a údržba</h3>
              <p className="text-gray-600 mb-4">
                Rychlé opravy poruch, pravidelná údržba a preventivní 
                kontroly vodovodních systémů.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Opravy úniků</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Čištění kanalizace</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Výměna armatur</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Preventivní kontroly</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg hover:shadow-lg transition-shadow border-2 border-blue-200">
              <div className="text-red-600 mb-6">
                <AlertTriangle size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-700">Pohotovostní služba</h3>
              <p className="text-gray-600 mb-4">
                24/7 pohotovostní služba pro havárie a kritické poruchy. 
                Rychlý příjezd a profesionální řešení.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Havárie potrubí</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Ucpané kanalizace</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Rychlý příjezd</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Nonstop dostupnost</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-6">
                <Home size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Čistírny odpadních vod</h3>
              <p className="text-gray-600 mb-4">
                Návrh, instalace a servis domovních čistíren odpadních vod 
                pro rodinné domy a menší objekty.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Biologické čistírny</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Septiky a jímky</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Revize a servis</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Vyřízení povolení</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Pohotovostní služba 24/7</h2>
              <p className="text-xl text-gray-600">
                Rychlé řešení havárií a kritických poruch kdykoliv během dne i noci
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <AlertTriangle className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Prasknuté potrubí</h4>
                      <p className="text-gray-600">Rychlé uzavření vody a nouzové opravy pro minimalizaci škod</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <Droplets className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Ucpaná kanalizace</h4>
                      <p className="text-gray-600">Profesionální čištění a odstranění ucpávek včetně kamerové inspekce</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <Wrench className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Poruchy armatur</h4>
                      <p className="text-gray-600">Výměna nebo oprava vadných ventilů, kohoutků a směšovačů</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <ShowerHead className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Havárie WC</h4>
                      <p className="text-gray-600">Rychlé obnovení funkčnosti sanitárních zařízení</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-red-700">Kontakt v případě havárie</h3>
                <div className="space-y-4">
                  <div className="bg-red-600 text-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold mb-2">+420 379 123 456</div>
                    <div className="text-red-100">Nonstop pohotovost</div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">
                      <strong>Průměrná doba příjezdu:</strong> 30-60 minut
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Pokrytá oblast:</strong> Domažlice a okolí 25 km
                    </p>
                  </div>

                  <div class="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Co máte připraveno:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Uzavřete hlavní uzávěr vody</li>
                      <li>• Popište poruchu co nejpřesněji</li>
                      <li>• Zajistěte přístup k místu poruchy</li>
                      <li>• Zdokumentujte škody (foto)</li>
                    </ul>
                  </div>
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
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Konzultace a prohlídka</h4>
                  <p className="text-gray-600">Probereme vaše požadavky a provedeme odbornou prohlídku objektu</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Návrh řešení</h4>
                  <p className="text-gray-600">Navrhněme optimální technické řešení včetně materiálů a technologií</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Cenová nabídka</h4>
                  <p className="text-gray-600">Předložíme detailní cenovou nabídku s rozpočtem a termíny</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Realizace</h4>
                  <p className="text-gray-600">Provedeme práce rychle a kvalitně s minimálním narušením provozu</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">5</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Předání a servis</h4>
                  <p className="text-gray-600">Předáme dílo s garancí a zajistíme následný servis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Potřebujete vodoinstalační práce?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Kontaktujte nás pro odbornou konzultaci nebo rychlou pomoc při havárii
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+420379123456"
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center"
            >
              <AlertTriangle className="mr-2" size={20} />
              Pohotovost 24/7
            </a>
            <a 
              href="mailto:info@stavebniny.cz"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
            >
              Napsat email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vodoinstalace;