import { StaticImageData } from "next/image";
import { ComponentType } from "react";

// Mock Data
export interface IPlayControlData {
    image: StaticImageData;
    title: string;
    artist: string;
    artistImage: StaticImageData;
}
  
export interface IMenuPlayControlItem {
    id: number;
    title: string;
    artist: string;
    duration: string;
}

export interface ICardTracksProps {
    track: IMenuPlayControlItem;
  }
  