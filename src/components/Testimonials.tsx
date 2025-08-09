
import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types.ts';

const testimonialsData: Testimonial[] = [
  { quote: 'I was truly blessed by the Word shared last Sunday. This church feels like home.', author: 'Jane A.' },
  { quote: 'The youth ministry has been a wonderful place for my children to grow in faith.', author: 'David E.' },
  { quote: '"For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."', author: 'Jeremiah 29:11' },
  { quote: 'The sense of community here is incredible. Everyone is so welcoming and kind.', author: 'Mary I.' },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section className="py-20 bg-church-light-gold">
      <div className="container mx-auto px-6 text-center">
        <div className="relative h-48 flex items-center justify-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute w-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <blockquote className="max-w-3xl mx-auto">
                <p className="text-2xl md:text-3xl font-serif text-church-blue italic">
                  “{testimonial.quote}”
                </p>
                <footer className="mt-4 text-lg font-sans text-church-blue font-semibold tracking-wide">
                  — {testimonial.author}
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;