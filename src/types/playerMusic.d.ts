import { StaticImageData } from "next/image";
import { ComponentType } from "react";

export interface IArtistPlayer {
    title: string;
    artist: string;
    listened: string;
    cover: StaticImageData;
    duration: string;
    currentTime: string;
    progress: number;
}
  
export interface IPlayerMusic {
    id: string;
    icon: ComponentType;
    action: string;
}

export interface ICardIconPlayerMusicProps {
  icon: ComponentType;
  label: string;
}
export interface ICardMenuPlayerMusicProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
}