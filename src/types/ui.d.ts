import { ComponentType } from 'react';

export interface IPrimaryButtonProps {
  text?: string;
}

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

export interface TrackingProps {
  trackingStatus?: number; // 1-5
}

export interface IContact {
  id: string;
  name: string;
  email?: string;
  avatar?: StaticImageData;
  icon?: ComponentType;
  bottom?: string | number;
  isSelected?: boolean;
}

export interface IContactSelectorItemProps {
  contact: IContact;
  isSelected: boolean;
  onContactClick: (contactId: string) => void;
  avatarSize?: number;
  checkmarkSize?: number;
  nameWidth?: string;
  icon?: ComponentType;
  color?: string;
  height?: string;
  showBorder?: boolean; 
}

export interface ISearchBarProps {
  icon: ComponentType;
  placeholder?: string;
  width?: string;
  height?: string;
  bgcolor?: string;
  borderRadius?: string;
}

export interface CustomTextFieldProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  height?: string | number;
  placeholder?: string;
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  type?: string;
  name?: string;
  id?: string;
  className?: string;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
  width?: string;
}