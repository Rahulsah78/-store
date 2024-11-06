import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { 
      question: 'What is the estimated delivery time for my order?', 
      answer: 'Delivery times vary based on location and shipping method. Typically, orders are delivered within 5-7 business days.' 
    },
    { 
      question: 'Can I return or exchange a product if I am not satisfied?', 
      answer: 'Yes, we offer a 30-day return and exchange policy. Please refer to our Returns & Exchanges page for details.' 
    },
    { 
      question: 'Are the products listed authentic?', 
      answer: 'All products in our store are 100% authentic, sourced directly from authorized dealers or manufacturers.' 
    },
    { 
      question: 'Do you offer international shipping?', 
      answer: 'Currently, we ship within the country only. Stay tuned for updates on our international shipping options.' 
    },
    { 
      question: 'How can I track my order?', 
      answer: 'Once your order is shipped, you will receive a tracking link via email to follow the status of your delivery.' 
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8 mt-10 mb-10 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-md bg-gray-100 shadow-md">
            <button 
              onClick={() => toggleAccordion(index)} 
              className="flex justify-between items-center w-full p-4 text-base md:text-lg font-semibold text-gray-700 transition-colors duration-300 hover:bg-gray-200 rounded-md focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="text-gray-500">{activeIndex === index ? <FiMinus className='text-red-500 text-2xl' /> : <FiPlus />}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 pb-4 text-sm md:text-base text-gray-600 bg-gray-50 rounded-b-md">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
