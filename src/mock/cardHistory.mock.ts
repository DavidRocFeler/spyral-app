import authorImg1 from '@/assets/UserLian.png';
import authorImg2 from '@/assets/UserMason.png';
import authorImg3 from '@/assets/UserAva.png';
import { ICardCommentsProps } from '@/types/song';

export const historyCommentsMock: ICardCommentsProps[] = [
  {
    id: '1',
    authorName: 'Elowen Davies',
    authorImage: authorImg1,
    comment: 'Uploaded a new track',
    version: 'Version: Third Mixdown',
    date: '11 Jan 2025, 14:30'
  },
  {
    id: '2',
    authorName: 'Jasper Lin',
    authorImage: authorImg2,
    comment: 'Uploaded a new track',
    version: 'Version: Final Cut',
    date: '15 Mar 2025, 09:45'
  },
  {
    id: '3',
    authorName: 'Amara Patel',
    authorImage: authorImg3,
    comment: 'Uploaded a new track',
    version: 'Version: Acoustic Version',
    date: '20 Apr 2025, 18:00'
  }
];

