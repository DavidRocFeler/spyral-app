import { IMenuPlayControlItem, IPlayControlData } from "@/types/playControl";
import ProfilePicture from '@/assets/profile.png'
import PlayControlCoverPicture from '@/assets/playControl.png'

export const playControl: IPlayControlData = {
    image: PlayControlCoverPicture,
    title: 'Whispers Of The Night',
    artist: 'Elowen Davies',
    artistImage: ProfilePicture
};
  
export const menuPlayControl: IMenuPlayControlItem[] = [
    { id: 1, title: 'Electric Dreams', artist: 'Kira Sterling', duration: '3:47' },
    { id: 2, title: 'Neon Sunrise', artist: 'Leo Maxwell', duration: '4:23' },
    { id: 3, title: 'Urban Serenade', artist: 'Nia Peres', duration: '3:56' },
    { id: 4, title: 'Crimson Tide', artist: 'River Blake', duration: '5:02' },
    { id: 5, title: 'Blue Ocean', artist: 'Sarah Johnson', duration: '4:18' },
    { id: 6, title: 'Golden Dawn', artist: 'Mia Olivet', duration: '3:33' },
    { id: 7, title: 'Emerald Forest', artist: 'Liam Smith', duration: '4:12' },
    { id: 8, title: 'Violet Night', artist: 'Ava Lee', duration: '3:29' }
];