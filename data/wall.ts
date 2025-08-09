
import { UserSubmission } from '../types.ts';

export const initialSubmissions: UserSubmission[] = [
    {
        id: 'testi_1',
        type: 'testimonial',
        author: 'Grace A.',
        content: "I want to thank God for His healing power. I was diagnosed with a severe illness, but after prayers from the church family, the doctors are amazed at my recovery. Praise be to God!",
        date: '2024-07-20T10:00:00Z',
        imageUrl: 'https://picsum.photos/seed/testimony1/800/600',
        likes: 15,
        comments: [
            { id: 'comm_1', author: 'Pastor John', text: 'Amen! We celebrate with you, Grace.', date: '2024-07-20T11:00:00Z' },
            { id: 'comm_2', author: 'Mary I.', text: 'This is wonderful news! So happy for you.', date: '2024-07-20T12:30:00Z' },
        ],
        isApproved: true,
    },
    {
        id: 'prayer_1',
        type: 'prayer',
        author: 'Anonymous',
        content: "Please pray for my family as we go through a difficult financial period. Pray for open doors and God's provision.",
        date: '2024-07-19T15:30:00Z',
        likes: 22,
        comments: [
             { id: 'comm_3', author: 'Elder Michael', text: 'Lifting your family up in prayer. May God provide exceedingly.', date: '2024-07-19T16:00:00Z' }
        ],
        isApproved: true,
    },
    {
        id: 'testi_2',
        type: 'testimonial',
        author: 'David E.',
        content: "Through the men's fellowship, I've found a band of brothers who hold me accountable and encourage my walk with Christ. I'm grateful for this community.",
        date: '2024-07-18T09:00:00Z',
        videoUrl: 'https://www.youtube.com/embed/Bey4XXJAqS8',
        likes: 8,
        comments: [],
        isApproved: true,
    },
    {
        id: 'prayer_2',
        type: 'prayer',
        author: 'Sister Funke',
        content: "Pray for my daughter who is writing her final exams this week. Pray for wisdom, retention, and success.",
        date: '2024-07-17T20:00:00Z',
        likes: 31,
        comments: [
            { id: 'comm_4', author: 'Youth Pastor', text: 'We are praying for her. She will excel in Jesus name!', date: '2024-07-18T08:00:00Z' },
            { id: 'comm_5', author: 'Anonymous', text: 'Done!', date: '2024-07-18T10:15:00Z' },
        ],
        isApproved: true,
    }
];
