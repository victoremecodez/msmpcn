
import React from 'react';

const AdminHeader: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 bg-church-dark text-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-serif font-bold">Admin Panel</h1>
        <p className="font-sans text-lg text-gray-300 mt-1">Welcome to the website management area.</p>
      </div>
    </section>
  );
};

export default AdminHeader;
