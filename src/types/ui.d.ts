import { ComponentType } from 'react';

export interface ISecondaryButtonProps {
  text?: string;
  icon?: ComponentType;
  onClick?: () => void;
}

export interface IButtonConfig {
  id: number;
  text: string;
  icon: ComponentType;
  onClick: () => void;
}