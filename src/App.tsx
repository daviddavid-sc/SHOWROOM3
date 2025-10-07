import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import TepelnaCerpadla from './pages/TepelnaCerpadla';
import Topeni from './pages/Topeni';
import Vodoinstalace from './pages/Vodoinstalace';
import Plyn from './pages/Plyn';
import ZednickePrice from './pages/ZednickePrice';
import RekonstrukceKoupelen from './pages/RekonstrukceKoupelen';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tepelna-cerpadla" element={<TepelnaCerpadla />} />
          <Route path="/topeni" element={<Topeni />} />
          <Route path="/vodoinstalace" element={<Vodoinstalace />} />
          <Route path="/plyn" element={<Plyn />} />
          <Route path="/zednicke-prace" element={<ZednickePrice />} />
          <Route path="/rekonstrukce-koupelen" element={<RekonstrukceKoupelen />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;