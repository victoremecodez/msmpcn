import React from 'react';
import { User } from '../../../types.ts';
import { DownloadIcon } from '../../icons.tsx';

interface CertificateViewProps {
    user: User;
}

const CertificateView: React.FC<CertificateViewProps> = ({ user }) => {

    const issueDate = 'July 26, 2024'; // This could be dynamic based on user signup date

    // Placeholder for download functionality
    const handleDownload = () => {
        alert('Certificate download feature coming soon!');
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                    <h2 className="text-2xl font-serif text-church-blue font-bold">Digital Membership Certificate</h2>
                    <p className="text-slate-600 font-sans mt-1">A confirmation of your valued membership in our church family.</p>
                </div>
                <button 
                    onClick={handleDownload}
                    className="mt-4 md:mt-0 flex-shrink-0 bg-church-blue text-white font-sans font-semibold py-2 px-5 rounded-full hover:bg-church-blue-light transition-colors duration-300 flex items-center">
                    <DownloadIcon className="h-5 w-5 mr-2" /> Download Certificate
                </button>
            </div>

            <div className="aspect-[4/3] bg-church-light-gold p-8 rounded-lg shadow-inner border-4 border-church-gold flex flex-col items-center justify-center relative overflow-hidden">
                {/* Decorative border */}
                <div className="absolute inset-2 border-2 border-church-gold/50 rounded"></div>
                
                <div className="text-center z-10">
                    <h1 className="text-4xl lg:text-5xl font-serif text-church-blue-dark" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Certificate of Membership
                    </h1>
                    <p className="mt-6 text-lg font-sans text-slate-700">This is to certify that</p>
                    <p className="my-4 text-3xl lg:text-4xl font-semibold font-serif text-church-dark underline decoration-church-gold decoration-2 underline-offset-8">
                        {user.name}
                    </p>
                    <p className="text-lg font-sans text-slate-700">
                        is a valued member in good standing of the
                    </p>
                    <h2 className="mt-4 text-2xl lg:text-3xl font-bold font-serif text-church-blue">
                        Mary Slessor Memorial Presbyterian Cathedral
                    </h2>
                    <p className="mt-1 text-base font-sans text-slate-600">Port Harcourt, Nigeria</p>

                    <div className="mt-10 grid grid-cols-2 gap-8 text-sm font-sans text-slate-800">
                        <div className="text-center border-t-2 border-slate-600 pt-2">
                            <p>Rev. Dr. Joseph T.</p>
                            <p className="font-bold">Cathedral Pastor</p>
                        </div>
                        <div className="text-center border-t-2 border-slate-600 pt-2">
                            <p>{issueDate}</p>
                            <p className="font-bold">Date of Issue</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateView;
