
import React, { useState } from 'react';
import { Page } from '../types.ts';
import PageHeader from '../components/common/PageHeader.tsx';
import { CrossIcon, HeartIcon, BibleIcon } from '../components/icons.tsx';

interface WhatIsChristianityPageProps {
  onNavigate: (page: Page) => void;
}

const WhatIsChristianityPage: React.FC<WhatIsChristianityPageProps> = ({ onNavigate }) => {
    
  const AccordionItem: React.FC<{ title: string, children: React.ReactNode, isOpen: boolean, onClick: () => void }> = ({ title, children, isOpen, onClick }) => (
    <div className="border-b border-gray-200">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left py-4 px-6 focus:outline-none">
            <span className="text-lg font-serif font-semibold text-church-dark">{title}</span>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <svg className="w-6 h-6 text-church-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <div className="p-6 pt-0 text-slate-700 font-sans leading-relaxed">{children}</div>
        </div>
    </div>
  );

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    
  return (
    <div className="bg-white">
      <PageHeader
        title="The Good News"
        subtitle="Understanding the core of the Christian faith"
        imageUrl="https://picsum.photos/seed/goodnews/1920/1080"
      />
      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center">
                <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">What is the Gospel?</h2>
                <p className="text-lg text-slate-700 font-sans leading-relaxed">
                    The word "Gospel" means "good news." It's the message about who Jesus is and what He has done. It can be summarized in a few simple points.
                </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center mt-12">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <HeartIcon className="h-12 w-12 mx-auto text-church-gold mb-3" />
                    <h3 className="text-xl font-serif font-bold text-church-dark">God Loves You</h3>
                    <p className="text-slate-600 font-sans text-sm">God created you and has a perfect plan for your life. His love for you is unconditional. (John 3:16)</p>
                </div>
                 <div className="bg-white p-6 rounded-xl shadow-lg">
                    <CrossIcon className="h-12 w-12 mx-auto text-church-gold mb-3" />
                    <h3 className="text-xl font-serif font-bold text-church-dark">The Problem of Sin</h3>
                    <p className="text-slate-600 font-sans text-sm">We have all sinned and fallen short of God's perfect standard. This sin separates us from Him. (Romans 3:23)</p>
                </div>
                 <div className="bg-white p-6 rounded-xl shadow-lg">
                    <BibleIcon className="h-12 w-12 mx-auto text-church-gold mb-3" />
                    <h3 className="text-xl font-serif font-bold text-church-dark">God's Solution</h3>
                    <p className="text-slate-600 font-sans text-sm">Jesus Christ, God's Son, died on the cross to pay the penalty for our sins and rose again, defeating death. (Romans 5:8)</p>
                </div>
            </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Your Next Step</h2>
                <p className="text-lg text-slate-700 font-sans leading-relaxed">
                    Salvation is a free gift you receive by faith. It's a personal decision to turn from sin and trust in Jesus alone.
                </p>
            </div>
            <div className="bg-church-light-gold p-8 rounded-xl shadow-xl text-center">
                <h3 className="text-2xl font-serif font-bold text-church-blue mb-4">How to Begin a Relationship with God</h3>
                <p className="font-sans text-lg text-slate-800">You can express your faith through a simple prayer:</p>
                <blockquote className="my-6 p-4 border-l-4 border-church-gold text-left text-slate-700 italic">
                    "Dear Lord Jesus, I know I am a sinner. I believe you died for my sins. Right now, I turn from my sins and open the door of my heart and life. I confess you as my personal Lord and Savior. Thank you for saving me. Amen."
                </blockquote>
                <p className="font-sans text-lg text-slate-800">If you prayed this prayer, welcome to the family of God! This is just the beginning of a wonderful journey.</p>
            </div>
        </div>
      </section>

      <section className="py-20 bg-church-blue text-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-serif font-bold mb-4">We're Here to Help You Grow</h2>
            <p className="text-lg text-gray-200 mb-8 font-sans max-w-2xl mx-auto leading-relaxed">
                Your new journey of faith is best lived in community. We invite you to grow with us.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button onClick={() => onNavigate('contact')} className="w-full md:w-auto bg-church-gold text-church-blue font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105">
                I Made a Decision Today
            </button>
            <button onClick={() => onNavigate('services')} className="w-full md:w-auto bg-transparent border-2 border-white text-white font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-white hover:text-church-blue transition-all duration-300 transform hover:scale-105">
                Join a Service
            </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default WhatIsChristianityPage;
