import React from 'react';
import { Bath, Droplets, Palette, Ruler, CheckCircle, Phone, Sparkles } from 'lucide-react';

const RekonstrukceKoupelen = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <img 
            src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg" 
            alt="Rekonstrukce koupelen" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="mb-6">
              <Bath size={64} className="mx-auto text-purple-200" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Rekonstrukce koupelen
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Kompletní rekonstrukce koupelen od návrhu po finální úpravy. 
              Vytvoříme vám moderní a funkční koupelnu vašich snů.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+420379123456"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg inline-flex items-center justify-center"
              >
                <Phone className="mr-2" size={20} />
                Konzultace zdarma
              </a>
              <a 
                href="#gallery"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors"
              >
                Inspirace
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Komplexní služby pro koupelny</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zajistíme vše od návrhu až po finální úklid - vaše nová koupelna na klíč
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-purple-600 mb-6">
                <Ruler size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Návrh a projekt</h3>
              <p className="text-gray-600 mb-4">
                3D návrh koupelny podle vašich představ a možností prostoru. 
                Optimalizujeme dispozici pro maximální komfort.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />3D vizualizace</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Technická dokumentace</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Výběr materiálů</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Rozpočet na míru</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-purple-600 mb-6">
                <Droplets size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Instalatérské práce</h3>
              <p className="text-gray-600 mb-4">
                Kompletní vodovodní a odpadní rozvody, instalace 
                sanitární techniky a připojení všech zařízení.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Rozvody vody</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Kanalizační přípojky</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Instalace sanitárního vybavení</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Tlakové zkoušky</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-purple-600 mb-6">
                <Sparkles size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Elektroinstalace</h3>
              <p className="text-gray-600 mb-4">
                Bezpečné elektrické rozvody s ochranou proti vlhkosti, 
                osvětlení a připojení elektrospotřebičů.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Rozvody 230V/400V</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />LED osvětlení</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Zásuvky a vypínače</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Chránič FI</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-purple-600 mb-6">
                <Palette size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Obklady a dlažby</h3>
              <p className="text-gray-600 mb-4">
                Profesionální pokládka keramických obkladů a dlažeb. 
                Široký výběr designů a materiálů.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Keramické obklady</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Přírodní kámen</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Mozaikové obklady</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Velkoformátové dlažby</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-purple-600 mb-6">
                <Bath size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sanitární technika</h3>
              <p className="text-gray-600 mb-4">
                Instalace kvalitní sanitární techniky od renomovaných 
                výrobců. Vany, sprchy, WC, umyvadla.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Sprchové kouty</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Vany a vířivky</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />WC a bidety</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Umyvadla a baterie</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg hover:shadow-lg transition-shadow border-2 border-purple-200">
              <div className="text-orange-600 mb-6">
                <Sparkles size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-700">Kompletní rekonstrukce</h3>
              <p className="text-gray-600 mb-4">
                Vše pod jednou střechou - od bourání po finální úklid. 
                Koordinujeme všechny profese pro hladký průběh.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Bourací práce</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Hydroizolace</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Koordinace profesí</li>
                <li className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" />Finální úklid</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Styles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Populární styly koupelen</h2>
            <p className="text-xl text-gray-600">
              Inspirujte se nejoblíbenějšími trendy v designu koupelen
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg"
                    alt="Minimalistická koupelna"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Moderní minimalizmus</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Čisté linie, neutrální barvy, velkoformátové dlažby a jednoduché tvary
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">Bílá</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">Šedá</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">Velké formáty</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                    alt="Skandinávská koupelna"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Skandinávský styl</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Světlé dřevo, bílé barvy, přírodní materiály a funkční design
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 px-3 py-1 rounded-full text-xs">Dřevo</span>
                  <span className="bg-blue-100 px-3 py-1 rounded-full text-xs">Bílá</span>
                  <span className="bg-blue-100 px-3 py-1 rounded-full text-xs">Funkčnost</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg"
                    alt="Wellness koupelna"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Wellness & Spa</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Přírodní kámen, zemité tóny, rozlehlé sprchy a relaxační prvky
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 px-3 py-1 rounded-full text-xs">Kámen</span>
                  <span className="bg-green-100 px-3 py-1 rounded-full text-xs">Hnědá</span>
                  <span className="bg-green-100 px-3 py-1 rounded-full text-xs">Relax</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg"
                    alt="Retro koupelna"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Retro & Vintage</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Vzorované obklady, barevné akcenty, mosazné prvky a nostalgický design
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-100 px-3 py-1 rounded-full text-xs">Vzory</span>
                  <span className="bg-yellow-100 px-3 py-1 rounded-full text-xs">Mosaz</span>
                  <span className="bg-yellow-100 px-3 py-1 rounded-full text-xs">Barvy</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg"
                    alt="Luxusní koupelna"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Luxusní design</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Mramor, zlato, designová baterie a prémiové materiály
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 px-3 py-1 rounded-full text-xs">Mramor</span>
                  <span className="bg-purple-100 px-3 py-1 rounded-full text-xs">Zlato</span>
                  <span className="bg-purple-100 px-3 py-1 rounded-full text-xs">Premium</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg"
                    alt="Industriální koupelna"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Industriální styl</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Beton, černá, ocel, exposed instalace a hrubé povrchy
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-100 px-3 py-1 rounded-full text-xs">Beton</span>
                  <span className="bg-indigo-100 px-3 py-1 rounded-full text-xs">Černá</span>
                  <span className="bg-indigo-100 px-3 py-1 rounded-full text-xs">Ocel</span>
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Průběh rekonstrukce</h2>
            <p className="text-xl text-gray-600">
              Krok za krokem k vaší nové koupelně
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">1</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Konzultace a zaměření</h4>
                  <p className="text-gray-600">Probereme vaše představy, zaměříme prostor a navrhneme základní koncept</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">2</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">3D návrh a rozpočet</h4>
                  <p className="text-gray-600">Vytvoříme 3D vizualizaci vaší budoucí koupelny a detailní rozpočet</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">3</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Demolice a příprava</h4>
                  <p className="text-gray-600">Odstranění starého vybavení, úprava rozvodů a příprava podkladu</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">4</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Instalace rozvodů</h4>
                  <p className="text-gray-600">Nové rozvody vody, elektřiny, kanalizace a případně vytápění</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">5</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Obklady a dlažby</h4>
                  <p className="text-gray-600">Profesionální pokládka obkladů a dlažeb podle návrhu</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">6</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Instalace vybavení</h4>
                  <p className="text-gray-600">Montáž sanitární techniky, svítidel a doplňků</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">7</div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Finalizace a předání</h4>
                  <p className="text-gray-600">Dokončovací práce, úklid a předání vaší nové koupelny</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Guide */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Orientační ceník</h2>
            <p className="text-xl text-gray-600">
              Přehled cen pro různé typy rekonstrukcí koupelen
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-center">Základní rekonstrukce</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-600">150-250 tis. Kč</div>
                  <div className="text-gray-500">3-4 m² koupelna</div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle size={14} className="text-green-500 mr-2" />Bourací práce</li>
                  <li className="flex items-center"><CheckCircle size={14} className="text-green-500 mr-2" />Standardní obklady</li>
                  <li className="flex items-center"><CheckCircle size={14} className="text-green-500 mr-2" />Základní sanitární vybavení</li>
                  <li className="flex items-center"><CheckCircle size={14} className="text-green-500 mr-2" />Rozvody vody a elektřiny</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-purple-200">
                <h3 className="text-xl font-bold mb-4 text-center text-purple-700">Komfortní rekonstrukce</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-purple-600">250-400 tis. Kč</div>
                  <div className="text-gray-500">3-4 m² koupelna</div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle size={14} className="text-green-500 mr-2" />Kvalitní obklady a dlažby</li>
                  <li className="flex items-center"><CheckCircle size={14} className="text-green-500 mr-2" />Sprchový kout/vana</li>
                  <li className="flex items-center"><CheckCircle size={14} className="text-green-500 mr-2" />Designové baterie</li>
                  <li className="flex items-center"><CheckCircle size={14} className="text-green-500 mr-2" />LED osvětlení</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-center">Luxusní rekonstrukce</h3>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-orange-600">400+ tis. Kč</div>
                  <div className="text-gray-500">3-4 m² koupelna</div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle size={14} className="text-green-500 mr-2" />Prémiové materiály</li>
                  <li className="flex items-center"><CheckCircle size={14} className="text-green-500 mr-2" />Designové prvky</li>
                  <li className="flex items-center"><CheckCircle size={14} className="text-green-500 mr-2" />Speciální instalace</li>
                  <li className="flex items-center"><CheckCircle size={14} className="text-green-500 mr-2" />Kompletní servis</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-yellow-50 rounded-lg">
              <p className="text-sm text-gray-700 text-center">
                <strong>Poznámka:</strong> Ceny jsou orientační a závisí na konkrétním rozsahu prací, 
                vybraných materiálech a složitosti instalací. Přesnou cenovou nabídku vytvoříme po osobní konzultaci.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Chcete novou koupelnu?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Kontaktujte nás pro bezplatnou konzultaci a návrh vaší nové koupelny
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
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors"
            >
              Napsat email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RekonstrukceKoupelen;