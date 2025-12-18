import { ComponentType, ReactElement } from 'react';

export interface IPrimaryButtonProps {
  text?: string;
  icon?: ComponentType,
  height?: string,
  onClick?: () => void;
  trackingStatus?: string;
}

export interface ISecondaryButtonProps {
  text?: string;
  icon?: ComponentType | ReactElement;
  onClick?: () => void;
  gap?: number; 
  width?: string;
  borderRadius?: string;
  justifyContent?: string;
  ml?: string;
  color?: string;
  mlicon?: string;
  px?: number;
  bgcolor?: string;
  height?: string;
  width?: string;
  justifyContent?: string;
  pl?: number;
  mr?: string;
  borderRadius?: string;
  varitant?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  color?: string;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
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
  flexDirection?: string;
  value?: string; // Agrega esto
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void; 
  placeholderWhite?: string;
  placeholderColor?: string;
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
  variant?: string;
  placeholderWhite?: string;
  placeholderColor?: string;
  variantPlaceholder?: string;
}

export interface IUploadBoxProps {
  width?: string;
  height?: string;
  text?: string;
  bgcolor?: string;
  borderColor?: string;
  icon?: ComponentType
}

export interface ICollaboratorsProps {
  id: number;
  image: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
}

export interface IMenuItemProps {
  text: string
  href: string // Ruta de navegación
  icon?: React.ReactElement | ComponentType<any>
  bgcolor?: string
  color?: string
}

export interface ISlideBarMenuProps {
  menuItems: IMenuItemProps[]
}

