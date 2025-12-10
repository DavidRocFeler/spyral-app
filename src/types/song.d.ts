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