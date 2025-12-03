import { ISummaryProps } from "@/types/home";
import Ellipse1 from '@/assets/Ellipse1.png';
import Ellipse2 from '@/assets/Ellipse2.png';
import Ellipse3 from '@/assets/Ellipse3.png';
import Ellipse4 from '@/assets/Ellipse4.png';
import Ellipse5 from '@/assets/Ellipse5.png';

export const summaryData: ISummaryProps[] = [
    {
      value: 4,
      subtitle: 'Songs added this week',
    },
    {
      value: 32,
      subtitle: 'Songs in draft',
    },
    {
      value: '12.000',
      subvalue: 'EUR',
      subtitle: 'Monetisation',
    },
    {
      value: '',
      subtitle: 'Collaborators',
      collaborators: [Ellipse1, Ellipse2, Ellipse3, Ellipse4, Ellipse5],
    },
  ];