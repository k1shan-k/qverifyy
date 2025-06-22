import React from 'react';
import { Shield, Lock, RefreshCw, FileText } from 'lucide-react';

const Standards = () => {
  const primitives = [
    {
      category: 'Key Encapsulation Mechanisms (KEMs)',
      examples: ['Kyber', 'Saber'],
      description: 'NIST Round-3 finalists for quantum-resistant key exchange.',
    },
    {
      category: 'Digital Signatures',
      examples: ['Dilithium', 'Falcon', 'SPHINCS+'],
      description: 'Post-quantum signature schemes for transaction validation.',
    },
    {
      category: 'Hash Functions',
      examples: ['SHA-3', 'BLAKE2', 'SHAKE256'],
      description: 'Quantum-resistant cryptographic hash functions.',
    },
  ];

  const criteria = [
    {
      icon: Shield,
      title: 'Implementation Security',
      points: [
        'Memory-safe programming languages',
        'Side-channel attack mitigations',
        'Proper key storage and management',
      ],
    },
    {
      icon: Lock,
      title: 'Protocol Design',
      points: [
        'Forward secrecy guarantees',
        'Replay attack prevention',
        'Quantum-safe key derivation',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Upgrade Flexibility',
      points: [
        'Modular cryptographic components',
        'Clear upgrade paths',
        'Backward compatibility plans',
      ],
    },
    {
      icon: FileText,
      title: 'Documentation',
      points: [
        'Detailed technical specifications',
        'Security model documentation',
        'Implementation guidelines',
      ],
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Audit Methodology & Standards</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We base all our work on publicly documented, peer-reviewed post-quantum standards. 
            Our approach is multi-layered and continuously updated with the latest research.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Accepted Primitives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {primitives.map((primitive, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{primitive.category}</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Examples:</h4>
                  <ul className="list-disc list-inside text-indigo-600">
                    {primitive.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-600">{primitive.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Evaluation Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {criteria.map((criterion, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-center mb-4">
                  <criterion.icon className="h-12 w-12 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {criterion.title}
                </h3>
                <ul className="space-y-2">
                  {criterion.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-indigo-600 mr-2" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-indigo-50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Continuous Improvement
            </h2>
            <p className="text-gray-600 mb-6">
              Our standards are regularly updated to reflect:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-indigo-600 mr-2" />
                <span className="text-gray-600">
                  Latest NIST and ISO post-quantum cryptography guidelines
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-indigo-600 mr-2" />
                <span className="text-gray-600">
                  New cryptanalysis results and attack vectors
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-indigo-600 mr-2" />
                <span className="text-gray-600">
                  Feedback from our academic and industry partners
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-indigo-600 mr-2" />
                <span className="text-gray-600">
                  Real-world implementation experiences and challenges
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standards;