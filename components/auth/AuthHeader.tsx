
import React from 'react';

interface AuthHeaderProps {
    title: string;
    subtitle: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title, subtitle }) => {
  return (
    <section className="relative pt-24 pb-12 flex items-center justify-center text-white font-serif bg-church-blue">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/auth/1920/1080')" }}>
      </div>
      <div className="relative z-10 text-center p-4">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl font-sans font-light mt-2 tracking-wide max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default AuthHeader;
