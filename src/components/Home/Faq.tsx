import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQAccordion: React.FC<FAQItem & { isOpen: boolean; toggle: () => void }> = ({
  question,
  answer,
  isOpen,
  toggle
}) => {
  return (
    <div className="border-b border-app-white-700 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={toggle}
      >
        <h3 className="text-lg font-medium text-app-white-800">{question}</h3>
        {isOpen ?
          <ChevronUp className="h-5 w-5 text-green-image" /> :
          <ChevronDown className="h-5 w-5 text-app-white-800" />
        }
      </button>
      <div className={`mt-2 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-green-image leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "What documents do I need for income tax filing?",
      answer: "For income tax filing, you'll need your PAN card, Aadhaar card, Form 16 (if employed), bank statements, investment proofs (like insurance, PPF, ELSS), house property details (if applicable), and any other income proofs. If you're a business owner or professional, you'll also need your books of accounts and expense receipts."
    },
    {
      question: "How long does trademark registration take in India?",
      answer: "The trademark registration process in India typically takes 18-24 months to complete if there are no objections. The initial filing and examination usually take about 6-8 months, followed by advertisement in the Trademark Journal. If no opposition is filed within 4 months of advertisement, registration is granted in another 6-8 months."
    },
    {
      question: "What are the benefits of GST registration?",
      answer: "GST registration provides several benefits including legal recognition as a supplier of goods/services, seamless input tax credit, ability to collect tax from customers, legal authority to pass on the tax credit to customers, and eligibility for various composition schemes. It also helps build credibility with customers and suppliers."
    },
    {
      question: "Do I need to file income tax returns if my income is below the taxable limit?",
      answer: "While it's not mandatory to file income tax returns if your income is below the taxable limit, it's advisable to do so. Filing returns creates an income record useful for loan applications, visa processing, and claiming refunds. It also prevents any potential notices from the tax department if you have TDS deductions."
    },
    {
      question: "What types of business structures can you help register in India?",
      answer: "We provide registration services for all major business structures in India including Sole Proprietorship, Partnership Firm, Limited Liability Partnership (LLP), One Person Company (OPC), Private Limited Company, Public Limited Company, and Section 8 Company (Non-profit). We'll help you choose the structure that best suits your business needs and objectives."
    },
    {
      question: "How often do I need to file GST returns?",
      answer: "GST return filing frequency depends on your registration type. Regular taxpayers need to file GSTR-1 (outward supplies) monthly or quarterly based on turnover, and GSTR-3B (summary return) monthly. Composition scheme taxpayers file quarterly returns (CMP-08) and an annual return (GSTR-4). Additionally, all taxpayers must file an annual return (GSTR-9/9A) by December 31 following the end of the financial year."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="pt-20 pb-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-2">
            Frequently Asked Questions
          </h2>
          <div className="w-[250px] h-1 bg-dark-green-500 mx-auto mb-4"></div>
          <div className="w-20 h-1 bg-gold-500 mx-auto my-4"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Find answers to common questions about our services and processes.
          </p>
        </div>

        <div className="bg-black-secondary rounded-lg shadow-lg p-8 md:p-8">
          {faqItems.map((item, index) => (
            <FAQAccordion
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-2">
            Don&apos;t see your question here?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;