import React from 'react';
import { BookOpen, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

const Resources = () => {
  const articles = [
    {
      title: "Why Lattice-Based Cryptography Will Rule Post-Quantum Security",
      excerpt: "With NIST's final selections around the corner, let's explore why lattices are so promising—and what implementation pitfalls to avoid.",
      date: "May 22, 2025",
      tags: ["PQC", "Lattice", "NIST"],
      link: "/blog/lattice-based-cryptography"
    },
    {
      title: "Comparing Kyber vs. Saber: Which KEM Should You Choose?",
      excerpt: "This side-by-side breakdown shows performance benchmarks, security margins, and real-world tradeoffs.",
      date: "Apr 10, 2025",
      tags: ["Kyber", "Saber", "Comparison"],
      link: "/blog/kyber-vs-saber"
    },
    {
      title: "How to Harden Your Key-Management for Post-Quantum Wallets",
      excerpt: "From hardware wallets to multisig, here are 5 proven strategies to keep your private keys safe from quantum-era adversaries.",
      date: "Mar 28, 2025",
      tags: ["Wallets", "Security", "Key-Management"],
      link: "/blog/quantum-key-management"
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Resources & Blog</h1>
            <p className="text-xl text-gray-600">
              Stay up to date with the latest in post-quantum crypto, audit best practices, and blockchain security trends.
              Our blog features deep dives, tutorials, and guest posts from industry experts.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.a
                href={article.link}
                className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{article.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4 hover:text-indigo-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6}>
          <div className="mt-16 bg-indigo-50 rounded-lg p-8 text-center">
            <div className="flex justify-center mb-6">
              <BookOpen className="h-12 w-12 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Never Miss a Post</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for monthly insights on post-quantum cryptography and blockchain security.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                <motion.button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Resources;