// Interface actualizada
export interface ICardPalyList {
    id: number;
    image: StaticImageData;
    title: string;
    createdDate: string;
    collaborators: StaticImageData[];
    isFlipped?: boolean;
    valueShared?: number;
    valueListener?: number;
    valueDownloads?: number;
  }