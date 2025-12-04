import { ArrowDownGreySvg, ArrowDownSvg, ArrowRightGreySvg, PlusGreySvg, ShareIconSvg } from '@/assets/icons';
import { IButtonConfig } from '@/types/ui';

export const secondaryButtonsArray: IButtonConfig[] = [
  {
    id: 1,
    text: 'Play on',
    icon: ArrowDownSvg,
    onClick: () => console.log('Play clicked')
  },
  {
    id: 2,
    text: 'Share',
    icon: ShareIconSvg,
    onClick: () => console.log('More clicked')
  },
  {
    id: 3,
    text: 'Send',
    icon: ArrowRightGreySvg,
    onClick: () => console.log('Send')
  },
  {
    id: 3,
    text: 'MP3',
    icon: ArrowDownGreySvg,
    onClick: () => console.log('Dropdown')
  },
  {
    id: 4,
    text: 'Add',
    icon: PlusGreySvg,
    onClick: () => console.log('Dropdown')
  },
];