import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Qverify</h3>
            <p className="text-gray-600">
              Trust Beyond Hype: Quantum-Proof Certifications for Blockchain Projects
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-indigo-600">About</Link></li>
              <li><Link to="/certification" className="text-gray-600 hover:text-indigo-600">Certification</Link></li>
              <li><Link to="/reports" className="text-gray-600 hover:text-indigo-600">Reports</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">Delaware, USA</li>
              <li className="text-gray-600">USA, 12001</li>
              <li><a href="mailto:contact@qverify.org" className="text-gray-600 hover:text-indigo-600">contact@qverify.org</a></li>
              <li><a href="tel:+918012345678" className="text-gray-600 hover:text-indigo-600">+91-80-1234-5678</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com/QverifyHQ" className="text-gray-400 hover:text-indigo-600">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/qverify" className="text-gray-400 hover:text-indigo-600">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/Qverify" className="text-gray-400 hover:text-indigo-600">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-gray-500">
            © 2025 Qverify Nonprofit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;