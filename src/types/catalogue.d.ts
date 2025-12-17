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