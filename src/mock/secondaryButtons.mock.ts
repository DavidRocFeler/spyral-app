import { ComponentType } from 'react';
import { ArrowDownSvg, ShareIconSvg } from '@/assets/icons';
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
];