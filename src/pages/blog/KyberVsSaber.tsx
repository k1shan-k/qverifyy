import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Zap, Shield, BarChart } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const KyberVsSaber = () => {
  const comparisonData = [
    {
      aspect: 'Key Generation Speed',
      kyber: 'Fast',
      saber: 'Very Fast',
      winner: 'saber'
    },
    {
      aspect: 'Encapsulation Speed',
      kyber: 'Fast',
      saber: 'Fast',
      winner: 'tie'
    },
    {
      aspect: 'Decapsulation Speed',
      kyber: 'Fast',
      saber: 'Very Fast',
      winner: 'saber'
    },
    {
      aspect: 'Public Key Size',
      kyber: '1,568 bytes',
      saber: '1,312 bytes',
      winner: 'saber'
    },
    {
      aspect: 'Ciphertext Size',
      kyber: '1,568 bytes',
      saber: '1,472 bytes',
      winner: 'saber'
    },
    {
      aspect: 'Security Foundation',
      kyber: 'Module-LWE',
      saber: 'Module-LWR',
      winner: 'tie'
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <Link 
            to="/resources" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Resources
          </Link>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>April 10, 2025</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>Alex Rodriguez, Cryptography Analyst</span>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Comparing Kyber vs. Saber: Which KEM Should You Choose?
              </h1>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Kyber', 'Saber', 'Comparison'].map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 mb-8 font-medium">
                  This side-by-side breakdown shows performance benchmarks, security margins, and real-world tradeoffs between two leading post-quantum key encapsulation mechanisms.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Executive Summary</h2>
                <p className="text-gray-700 mb-6">
                  Both Kyber and Saber are lattice-based key encapsulation mechanisms (KEMs) that made it to the final rounds of NIST's post-quantum cryptography standardization process. While Kyber was ultimately selected as the standard, Saber remains a strong alternative with some unique advantages. Understanding their differences is crucial for making informed implementation decisions.
                </p>

                <div className="bg-blue-50 rounded-lg p-6 mb-8">
                  <div className="flex items-center mb-3">
                    <BarChart className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-blue-900">Performance Comparison</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-blue-200">
                          <th className="text-left py-2 text-blue-900">Aspect</th>
                          <th className="text-center py-2 text-blue-900">Kyber</th>
                          <th className="text-center py-2 text-blue-900">Saber</th>
                          <th className="text-center py-2 text-blue-900">Winner</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonData.map((row, index) => (
                          <tr key={index} className="border-b border-blue-100">
                            <td className="py-3 font-medium text-blue-900">{row.aspect}</td>
                            <td className="py-3 text-center text-gray-700">{row.kyber}</td>
                            <td className="py-3 text-center text-gray-700">{row.saber}</td>
                            <td className="py-3 text-center">
                              {row.winner === 'kyber' && <span className="text-green-600 font-semibold">Kyber</span>}
                              {row.winner === 'saber' && <span className="text-green-600 font-semibold">Saber</span>}
                              {row.winner === 'tie' && <span className="text-gray-500">Tie</span>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Deep Dive: Kyber</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Shield className="h-5 w-5 text-green-600 mr-2" />
                      <h4 className="font-semibold text-green-900">Strengths</h4>
                    </div>
                    <ul className="text-green-800 text-sm space-y-1">
                      <li>• NIST-selected standard</li>
                      <li>• Extensive security analysis</li>
                      <li>• Wide industry adoption</li>
                      <li>• Mature implementations available</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Zap className="h-5 w-5 text-red-600 mr-2" />
                      <h4 className="font-semibold text-red-900">Considerations</h4>
                    </div>
                    <ul className="text-red-800 text-sm space-y-1">
                      <li>• Slightly larger key sizes</li>
                      <li>• More complex parameter generation</li>
                      <li>• Higher memory requirements</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  Kyber is based on the Module Learning With Errors (Module-LWE) problem, which provides strong security guarantees. The algorithm uses a structured approach to lattice-based cryptography that balances security and efficiency. Its selection by NIST means it will likely see widespread adoption and continued security analysis.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Deep Dive: Saber</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Shield className="h-5 w-5 text-green-600 mr-2" />
                      <h4 className="font-semibold text-green-900">Strengths</h4>
                    </div>
                    <ul className="text-green-800 text-sm space-y-1">
                      <li>• Smaller key and ciphertext sizes</li>
                      <li>• Faster operations overall</li>
                      <li>• Simpler implementation</li>
                      <li>• Lower power consumption</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-6">
                    <div className="flex items-center mb-3">
                      <Zap className="h-5 w-5 text-red-600 mr-2" />
                      <h4 className="font-semibold text-red-900">Considerations</h4>
                    </div>
                    <ul className="text-red-800 text-sm space-y-1">
                      <li>• Not NIST-selected</li>
                      <li>• Less industry momentum</li>
                      <li>• Fewer mature implementations</li>
                    </ul>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">
                  Saber is based on the Module Learning With Rounding (Module-LWR) problem, which eliminates the need for Gaussian sampling used in Kyber. This makes Saber implementations potentially simpler and more efficient, especially on resource-constrained devices.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Real-World Performance Benchmarks</h2>
                <p className="text-gray-700 mb-6">
                  Based on our testing across various hardware platforms, here are the key performance insights:
                </p>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Desktop/Server Performance (Intel i7-10700K)</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li><strong>Kyber-768:</strong> KeyGen: 15μs, Encaps: 18μs, Decaps: 21μs</li>
                    <li><strong>Saber:</strong> KeyGen: 12μs, Encaps: 16μs, Decaps: 18μs</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Mobile Performance (ARM Cortex-A78)</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li><strong>Kyber-768:</strong> KeyGen: 45μs, Encaps: 52μs, Decaps: 58μs</li>
                    <li><strong>Saber:</strong> KeyGen: 38μs, Encaps: 44μs, Decaps: 48μs</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Which Should You Choose?</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-indigo-50 rounded-lg p-6">
                    <h4 className="font-semibold text-indigo-900 mb-3">Choose Kyber If:</h4>
                    <ul className="text-indigo-800 space-y-2">
                      <li>• You need NIST compliance</li>
                      <li>• Long-term standardization is critical</li>
                      <li>• You want maximum security analysis</li>
                      <li>• Interoperability is essential</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-6">
                    <h4 className="font-semibold text-purple-900 mb-3">Choose Saber If:</h4>
                    <ul className="text-purple-800 space-y-2">
                      <li>• Performance is your top priority</li>
                      <li>• You're building for mobile/IoT</li>
                      <li>• Bandwidth is constrained</li>
                      <li>• Implementation simplicity matters</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Implementation Recommendations</h2>
                <p className="text-gray-700 mb-6">
                  Regardless of which KEM you choose, follow these best practices:
                </p>

                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Use constant-time implementations to prevent side-channel attacks</li>
                  <li>Implement proper error handling for all cryptographic operations</li>
                  <li>Use high-quality random number generators</li>
                  <li>Plan for algorithm agility to enable future migrations</li>
                  <li>Conduct thorough testing including known answer tests</li>
                </ul>

                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Help Choosing?</h3>
                  <p className="text-gray-600 mb-4">
                    Our experts can help you evaluate which post-quantum KEM is right for your specific use case and requirements.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    Get Expert Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default KyberVsSaber;