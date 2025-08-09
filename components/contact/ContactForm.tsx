
import React, { useState } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    // Simulate API call to Firebase
    setTimeout(() => {
      // Simulate a successful submission
      console.log('Form submitted:', formData);
      setStatus('success');
      // In a real scenario, you might want to reset the form
      // setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-xl shadow-xl h-full flex flex-col justify-center items-center text-center">
        <div className="bg-green-100 text-green-700 p-4 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-2xl font-serif text-church-blue font-bold mb-2">Message Sent!</h3>
        <p className="text-slate-700 font-sans leading-relaxed">Thank you for reaching out. We have received your message and will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-xl h-full">
      <h3 className="text-3xl font-serif text-church-blue font-bold mb-6">Send Us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-sans font-medium text-slate-700 mb-1">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
            aria-label="Full Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-sans font-medium text-slate-700 mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
            aria-label="Email Address"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-sans font-medium text-slate-700 mb-1">Phone Number <span className="text-slate-500">(Optional)</span></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
            aria-label="Phone Number"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-sans font-medium text-slate-700 mb-1">Subject</label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold bg-white"
            aria-label="Subject"
          >
            <option>General Inquiry</option>
            <option>Prayer Request</option>
            <option>Event Info</option>
            <option>Ministry</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-sans font-medium text-slate-700 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
            aria-label="Message"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full flex justify-center items-center bg-church-blue text-white font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105 disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
         {status === 'error' && (
            <p className="text-center text-red-600 font-sans mt-4">
                Something went wrong. Please try again later.
            </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
