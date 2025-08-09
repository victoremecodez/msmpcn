import React from 'react';
import { User, Page } from '../../../types.ts';
import { HeartIcon, DonationsIcon } from '../../icons.tsx';

interface DonationsViewProps {
    user: User;
    onUpdateUser: (updatedUserData: Partial<User>) => void;
    onNavigate: (page: Page) => void;
}

const DonationsView: React.FC<DonationsViewProps> = ({ user, onUpdateUser, onNavigate }) => {
    
    const totalGiven = user.donations.reduce((sum, d) => sum + d.amount, 0);
    const recurringDonations = user.donations.filter(d => d.type === 'Recurring');

    return (
        <div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-serif text-church-blue font-bold">My Donations</h2>
                        <p className="text-slate-600 font-sans mt-1">Thank you for your faithful giving.</p>
                    </div>
                    <button onClick={() => onNavigate('donation')} className="bg-church-gold text-church-blue font-sans font-semibold py-2 px-5 rounded-full hover:bg-yellow-300 transition-colors shadow-sm">
                        Donate Now
                    </button>
                </div>

                <div className="mt-6 grid md:grid-cols-3 gap-4 text-center">
                    <div className="bg-church-light-gold p-4 rounded-lg">
                        <p className="text-sm font-semibold text-church-blue uppercase">Total Given</p>
                        <p className="text-2xl font-serif font-bold text-church-dark">${totalGiven.toFixed(2)}</p>
                    </div>
                     <div className="bg-church-light-gold p-4 rounded-lg">
                        <p className="text-sm font-semibold text-church-blue uppercase">Last Donation</p>
                        <p className="text-2xl font-serif font-bold text-church-dark">{user.donations.length > 0 ? new Date(user.donations[0].date).toLocaleDateString() : 'N/A'}</p>
                    </div>
                     <div className="bg-church-light-gold p-4 rounded-lg">
                        <p className="text-sm font-semibold text-church-blue uppercase">Recurring Pledges</p>
                        <p className="text-2xl font-serif font-bold text-church-dark">{recurringDonations.length}</p>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <h3 className="text-xl font-serif font-bold text-church-dark mb-4">Giving History</h3>
                     {user.donations.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-slate-600 font-sans">
                                <thead className="text-xs text-slate-700 uppercase bg-gray-100">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">Date</th>
                                        <th scope="col" className="px-6 py-3">Amount</th>
                                        <th scope="col" className="px-6 py-3">Fund</th>
                                        <th scope="col" className="px-6 py-3">Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.donations.map(d => (
                                        <tr key={d.id} className="bg-white border-b">
                                            <td className="px-6 py-4">{new Date(d.date).toLocaleDateString()}</td>
                                            <td className="px-6 py-4 font-semibold text-church-dark">${d.amount.toFixed(2)}</td>
                                            <td className="px-6 py-4">{d.fund}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${d.type === 'Recurring' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                                                    {d.type}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                     ) : (
                        <div className="text-center py-10">
                            <DonationsIcon className="h-12 w-12 mx-auto text-gray-300" />
                            <p className="mt-2 text-slate-600 font-sans">No donation history found.</p>
                        </div>
                    )}
                </div>
                 <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <h3 className="text-xl font-serif font-bold text-church-dark mb-4">Recurring Donations</h3>
                    {recurringDonations.length > 0 ? (
                        <div className="space-y-3">
                            {recurringDonations.map(d => (
                                <div key={d.id} className="bg-gray-50 p-3 rounded-lg">
                                    <p className="font-semibold text-church-dark">${d.amount.toFixed(2)} to {d.fund}</p>
                                    <p className="text-xs text-slate-500">Next payment: August 1, 2024</p>
                                    <button className="text-xs text-red-600 hover:underline mt-1">Cancel</button>
                                </div>
                            ))}
                        </div>
                    ) : (
                         <div className="text-center py-8">
                            <DonationsIcon className="h-12 w-12 mx-auto text-gray-300" />
                            <p className="mt-2 text-slate-600 font-sans text-sm">No recurring donations set up.</p>
                        </div>
                    )}
                     <button onClick={() => onNavigate('donation')} className="mt-4 w-full bg-church-blue text-white font-sans font-semibold py-2 px-4 rounded-full text-sm hover:bg-church-blue-light transition-colors">
                        Set Up New Recurring Donation
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DonationsView;