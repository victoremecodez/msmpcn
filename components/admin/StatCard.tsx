
import React from 'react';

interface StatCardProps {
    icon: React.ReactNode;
    label: string;
    value: string;
    details: string;
    onClick: () => void;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, details, onClick }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex items-center">
            <div className="mr-4">
                {icon}
            </div>
            <div>
                <p className="text-slate-500 font-sans text-sm font-medium uppercase tracking-wider">{label}</p>
                <p className="text-3xl font-serif font-bold text-church-dark">{value}</p>
                <button onClick={onClick} className="text-sm font-sans text-church-blue hover:underline mt-1">{details}</button>
            </div>
        </div>
    );
};

export default StatCard;