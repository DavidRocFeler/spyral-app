import { create } from 'zustand';

type BreadcrumbStep = {
  label: string;
  isActive: boolean; 
};

interface HeaderState {
  titleHeader: string;
  borderColor: string;
  
  showBreadcrumb: boolean;
  breadcrumbs: BreadcrumbStep[];
  
  setHeader: (title: string, color: string) => void;
  
  setBreadcrumb: (steps: BreadcrumbStep[], borderColor?: string) => void;
  hideBreadcrumb: () => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  titleHeader: 'Home',
  borderColor: 'grey.900',
  
  showBreadcrumb: false,
  breadcrumbs: [],
  
  setHeader: (titleHeader, borderColor) => 
    set({ 
      titleHeader, 
      borderColor,
      showBreadcrumb: false 
    }),
  
  setBreadcrumb: (steps, borderColor = 'transparent') => 
    set({ 
      showBreadcrumb: true,
      breadcrumbs: steps,
      titleHeader: '', 
      borderColor 
    }),
  
  hideBreadcrumb: () => 
    set({ showBreadcrumb: false })
}));