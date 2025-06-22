import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardCheck, Shield, FileSearch, Award } from 'lucide-react';

const Certification = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: 'Pre-Qualification',
      description: 'Submit basic info about your project, team background, and development roadmap. We\'ll review within 5 business days.',
    },
    {
      icon: FileSearch,
      title: 'Technical Questionnaire',
      description: 'Complete our detailed questionnaire covering cryptographic primitives, key management, and implementation details.',
    },
    {
      icon: Shield,
      title: 'Comprehensive Audit',
      description: 'Our team analyzes your code, infrastructure, and security practices against post-quantum standards.',
    },
    {
      icon: Award,
      title: 'Certification Decision',
      description: 'Projects meeting our criteria receive the Qverify seal. All results are published for transparency.',
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Getting the Qverify Seal</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certification is designed to be rigorous, transparent, and cost-effective. 
            Below is our step-by-step process from initial inquiry to final certification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <step.icon className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quantum Trust Score™</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">30%</div>
              <h3 className="text-lg font-semibold mb-2">Primitive Maturity</h3>
              <p className="text-gray-600">Algorithm longevity and cryptanalysis survival</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">25%</div>
              <h3 className="text-lg font-semibold mb-2">Implementation Robustness</h3>
              <p className="text-gray-600">Code quality, testing, and security measures</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">25%</div>
              <h3 className="text-lg font-semibold mb-2">Key Management</h3>
              <p className="text-gray-600">Infrastructure security and access controls</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">20%</div>
              <h3 className="text-lg font-semibold mb-2">Documentation & Upgrades</h3>
              <p className="text-gray-600">Clear processes and future-proof design</p>
            </div>
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the growing list of blockchain projects that prioritize quantum-safe security.
            </p>
            <Link
              to="/apply"
              className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Apply for Certification
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;