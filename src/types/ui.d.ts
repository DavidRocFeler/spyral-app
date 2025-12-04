import { ComponentType } from 'react';

export interface ISecondaryButtonProps {
  text?: string;
  icon?: ComponentType;
  onClick?: () => void;
  gap?: number; 
  width?: string;
  borderRadius?: string;
  justifyContent?: string;
}

export interface IButtonConfig {
  id: number;
  text: string;
  icon: ComponentType;
  onClick: () => void;
}