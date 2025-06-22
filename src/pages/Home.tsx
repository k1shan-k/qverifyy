import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Search, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Trust Beyond Hype: Quantum-Proof Certifications for Blockchain Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-indigo-100"
            >
              Qverify audits, certifies, and publishes real-world results so you can know which platforms truly stand up to the quantum era.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                to="/certification"
                className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105"
              >
                Apply for Certification
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated background elements */}
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
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <AnimatedSection delay={0.2}>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="flex justify-center mb-6"
                >
                  <Atom className="h-12 w-12 text-indigo-600" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4">The Coming Threat</h3>
                <p className="text-gray-600">
                  Quantum computing is evolving faster than industry standards. Within the next decade, adversaries may break legacy cryptography in minutes.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="flex justify-center mb-6"
                >
                  <Search className="h-12 w-12 text-indigo-600" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4">Separating Fact from Fiction</h3>
                <p className="text-gray-600">
                  Marketing buzz can be loud—"quantum-proof" claims abound. Only rigorous, transparent audits uncover true post-quantum resistance.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="flex justify-center mb-6"
                >
                  <Globe className="h-12 w-12 text-indigo-600" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-4">Public Accountability</h3>
                <p className="text-gray-600">
                  We publish every result so that developers, investors, and end-users can see who actually meets the bar—and who doesn't.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-50 py-24 relative overflow-hidden">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl font-bold mb-8">Join the Movement</h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're building a new chain or securing an existing one, don't wait until quantum attacks are live. Apply for certification today.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/apply"
                className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Apply Now
              </Link>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Animated background patterns */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-72 h-72 bg-indigo-200 opacity-20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 opacity-20 rounded-full blur-3xl"
        />
      </section>
    </div>
  );
};

export default Home;