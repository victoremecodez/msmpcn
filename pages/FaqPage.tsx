
import React, { useState } from 'react';
import { Page } from '../types.ts';
import PageHeader from '../components/common/PageHeader.tsx';
import { FaqItem as FaqItemType } from '../types.ts';
import { faqData } from '../data/faq.ts';

interface FaqPageProps {
  onNavigate: (page: Page) => void;
}

const FaqItem: React.FC<{ item: FaqItemType, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => (
    <div className="border-b border-gray-200">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none group">
            <span className="text-lg font-serif font-semibold text-church-dark group-hover:text-church-blue transition-colors">{item.question}</span>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <svg className="w-6 h-6 text-church-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <p className="p-6 pt-0 text-slate-700 font-sans leading-relaxed">{item.answer}</p>
        </div>
    </div>
);

const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      <PageHeader
        title="FAQ"
        subtitle="Frequently Asked Questions"
        imageUrl="https://picsum.photos/seed/faq/1920/1080"
      />
      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Have Questions? We Have Answers.</h2>
                <p className="text-lg text-slate-700 font-sans">
                    Here are some of the most common questions we receive. If you don't find your answer here, please don't hesitate to <a onClick={() => onNavigate('contact')} className="text-church-blue underline cursor-pointer">contact us</a>.
                </p>
            </div>
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                {faqData.map((item, index) => (
                    <FaqItem 
                        key={index} 
                        item={item} 
                        isOpen={openIndex === index} 
                        onClick={() => handleClick(index)} 
                    />
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default FaqPage;
