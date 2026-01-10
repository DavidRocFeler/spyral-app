export interface IMenuCatalogueItem {
    id: number;
    title: string;
    status: string;
    duration: string;
    display?: string;
}

export interface ICardTrackPersonalProps {
    track: IMenuCatalogueItem;
  }

  export interface ICatalogueListProps {
    id: string,
    name: string;
    playlist: string;
    track: number;
    status: string;
    link: string;
  }

  export interface ICatalogueList {
    catalogueListTable: ICatalogueListProps[]
  }

  export interface ICardPersonalTrackProps {
    width?: string;
    height?: string;
    mr?: number;
    pb?: number;
  }

 export interface IMetadataItem {
    id: string;
    label: string;
    enabled: boolean;
  }