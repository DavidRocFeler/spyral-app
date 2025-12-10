import { IVersion } from "@/types/song";

export const mockVersionsState: IVersion[] = [
    { id: 1, music: 'Final Mix', artist: 'Evelyn Hayes', timestamp: '10 Dec 2024, 10:30' },
  ];
  
export const mockSharedVersionsState: IVersion[] = [
    { id: 1, music: 'First Mixdown', artist: 'Evelyn Hayes', timestamp: '08 Jan 2025, 16:20'},
    { id: 2, music: 'Second Mixdown', artist: 'Evelyn Hayes', timestamp: '07 Jan 2025, 13:10' },
    { id: 3, music: 'Third Mixdown', artist: 'Evelyn Hayes', timestamp: '07 Jan 2025, 13:10'},
    { id: 4, music: 'Final Mixdown', artist: 'Evelyn Hayes', timestamp: '07 Jan 2025, 13:10'},
  ];