
import React, { useState } from 'react';
import { Page } from '../types.ts';
import PageHeader from '../components/common/PageHeader.tsx';
import { HeartIcon } from '../components/icons.tsx';

interface DonationPageProps {
  onNavigate: (page: Page) => void;
}

const DonationPage: React.FC<DonationPageProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
      amount: 50,
      customAmount: '',
      frequency: 'One-time',
      fund: 'Tithes & Offerings',
      name: '',
      email: '',
  });
  const [formStatus, setFormStatus] = useState<'idle'|'submitting'|'success'>('idle');

  const handleAmountClick = (amount: number) => {
      setFormData(prev => ({...prev, amount, customAmount: ''}));
  }
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/[^0-9]/g, '');
      setFormData(prev => ({...prev, customAmount: value, amount: Number(value)}));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    console.log("Donation submitted:", formData);
    // Simulate API call
    setTimeout(() => {
        setFormStatus('success');
    }, 1500);
  }

  const amountOptions = [25, 50, 100, 250, 500, 1000];
  const finalAmount = formData.customAmount ? Number(formData.customAmount) : formData.amount;
  
  if (formStatus === 'success') {
      return (
          <>
            <PageHeader
                title="Thank You!"
                subtitle="Your generosity is a blessing"
                imageUrl="https://picsum.photos/seed/thankyou/1920/1080"
            />
            <section className="py-20 bg-church-gray">
                <div className="container mx-auto px-6 max-w-2xl text-center">
                    <div className="bg-white p-10 rounded-xl shadow-xl">
                        <div className="mx-auto bg-green-100 text-green-700 p-4 rounded-full mb-4 w-max">
                            <HeartIcon className="h-12 w-12" />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-church-dark mb-2">Thank You, {formData.name}!</h2>
                        <p className="text-slate-700 font-sans text-lg mb-6">
                            We have successfully received your <span className="font-bold">${finalAmount.toFixed(2)}</span> donation. A confirmation receipt has been sent to <span className="font-bold">{formData.email}</span>.
                        </p>
                        <p className="text-slate-600 font-sans">Your support helps us continue our mission and reach more people with the love of Christ. May God bless you abundantly for your cheerful giving!</p>
                        <button onClick={() => onNavigate('home')} className="mt-8 bg-church-blue text-white font-sans font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-church-blue-light transition-colors duration-300">
                           Back to Home
                        </button>
                    </div>
                </div>
            </section>
          </>
      )
  }

  return (
    <div className="bg-white">
      <PageHeader
        title="Donate"
        subtitle="Honor God with your generosity"
        imageUrl="https://picsum.photos/seed/give/1920/1080"
      />
      <section className="py-20 bg-church-gray">
        <div className="container mx-auto px-6 max-w-2xl">
            <div className="bg-white p-8 rounded-xl shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Amount */}
                    <div>
                        <h3 className="text-xl font-serif font-bold text-church-dark mb-4 text-center">1. Choose an Amount</h3>
                        <div className="grid grid-cols-3 gap-2 md:gap-4">
                            {amountOptions.map(opt => (
                                <button key={opt} type="button" onClick={() => handleAmountClick(opt)} className={`p-4 rounded-lg font-sans font-bold text-lg transition-colors border-2 ${finalAmount === opt && !formData.customAmount ? 'bg-church-blue text-white border-church-blue' : 'bg-gray-100 text-church-dark border-gray-100 hover:border-church-gold'}`}>
                                    ${opt}
                                </button>
                            ))}
                        </div>
                        <div className="relative mt-4">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold">$</span>
                            <input type="text" value={formData.customAmount} onChange={handleCustomAmountChange} placeholder="Or enter custom amount" className="w-full font-sans font-bold text-lg p-4 pl-8 rounded-lg border-2 bg-gray-100 border-gray-100 focus:outline-none focus:border-church-gold focus:ring-church-gold"/>
                        </div>
                    </div>
                    
                    <hr/>

                    {/* Frequency & Fund */}
                    <div>
                        <h3 className="text-xl font-serif font-bold text-church-dark mb-4 text-center">2. Donation Details</h3>
                         <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-sans font-medium text-slate-700 mb-1">Frequency</label>
                                <select name="frequency" value={formData.frequency} onChange={handleChange} className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold bg-white">
                                    <option>One-time</option>
                                    <option>Weekly</option>
                                    <option>Monthly</option>
                                </select>
                            </div>
                             <div>
                                <label className="block text-sm font-sans font-medium text-slate-700 mb-1">Fund</label>
                                <select name="fund" value={formData.fund} onChange={handleChange} className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold bg-white">
                                    <option>Tithes & Offerings</option>
                                    <option>Missions</option>
                                    <option>Building Fund</option>
                                    <option>Community Outreach</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <hr/>

                     {/* Personal Info */}
                    <div>
                        <h3 className="text-xl font-serif font-bold text-church-dark mb-4 text-center">3. Your Information</h3>
                         <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-sans font-medium text-slate-700 mb-1">Full Name</label>
                                <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold" required/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-sans font-medium text-slate-700 mb-1">Email Address</label>
                                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="w-full font-sans px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-church-gold" required/>
                            </div>
                        </div>
                    </div>

                    <hr />

                    {/* Submit */}
                    <div className="text-center pt-2">
                         <p className="font-sans text-slate-600">You are making a <span className="font-bold">{formData.frequency.toLowerCase()}</span> donation of</p>
                         <p className="text-5xl font-serif font-bold text-church-blue my-2">${finalAmount.toFixed(2)}</p>
                         <button type="submit" disabled={formStatus === 'submitting'} className="mt-4 w-full bg-accent-success text-white font-sans font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 disabled:bg-green-400">
                             {formStatus === 'submitting' ? 'Processing...' : 'Complete Donation'}
                         </button>
                    </div>
                </form>
            </div>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;
