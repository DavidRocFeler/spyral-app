import { ComponentType } from 'react';

export interface ISecondaryButtonProps {
  text?: string;
  icon?: ComponentType;
  onClick?: () => void;
  gap?: number; 
  width?: string;
  borderRadius?: string;
  justifyContent?: string;
  ml?: string;
  color?: string;
  mlicon?: string;
  px?: number
}

export interface IButtonConfig {
  id: number;
  text: string;
  icon: ComponentType;
  onClick?: () => void;
}

export interface ITrackinButtonProps {
  text?: string; 
  bgcolor?: string;
  icon: ComponentType,
  gap?: number,
  width?: string,
  borderRadius?: string,
  justifyContent?: string,
  ml?: string,
  mlicon?: string,
  color?: string,
  px?: number,
  borderColor?: string;
  onClick?: () => void
}