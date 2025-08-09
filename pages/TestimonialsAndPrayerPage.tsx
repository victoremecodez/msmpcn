

import React, { useState } from 'react';
import { Page } from '../types.ts';
import { UserSubmission, Comment } from '../types.ts';
import { initialSubmissions } from '../data/wall.ts';
import TestimonialsWallHeader from '../components/testimonials_prayer/TestimonialsWallHeader.tsx';
import SubmissionTabs from '../components/testimonials_prayer/SubmissionTabs.tsx';
import PublicWall from '../components/testimonials_prayer/PublicWall.tsx';

interface TestimonialsAndPrayerPageProps {
  onNavigate: (page: Page) => void;
}

const TestimonialsAndPrayerPage: React.FC<TestimonialsAndPrayerPageProps> = ({ onNavigate }) => {
  const [submissions, setSubmissions] = useState<UserSubmission[]>(initialSubmissions);

  const handleAddSubmission = (submission: Omit<UserSubmission, 'id' | 'date' | 'likes' | 'comments' | 'isApproved'>) => {
    const newSubmission: UserSubmission = {
      ...submission,
      id: `sub_${Date.now()}`,
      date: new Date().toISOString(),
      likes: 0,
      comments: [],
      isApproved: true, // Auto-approve for this demo
    };
    setSubmissions([newSubmission, ...submissions]);
  };

  const handleLike = (submissionId: string) => {
    setSubmissions(
      submissions.map(s =>
        s.id === submissionId ? { ...s, likes: s.likes + 1 } : s
      )
    );
  };

  const handleAddComment = (submissionId: string, commentText: string) => {
    const newComment: Comment = {
      id: `comm_${Date.now()}`,
      author: 'Church Member', // Or get from logged in user context
      text: commentText,
      date: new Date().toISOString(),
    };

    setSubmissions(
      submissions.map(s =>
        s.id === submissionId
          ? { ...s, comments: [...s.comments, newComment] }
          : s
      )
    );
  };

  return (
    <div className="bg-white">
      <TestimonialsWallHeader />
      <SubmissionTabs onAddSubmission={handleAddSubmission} />
      <PublicWall
        submissions={submissions}
        onLike={handleLike}
        onAddComment={handleAddComment}
      />
    </div>
  );
};

export default TestimonialsAndPrayerPage;
