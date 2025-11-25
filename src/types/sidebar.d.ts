// interfaces/sidebar.interface.ts
import { ComponentType } from 'react';

export interface ISidebarMenuItem {
  id: string;
  label: string;
  icon: ComponentType;
  isSpecial?: boolean; // Para el botón "Add new Item" que abre modal
}

export interface ISidebarSection {
  id: string;
  title: string;
  items: ISidebarSectionItem[];
  isCollapsed?: boolean;
}

export interface ISidebarMenuItemProps {
    item: ISidebarMenuItem;
    onClick?: () => void;
}

export interface ISidebarSectionProps {
    section: ISidebarSection;
}

export interface ISidebarMenuItemProps {
  item: ISidebarMenuItem;
  isActive: boolean;
  onClick: () => void;
}
