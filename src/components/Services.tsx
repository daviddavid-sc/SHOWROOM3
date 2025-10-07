import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Thermometer, 
  Droplets, 
  Flame, 
  Hammer, 
  Bath, 
  Zap 
} from 'lucide-react';

const Services = () => {
  const getServiceImage = (index: number) => {
    const images = [
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg', // Tepelná čerpadla
      'https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg', // Vytápění
      'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg', // Voda
      'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg', // Plyn
      'https://images.pexels.com/photos/5691451/pexels-photo-5691451.jpeg', // Zednictví
      'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg'  // Koupelny
    ];
    return images[index];
  };

  const services = [
    {
      icon: <Zap size={40} />,
      title: 'Tepelná čerpadla',
      description: 'Instalace a servis tepelných čerpadel pro efektivní vytápění a úsporu energií',
      features: ['Vzduch-voda čerpadla', 'Země-voda čerpadla', 'Servis a údržba', 'Energetické poradenství'],
      path: '/tepelna-cerpadla'
    },
    {
      icon: <Thermometer size={40} />,
      title: 'Topení',
      description: 'Kompletní vytápěcí systémy - od návrhu přes instalaci až po servis',
      features: ['Ústřední vytápění', 'Podlahové vytápění', 'Radiátory', 'Kotle a ohřívače'],
      path: '/topeni'
    },
    {
      icon: <Droplets size={40} />,
      title: 'Vodoinstalace',
      description: 'Instalatérské práce všeho druhu pro váš komfort a bezpečnost',
      features: ['Vodovodní přípojky', 'Kanalizační systémy', 'Opravy a údržba', 'Čistírny odpadních vod'],
      path: '/vodoinstalace'
    },
    {
      icon: <Flame size={40} />,
      title: 'Plyn',
      description: 'Bezpečné plynové instalace provedené certifikovanými odborníky',
      features: ['Plynové přípojky', 'Plynovodní rozvody', 'Revize a kontroly', 'Plynové spotřebiče'],
      path: '/plyn'
    },
    {
      icon: <Hammer size={40} />,
      title: 'Zednické práce',
      description: 'Kvalitní zednické práce pro stavby, rekonstrukce a opravy',
      features: ['Stavební práce', 'Rekonstrukce', 'Opravy zdiva', 'Obkladačské práce'],
      path: '/zednicke-prace'
    },
    {
      icon: <Bath size={40} />,
      title: 'Rekonstrukce koupelen',
      description: 'Kompletní rekonstrukce koupelen od návrhu po finální úpravy',
      features: ['Návrh koupelny', 'Rekonstrukce', 'Obklady a dlažby', 'Sanitární technika'],
      path: '/rekonstrukce-koupelen'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Naše služby</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Poskytujeme komplexní služby v oblasti instalatérství, topenářství a stavebnictví. 
            Každou práci provádíme s maximální péčí a odborností.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Service Image */}
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={getServiceImage(index)}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-8">
              <div className="text-red-700 mb-6 group-hover:text-red-800 transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-red-700 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link 
                  to={service.path}
                  className="text-red-700 font-semibold hover:text-red-800 transition-colors"
                >
                  Zjistit více →
                </Link>
              </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-red-700 text-white p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Potřebujete poradenství?</h3>
            <p className="text-red-100 mb-6">
              Nejste si jisti, kterou službu potřebujete? Rádi vám poradíme a najdeme nejvhodnější řešení pro váš projekt.
            </p>
            <a 
              href="tel:+420379123456"
              className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition-colors font-semibold inline-block"
            >
              Bezplatná konzultace
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;