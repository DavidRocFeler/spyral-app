import { StaticImageData } from "next/image";

export interface ISummaryProps {
    value: string | number;
    subvalue?: string;
    subtitle: string;
    collaborators?: StaticImageData[];
}

export interface ILatestRelease {
    id: number;
    title: string;
    artist: string;
    duration: string;
    views: number;
    earnings: number;
}

export interface ICardArrayLatestProps {
  title: string;
  artist: string;
  duration: string;
  views: number;
  earnings: number;
}

export interface ICatalogue {
  id: number;
  image: StaticImageData;
  title: string;
}

export interface IWorkInProgress {
  id: number;
  image: StaticImageData;
  title: string;
  createdDate: string;
  collaborators: StaticImageData[];
}

export interface ICardArrayProgressProps {
  image: StaticImageData;
  title: string;
  createdDate: string;
  collaborators: StaticImageData[];
  index: number;
}

export interface IPlaylist {
  id: number;
  title: string;
  songsCount: number;
  sharedCount: number;
  listenersCount: number;
  downloadsCount: number;
}

export interface ICardArrayPlaylistProps {
  title: string;
  songsCount: number;
  sharedCount: number;
  listenersCount: number;
  downloadsCount: number;
}