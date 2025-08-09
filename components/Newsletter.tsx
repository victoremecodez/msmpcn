
import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setStatus('submitting');
    console.log(`Subscribing ${name} with email ${email}`);
    // Simulate API call
    setTimeout(() => {
        setStatus('success');
    }, 1000);
  };

  if (status === 'success') {
    return (
      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-100 text-green-700 p-4 rounded-full mb-4 w-max mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-3xl font-serif text-church-blue font-bold mb-2">You're Subscribed!</h2>
            <p className="text-slate-700 font-sans leading-relaxed">
                Thank you, {name}! You'll now receive our weekly updates.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-church-gray">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-church-blue font-bold mb-4">Stay Connected</h2>
          <p className="text-slate-700 font-sans mb-8 leading-relaxed">
            Subscribe to our newsletter for weekly updates, event notifications, and words of encouragement.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-grow font-sans px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow font-sans px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold"
              required
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-church-blue text-white font-sans font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-800 transition-colors duration-300 disabled:bg-blue-400"
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;