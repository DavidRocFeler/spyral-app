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
  href?: string;
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
  icon?: ComponentType;
  placeholder?: string;
  width?: string;
  height?: string;
  bgcolor?: string;
  borderRadius?: string;
  flexDirection?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void; 
  placeholderWhite?: string;
  placeholderColor?: string;
  type?: 'password' | 'text';
  border?: string,
  borderColor?: string,
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

export interface IBoxTextField {
  boxmt?: number;
  flexDirection?: string;
  IconSvg?: ComponentType;
}

export interface ICancelButtonTransparent {
  onClick?: () => void
}

export interface ICardExtendMock {
  menuMock?: ICardIconPlayerMusicProps[];
  menuPlayer: ICardMenuPlayerMusicProps;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
  paperSx?: SxProps<Theme>; 
}

export interface ICheckBoxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  text?: string;
  bgcolorCheck?: string;
  borderColor?: string;
  bgcolorHover?: string;
}

export interface ICheckRadius {
  text: string;
}

export interface IFolderComponentProps {
  id?: number;
  tracks: string;
  title: string
  changeButton?: boolean;
  menuButton?: boolean; 
  isSelected?: boolean;
  onSelect?: (id?: number) => void;
  selectionFolder?: boolean;
  showRelatedTracks?: boolean; 
}

export interface IGoDashboardProps {
  textMain?: string;
}

export interface IGrandiantButton {
  href?: string;
}

export interface IIconSpanProps {
  bgcolor?: string;
  icon?: ComponentType;
  borderRadius?: string;
  onClick?:  MouseEventHandler<HTMLButtonElement>; 
  height?: string;
  width?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderColor?: string;
  borderLeft?: string;
  borderRight?: string;
}

export interface IInputCalendarProps extends Omit<TextFieldProps, 'onChange' | 'value'> {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface INumberCounterProps {
  counter: number;
  isActive?: boolean;
  onClick?: () => void;
}

export interface ISearchDropdownProps {
  placeholder?: string;
}

export interface ISelectCustomProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  iconComponent?: ComponentType;
  fullWidth?: boolean;
  disabled?: boolean;
  height?: string;
  heightOption?: string;
  borderRadius?: string;
  bgcolor?: string;
  width?: string;
  variant?: string;
  mode?: 'grey' | 'white'; 
  typographyOptions?: string;
  ptIcon?: number;
}

export interface ISelectionButtonProps {
  text: string;
  bgcolor?: string;
  onClick?: () => void;
  isSelected?: boolean;
  height?: string;
  minWidth?: string;
  color?: string;
  px?: number;
}

export interface ISwitchAndLabel {
  switchItems?: IMetadataItem[];
  gap?: number;
}

export interface IFormatWordProps {
  normalText: string;
  boldText: string;
  afterText?: string; 
}

export interface ITextButtonProps {
  text: string | IFormatWordProps ; 
  color?: string;
  icon?: ComponentType;
  gap?: number;
  onClick?: () => void;
  iconPb?: number;
  flexDirection?: string,
  disabled?: boolean;
  variant?: string; 
  unset?: string;
  bgcolor?: string;
  height?: string;
  borderRadius?: string;
}

export interface ITitleIconProps {
  icon: ComponentType
  text: string
}


export interface IToastSuccesProps {
  label?: string;
  title?: string;
  textButton?: string;
  icon?: ComponentType
  iconButton?: ComponentType
}

export interface IUploadBoxMain {
  width?: string;
  textMain?: string;
  textSecondary?: string;
  textLast?: string;
  acceptedFormats?: string;
  onFileUpload?: (file: File) => void; 
}