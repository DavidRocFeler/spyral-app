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
  }