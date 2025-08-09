

import React from 'react';
import ContactHeader from '../components/contact/ContactHeader.tsx';
import ContactInfo from '../components/contact/ContactInfo.tsx';
import ContactForm from '../components/contact/ContactForm.tsx';
import { Page } from '../types.ts';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      <ContactHeader />
      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2 mb-12 lg:mb-0">
              <ContactInfo />
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
