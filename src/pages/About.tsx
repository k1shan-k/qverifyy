import React from 'react';
import { Shield, Book, Users, Globe, Github, MessageCircle, Video, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We publish every audit result, good or bad—full transparency is non-negotiable.',
    },
    {
      icon: Book,
      title: 'Expertise',
      description: 'Our team combines hands-on blockchain builders, post-quantum cryptographers, and external advisors.',
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'We demystify post-quantum jargon: our reports are detailed but understandable by non-cryptographers.',
    },
    {
      icon: Globe,
      title: 'Collaboration',
      description: 'We work with projects, researchers, and standard bodies to continually refine quantum-safe benchmarks.',
    },
  ];

  const contributorRoles = [
    {
      icon: Shield,
      title: 'Cryptographers',
      description: 'Help write review guidelines for SPHINCS+ implementations and other post-quantum schemes.',
    },
    {
      icon: Book,
      title: 'Blockchain Developers',
      description: 'Build fuzz testing harnesses for post-quantum signature schemes and contribute to our tooling.',
    },
    {
      icon: Users,
      title: 'Technical Writers',
      description: 'Transform dense whitepapers into digestible guides for the broader blockchain community.',
    },
    {
      icon: Globe,
      title: 'Community Leaders',
      description: 'Organize workshops, moderate discussions, and help grow our global presence.',
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Qverify exists to bring transparency and rigor to "quantum-proof" claims. 
              By auditing blockchain architectures, publishing standardized scores, and 
              educating the community, we ensure that true post-quantum security rises 
              above mere marketing.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Origin Story</h2>
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <p className="text-gray-600 mb-4">
                In 2025, blockchain projects began branding themselves as "quantum-resistant" 
                without offering verifiable proof. Recognizing the growing gap between hype 
                and substance, our founding team (including former cryptography researchers) launched Qverify 
                as a nonprofit to act as an independent certifier.
              </p>
              <p className="text-gray-600">
                Today, we partner with academic experts and industry veterans to keep our 
                standards up-to-date with the latest cryptographic research.
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center mb-4"
                  >
                    <value.icon className="h-12 w-12 text-indigo-600" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-12 text-white relative overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"
            />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8 text-center">Call for Contributors & Volunteers</h2>
              <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
                Qverify may be starting small, but we have big ambitions—and we need your expertise to achieve them.
                Join our network of contributors and help establish the gold standard for post-quantum blockchain security.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {contributorRoles.map((role, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                      className="flex justify-center mb-4"
                    >
                      <role.icon className="h-12 w-12" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                    <p className="text-indigo-100">{role.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-6">How to Get Involved</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <motion.a
                    href="https://forms.google.com/qverify-contributor"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm hover:bg-opacity-20 transition-all"
                  >
                    <Heart className="h-8 w-8 mb-3" />
                    <span className="font-semibold">Fill Out Contributor Form</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://t.me/qverifyorg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm hover:bg-opacity-20 transition-all"
                  >
                    <MessageCircle className="h-8 w-8 mb-3" />
                    <span className="font-semibold">Join Our Telegram</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://github.com/qverify"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm hover:bg-opacity-20 transition-all"
                  >
                    <Github className="h-8 w-8 mb-3" />
                    <span className="font-semibold">GitHub Discussions</span>
                  </motion.a>
                </div>

                <div className="mt-12">
                  <motion.a
                    href="https://meet.google.com/dbj-wozi-won"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                  >
                    <Video className="h-5 w-5 mr-2" />
                    Join Our Biweekly "Crypto Office Hours"
                  </motion.a>
                </div>
              </div>
            </div>

            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;