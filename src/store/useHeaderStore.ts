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
  
  // Nuevas acciones
  setBreadcrumb: (steps: BreadcrumbStep[], borderColor?: string) => void;
  hideBreadcrumb: () => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  // Valores iniciales existentes (NO TOCAR)
  titleHeader: 'Home',
  borderColor: 'grey.900',
  
  // Nuevos valores iniciales
  showBreadcrumb: false,
  breadcrumbs: [],
  
  // Función existente (NO TOCAR - mantiene compatibilidad)
  setHeader: (titleHeader, borderColor) => 
    set({ 
      titleHeader, 
      borderColor,
      showBreadcrumb: false // Oculta breadcrumb cuando usas setHeader
    }),
  
  // Nuevas funciones
  setBreadcrumb: (steps, borderColor = 'transparent') => 
    set({ 
      showBreadcrumb: true,
      breadcrumbs: steps,
      titleHeader: '', // Limpia el título primario cuando usas breadcrumb
      borderColor // Permite cambiar el borderColor
    }),
  
  hideBreadcrumb: () => 
    set({ showBreadcrumb: false })
}));