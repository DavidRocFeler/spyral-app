import { ComponentType } from "react";

// Interface actualizada
export interface IModalAddPlayListProps {
  open: boolean;
  onClose: () => void;
  initialSearch?: string;
  initialEmail?: string;
}


export interface ICardPalyList {
    id: number;
    image: StaticImageData;
    title: string;
    createdDate: string;
    collaborators: StaticImageData[];
    isFlipped?: boolean;
    valueShared?: number;
    valueListener?: number;
    valueDownloads?: number;
  }

export interface IMetadataItem {
  id: string;
  label: string;
  enabled: boolean;
}

//metadata 
export interface IInputCalendarProps extends Omit<TextFieldProps, 'onChange' | 'value'> {
  value: string; 
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface IUploadImageMetadata {
  height?: string;
  width?: string;
  borderRadius?: string;
  mainText?: string;
  secondaryText?: string;
  icon?: ComponentType;
  bgcolor?: string;
}

//presentation
export interface IBoxTextField {
  boxmt?: number;
  flexDirection?: string;
  IconSvg?: ComponentType;
}

//setting
export interface ICardPublished {
  trackingStatus: number;
  bgcolor?: string;
}