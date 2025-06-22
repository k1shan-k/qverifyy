import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Key, Shield, Smartphone, Server, Lock } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const QuantumKeyManagement = () => {
  const strategies = [
    {
      icon: Key,
      title: 'Hardware Security Modules (HSMs)',
      description: 'Use quantum-resistant HSMs for critical key storage and operations',
      implementation: 'Deploy FIPS 140-2 Level 3+ HSMs with post-quantum algorithm support'
    },
    {
      icon: Smartphone,
      title: 'Secure Enclaves',
      description: 'Leverage trusted execution environments for mobile wallet security',
      implementation: 'Implement ARM TrustZone or Intel SGX with quantum-safe key derivation'
    },
    {
      icon: Server,
      title: 'Distributed Key Management',
      description: 'Split keys across multiple secure locations using threshold schemes',
      implementation: 'Use Shamir\'s Secret Sharing with post-quantum signature verification'
    },
    {
      icon: Shield,
      title: 'Multi-Signature Schemes',
      description: 'Require multiple quantum-safe signatures for critical operations',
      implementation: 'Combine Dilithium signatures with threshold cryptography'
    },
    {
      icon: Lock,
      title: 'Key Rotation Protocols',
      description: 'Implement automated key rotation with quantum-safe algorithms',
      implementation: 'Schedule regular key updates using post-quantum key exchange'
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
                  <span>March 28, 2025</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>Maria Santos, Security Architect</span>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                How to Harden Your Key-Management for Post-Quantum Wallets
              </h1>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Wallets', 'Security', 'Key-Management'].map((tag, index) => (
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
                  From hardware wallets to multisig, here are 5 proven strategies to keep your private keys safe from quantum-era adversaries.
                </p>

                <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Shield className="h-5 w-5 text-red-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-red-800">The Quantum Threat to Wallets</h3>
                      <p className="mt-2 text-red-700">
                        Current wallet security relies heavily on elliptic curve cryptography (ECC) and RSA, both of which are vulnerable to quantum attacks. A sufficiently powerful quantum computer could break these systems in hours or minutes, exposing private keys and compromising funds.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Current Landscape</h2>
                <p className="text-gray-700 mb-6">
                  Most cryptocurrency wallets today use ECDSA (Elliptic Curve Digital Signature Algorithm) for transaction signing and ECDH (Elliptic Curve Diffie-Hellman) for key exchange. While these algorithms provide excellent security against classical attacks, they are fundamentally vulnerable to Shor's algorithm running on a quantum computer.
                </p>

                <p className="text-gray-700 mb-6">
                  The transition to post-quantum cryptography isn't just about swapping algorithms—it requires a comprehensive rethinking of key management practices, storage mechanisms, and operational procedures.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5 Proven Hardening Strategies</h2>

                <div className="space-y-8 mb-8">
                  {strategies.map((strategy, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                            <strategy.icon className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-4 flex-1">
                          <h3 className="text-lg font-medium text-gray-900 mb-2">
                            {index + 1}. {strategy.title}
                          </h3>
                          <p className="text-gray-600 mb-3">{strategy.description}</p>
                          <div className="bg-white rounded p-3 border-l-4 border-indigo-400">
                            <p className="text-sm text-gray-700">
                              <strong>Implementation:</strong> {strategy.implementation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hardware Wallet Considerations</h2>
                <p className="text-gray-700 mb-6">
                  Hardware wallets face unique challenges in the post-quantum era due to their resource constraints and update limitations:
                </p>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Key Challenges:</h4>
                  <ul className="text-blue-800 space-y-2">
                    <li><strong>Memory Constraints:</strong> Post-quantum keys are significantly larger than ECC keys</li>
                    <li><strong>Processing Power:</strong> Some PQ algorithms require more computational resources</li>
                    <li><strong>Firmware Updates:</strong> Deploying new algorithms requires secure update mechanisms</li>
                    <li><strong>User Experience:</strong> Larger signatures may impact transaction confirmation times</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Recommended Approach for Hardware Wallets</h3>
                <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                  <li><strong>Hybrid Mode:</strong> Support both classical and post-quantum algorithms during transition</li>
                  <li><strong>Modular Design:</strong> Implement cryptographic algorithms as replaceable modules</li>
                  <li><strong>Secure Boot:</strong> Ensure firmware integrity with post-quantum signature verification</li>
                  <li><strong>Key Derivation:</strong> Use quantum-safe key derivation functions (e.g., SHAKE256)</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Multi-Signature Implementation</h2>
                <p className="text-gray-700 mb-6">
                  Post-quantum multi-signature schemes require careful consideration of signature aggregation and verification efficiency:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Dilithium Multi-Sig</h4>
                    <ul className="text-green-800 text-sm space-y-1">
                      <li>• NIST-standardized</li>
                      <li>• Fast verification</li>
                      <li>• Moderate signature size</li>
                      <li>• Good for most use cases</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">SPHINCS+ Multi-Sig</h4>
                    <ul className="text-purple-800 text-sm space-y-1">
                      <li>• Hash-based security</li>
                      <li>• Conservative choice</li>
                      <li>• Larger signatures</li>
                      <li>• Slower operations</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Rotation Best Practices</h2>
                <p className="text-gray-700 mb-6">
                  Regular key rotation becomes even more critical in the post-quantum era. Here's a comprehensive rotation strategy:
                </p>

                <div className="bg-yellow-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-yellow-900 mb-3">Rotation Schedule:</h4>
                  <ul className="text-yellow-800 space-y-2">
                    <li><strong>Hot Keys:</strong> Rotate every 30 days or after 10,000 transactions</li>
                    <li><strong>Warm Keys:</strong> Rotate every 90 days or quarterly</li>
                    <li><strong>Cold Keys:</strong> Rotate annually or when security incidents occur</li>
                    <li><strong>Master Keys:</strong> Rotate every 2-3 years with ceremony procedures</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Implementation Checklist</h2>
                <p className="text-gray-700 mb-6">
                  Use this checklist to ensure your post-quantum key management implementation is secure:
                </p>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Security Measures</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>☐ Quantum-safe random number generation</li>
                        <li>☐ Secure key storage (HSM/Enclave)</li>
                        <li>☐ Side-channel attack protection</li>
                        <li>☐ Secure key derivation functions</li>
                        <li>☐ Multi-factor authentication</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Operational Procedures</h4>
                      <ul className="text-gray-700 text-sm space-y-1">
                        <li>☐ Regular key rotation schedule</li>
                        <li>☐ Secure backup and recovery</li>
                        <li>☐ Incident response procedures</li>
                        <li>☐ Algorithm agility planning</li>
                        <li>☐ Compliance documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Looking Forward</h2>
                <p className="text-gray-700 mb-6">
                  The transition to post-quantum key management is not just a technical challenge—it's an opportunity to build more robust, secure, and future-proof wallet infrastructure. By implementing these strategies now, you can ensure your users' assets remain secure even as quantum computing advances.
                </p>

                <p className="text-gray-700 mb-6">
                  Remember that security is a process, not a destination. Regular security audits, penetration testing, and staying current with the latest post-quantum cryptography research are essential for maintaining strong security posture.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Ready to Secure Your Wallet?</h3>
                  <p className="text-gray-600 mb-4">
                    Get your wallet architecture reviewed by our post-quantum security experts.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/apply"
                      className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-center"
                    >
                      Apply for Security Audit
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-block px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-center"
                    >
                      Schedule Consultation
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default QuantumKeyManagement;