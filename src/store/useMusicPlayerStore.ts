// store/useMusicPlayerStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Track {
  name: string;
  url: string;
}

interface MusicPlayerState {
  currentTrack: Track | null;
  isPlayerVisible: boolean;
  setCurrentTrack: (track: Track) => void;
  clearTrack: () => void;
}

export const useMusicPlayerStore = create<MusicPlayerState>()(
  persist(
    (set) => ({
      currentTrack: null,
      isPlayerVisible: false,
      setCurrentTrack: (track) => set({ currentTrack: track, isPlayerVisible: true }),
      clearTrack: () => set({ currentTrack: null, isPlayerVisible: false }),
    }),
    {
      name: 'music-player-storage', // key en localStorage
    }
  )
);