import { create } from 'zustand';

interface HeaderState {
  titleHeader: string;
  borderColor: string;
  setHeader: (title: string, color: string) => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  titleHeader: 'Home',      // Valor inicial
  borderColor: 'grey.900',  // Valor inicial
  setHeader: (titleHeader, borderColor) => set({ titleHeader, borderColor }),
}));