
import React from 'react';
import { UserSubmission } from '../../types.ts';
import WallPost from './WallPost.tsx';

interface PublicWallProps {
    submissions: UserSubmission[];
    onLike: (submissionId: string) => void;
    onAddComment: (submissionId: string, commentText: string) => void;
}

const PublicWall: React.FC<PublicWallProps> = ({ submissions, onLike, onAddComment }) => {
    const approvedSubmissions = submissions.filter(s => s.isApproved);

    return (
        <section className="py-20 bg-church-gray">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif text-church-blue font-bold mb-4">Community Wall</h2>
                    <div className="w-20 h-1 bg-church-gold mx-auto"></div>
                    <p className="max-w-2xl mx-auto text-lg text-slate-700 mt-4 font-sans leading-relaxed">
                        See how God is moving in our church family and join us in prayer for one another.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-8">
                    {approvedSubmissions.length > 0 ? (
                        approvedSubmissions.map(submission => (
                            <WallPost
                                key={submission.id}
                                submission={submission}
                                onLike={() => onLike(submission.id)}
                                onAddComment={(commentText) => onAddComment(submission.id, commentText)}
                            />
                        ))
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-lg text-slate-600 font-sans">The wall is empty. Be the first to share a testimony or prayer request!</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PublicWall;
