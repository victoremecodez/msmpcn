import React from 'react';
import { resourcesData } from '../../../data/dashboard.ts';
import { DownloadIcon, ContentIcon } from '../../icons.tsx';

const DownloadsView: React.FC = () => {
    
    const newsletters = resourcesData.filter(r => r.category === 'Newsletter');
    const studyGuides = resourcesData.filter(r => r.category === 'Study Guide');
    const forms = resourcesData.filter(r => r.category === 'Form');

    const ResourceList: React.FC<{title: string, resources: typeof resourcesData}> = ({ title, resources }) => (
        <div>
            <h3 className="text-xl font-serif font-bold text-church-dark mb-4">{title}</h3>
            {resources.length > 0 ? (
                <div className="space-y-3">
                    {resources.map(res => (
                        <div key={res.id} className="bg-gray-50 p-4 rounded-lg flex items-center justify-between gap-4">
                            <div>
                                <h4 className="font-sans font-semibold text-church-dark">{res.title}</h4>
                                <p className="text-sm text-slate-600 font-sans">{res.description}</p>
                            </div>
                            <a href={res.url} download className="flex-shrink-0 bg-church-blue text-white font-sans font-semibold py-2 px-4 rounded-full text-sm hover:bg-church-blue-light transition-colors flex items-center">
                                <DownloadIcon className="h-4 w-4 mr-2"/> Download
                            </a>
                        </div>
                    ))}
                </div>
            ) : <p className="font-sans text-sm text-slate-500">No resources in this category yet.</p>}
        </div>
    );

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-serif text-church-blue font-bold mb-6">Downloads & Resources</h2>
            
            <div className="space-y-8">
                <ResourceList title="Church Newsletters" resources={newsletters} />
                <ResourceList title="Bible Study Guides" resources={studyGuides} />
                <ResourceList title="Forms & Documents" resources={forms} />
            </div>

             {resourcesData.length === 0 && (
                 <div className="text-center py-16">
                    <ContentIcon className="h-16 w-16 mx-auto text-gray-300" />
                    <h3 className="mt-4 text-xl font-serif font-semibold text-church-dark">No Resources Available</h3>
                    <p className="mt-2 text-slate-600 font-sans">Check back later for newsletters, study guides, and other documents.</p>
                </div>
            )}
        </div>
    );
};

export default DownloadsView;
