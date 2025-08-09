
import React, { useState } from 'react';
import { FaithStatement } from '../../types.ts';

const faithData: FaithStatement[] = [
    { title: "The Authority of Scripture", content: "We believe the Bible is the inspired, inerrant, and authoritative Word of God, the final rule for faith and life." },
    { title: "The Trinity", content: "We believe in one God, eternally existing in three persons: the Father, the Son (Jesus Christ), and the Holy Spirit." },
    { title: "Salvation Through Christ", content: "We believe that salvation is a gift of God's grace, received by faith in Jesus Christ alone, whose death on the cross atoned for our sins." },
    { title: "The Holy Spirit", content: "We believe in the present ministry of the Holy Spirit, who indwells and empowers Christians to live a godly life." },
    { title: "The Church", content: "We believe in the spiritual unity of believers in our Lord Jesus Christ, who comprise the universal Church." },
    { title: "The Return of Christ", content: "We believe in the personal and imminent return of our Lord Jesus Christ to judge the living and the dead." }
];

const AccordionItem: React.FC<{ item: FaithStatement, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => (
    <div className="border-b border-gray-200">
        <button onClick={onClick} className="w-full flex justify-between items-center text-left py-4 px-6 focus:outline-none">
            <span className="text-lg font-serif font-semibold text-church-dark">{item.title}</span>
            <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                <svg className="w-6 h-6 text-church-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </span>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <p className="p-6 pt-0 text-slate-700 font-sans leading-relaxed">{item.content}</p>
        </div>
    </div>
);


const StatementOfFaith: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Our Statement of Faith</h2>
                    <div className="w-20 h-1 bg-church-gold mx-auto"></div>
                </div>
                <div className="max-w-3xl mx-auto rounded-xl shadow-xl overflow-hidden bg-white">
                    {faithData.map((item, index) => (
                        <AccordionItem 
                            key={index} 
                            item={item} 
                            isOpen={openIndex === index} 
                            onClick={() => handleClick(index)} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatementOfFaith;