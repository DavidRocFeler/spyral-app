// store/navigationStore.ts
import { create } from 'zustand';

interface NavigationState {
  activeView: string;
  isModalOpen: boolean;
  setActiveView: (view: string) => void;
  openModal: () => void;
  closeModal: () => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeView: 'home',
  isModalOpen: false,
  setActiveView: (view) => set({ activeView: view }),
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));