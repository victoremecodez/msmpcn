import React from 'react';

interface PageHeaderProps {
    title: string;
    subtitle: string;
    imageUrl: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <section className="relative h-[40vh] flex items-center justify-center text-white font-serif bg-church-blue">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: `url('${imageUrl}')` }}>
      </div>
      <div className="relative z-10 text-center p-4">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl font-sans font-light mt-2 tracking-wide">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;
