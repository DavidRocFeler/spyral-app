import authorImg1 from '@/assets/UserLian.png';
import authorImg2 from '@/assets/UserMason.png';
import authorImg3 from '@/assets/UserAva.png';
import { ICardCommentsProps } from '@/types/song';

export const commentsMock: ICardCommentsProps[] = [
  {
    id: '1',
    authorName: 'Elowen Davies',
    authorImage: authorImg1,
    comment: 'This song perfectly captures the power of good advice—sometimes it\'s exactly what we need, even when we don\'t want to hear it. Beautiful lyrics and amazing delivery!',
    version: 'Version: Third Mixdown',
    date: '11 Jan 2025, 14:30'
  },
  {
    id: '2',
    authorName: 'Jasper Lin',
    authorImage: authorImg2,
    comment: 'A vibrant track blending tradition with modern sounds. It makes you want to dance! A unique take on music.',
    version: 'Version: Final Cut',
    date: '15 Mar 2025, 09:45'
  },
  {
    id: '3',
    authorName: 'Amara Patel',
    authorImage: authorImg3,
    comment: 'A memorable, haunting tune filled with nostalgia and heartfelt lyrics. A true work of art!',
    version: 'Version: Acoustic Version',
    date: '20 Apr 2025, 18:00'
  }
];

export const commentsEmpty: ICardCommentsProps[] = [
  ];