import { ComponentType } from "react";

export interface ITrackingProps {
    trackingStatus?: number; // 1-5
  }
  
export interface ICollaborator {
    id: string;
    name: string;
    avatar: StaticImageData | string;
  }
  
export interface ISongPlayerCardProps {
    coverImage: StaticImageData | string;
    artistName: string;
    songTitle: string;
    collaborators: Collaborator[];
    lastUpdate: string;
    duration: string;
    currentTime: string;
    onMinimize?: () => void;
    onExpand?: () => void;
    trackingStatus?: string;
    onBumaClick?: () => void;
  }

  export interface IVersion {
    id: number;
    music: string;
    artist: string;
    timestamp: string;
    size?: string;
  }

  export interface ICardCommentsProps {
    id: string;
    authorName: string;
    authorImage: StaticImageData | string;
    comment: string;
    version: string;
    date: string;
  }

  export interface ITaskTableProps {
    id: string;
    task: string;
    addedBy: string;
    date: string;
    status: TaskStatus;
  }
  
  export interface ITaskTableComponentProps {
    taskTableData: ITaskTableProps[];
  }

  export interface IFileItem {
    id: number;
    name?: string;
    size?: string;
    type?: string;
    fileIcon?: ComponentType;
    iconSpan?: boolean;
  }

  export interface ICollaboratorSongHistory {
    latestVersion: IVersion[];
    sharedVersion: IVersion[];
  } 

  export interface ICollaboratorSongFile {
    fileItem: IFileItem[];
  } 

  export interface ICardCommentsComponentProps {
    cardCommentsData: ICardCommentsProps[];
  }

  export interface ICollaboratorSong {
    latestVersion: IVersion[];
    sharedVersion: IVersion[];
    fileItem: IFileItem[];
    cardCommentsData: ICardCommentsProps[];
    taskTableData: ITaskTableProps[]
  }

  export interface IFormData {
    title: string;
    composerYes: boolean;
    lyricistYes: boolean;
    lyricistPercent?: number;
    composerPercent?: number;
    musicLyricsYes: boolean;
    genreOfWork: string;
    categories: string[];
    durationHrs?: number;
    durationMins?: number;
    durationSec?: number;
    alternativeTitle: string;
    audioFile: string;
    performingArtist: string;
  }

  export interface ICardPerformingArtist {
    text: string;
    bgcolor?: string;
    onClick?: () => void;
    image?: StaticImageData;
    alt?: string;
  }

  export interface ICardPlataformProps {
    text: string;
    bgcolor?: string;
    onClick?: () => void;
    icon?: ComponentType;
    px?: number;
  }
  
export interface ICountryStatistic {
  country: string;
  value: number;
}

export interface ITabConfig {
  label: string;
  href: string;
}

export interface ISongNavigationTabsProps {
  tabs?: TabConfig[];
}

export interface ICardMetaMainProps {
  tracklistOpen: boolean;
  mainData?: IMainData;
  initiallyOpen?: boolean
}

export interface IMainData {
  title: string;
  alternativeTitle: string;
  artistId: string;
  releaseVersion: string;
  labels: string[];
}

export interface ICardMetaListProps {
  title: string;
  placeholder: string;
  addElse: string;
}