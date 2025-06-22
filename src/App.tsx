import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Atom, Shield, FileCheck, BookOpen, Users, HelpCircle, Mail } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Certification from './pages/Certification';
import Standards from './pages/Standards';
import Resources from './pages/Resources';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Apply from './pages/Apply';
import Footer from './components/Footer';

// Blog pages
import LatticeBasedCryptography from './pages/blog/LatticeBasedCryptography';
import KyberVsSaber from './pages/blog/KyberVsSaber';
import QuantumKeyManagement from './pages/blog/QuantumKeyManagement';

function App() {
  const navItems = [
    { label: 'Home', path: '/', icon: Atom },
    { label: 'About Us', path: '/about', icon: Users },
    { label: 'Certification', path: '/certification', icon: Shield },
    { label: 'Audit Standards', path: '/standards', icon: FileCheck },
    { label: 'Resources', path: '/resources', icon: BookOpen },
    { label: 'FAQ', path: '/faq', icon: HelpCircle },
    { label: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar items={navItems} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/certification" element={<Certification />} />
            <Route path="/standards" element={<Standards />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/apply" element={<Apply />} />
            
            {/* Blog routes */}
            <Route path="/blog/lattice-based-cryptography" element={<LatticeBasedCryptography />} />
            <Route path="/blog/kyber-vs-saber" element={<KyberVsSaber />} />
            <Route path="/blog/quantum-key-management" element={<QuantumKeyManagement />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;