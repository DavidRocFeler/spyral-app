import { StaticImageData } from "next/image";
import { ComponentType } from "react";

export interface IArtistPlayer {
    title: string;
    artist: string;
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