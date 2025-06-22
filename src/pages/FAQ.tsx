import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'Why should my project get Qverified?',
      answer: "In an era where 'quantum-proof' can be a marketing gimmick, our third-party audit and public certification add credibility for users, developers, and investors. You'll stand out as a pioneer truly prepared for future adversaries."
    },
    {
      question: 'How long does the certification take, and what does it cost?',
      answer: "Timeline: 4-6 weeks on average, depending on project size and complexity. As a nonprofit, we charge a cost-recovery fee. Typical audits range from $10k-$30k (USD), sliding scale based on project stage and funding. Exact quotes follow pre-qualification."
    },
    {
      question: 'Is this only for large blockchains, or can smaller projects apply?',
      answer: "We welcome projects of all sizes—public chains, layer-2s, DeFi protocols, wallets, even small 'proof-of-concept' networks. We tailor our audit scope so you get meaningful feedback without overspending."
    },
    {
      question: 'What happens if my project fails the audit?',
      answer: "You'll receive a detailed remediation report, including prioritized fixes. If you implement improvements within 90 days and resubmit, we'll re-audit at a discounted rate. All reports (including 'Not Certified') are published, so you can demonstrate your commitment to improvement."
    },
    {
      question: 'Do you accept self-assessment or only full audits?',
      answer: "We do offer a Self-Assessment Kit (free PDF), which walks you through a checklist. This helps you prepare before committing to a full audit. Only completed, verified audits earn the 'Qverify-Certified' seal."
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;