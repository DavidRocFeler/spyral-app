import { ArrowDownGreySvg, ArrowDownSvg, ArrowRightGreySvg, ArrowRightSvg, ContactListSvg, PlusGreySvg, PlusSvg, ShareIconSvg } from '@/assets/icons';
import { IButtonConfig } from '@/types/ui';

export const secondaryButtonsArray: IButtonConfig[] = [
  {
    id: 1,
    text: 'Play on',
    icon: ArrowDownSvg,
    // onClick: () => console.log('Play clicked')
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
  {
    id: 5,
    text: 'MP3',
    icon: ArrowDownSvg,
    onClick: () => console.log('Play clicked')
  },
  {
    id: 6,
    text: 'Contact List',
    icon: ContactListSvg,
    onClick: () => console.log('Play clicked')
  },
  {
    id: 7,
    text: 'Add',
    icon: PlusSvg,
    onClick: () => console.log('Play clicked')
  },
  {
    id: 8,
    text: 'Send (4)',
    icon: ArrowRightSvg,
    onClick: () => console.log('Play clicked')
  },
];