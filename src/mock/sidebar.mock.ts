// mocks/sidebar.mock.ts
import {
  SongSvg,
  CatalogSvg,
  PlayListSvg,
  FileSvg,
  ContactSvg,
  StarredSvg,
  HomeIconSvg,
  PlusSvg
} from '@/assets/icons';
import { ISidebarMenuItem, ISidebarSection } from '@/types/sidebar';

export const sidebarMenuItems: ISidebarMenuItem[] = [
  {
    id: 'add-new',
    label: 'Add new Item',
    icon: PlusSvg,
    isSpecial: true, 
  },
  {
    id: 'home',
    label: 'Home',
    icon: HomeIconSvg,
  },
  {
    id: 'songs',
    label: 'Songs',
    icon: SongSvg,
  },
  {
    id: 'catalogue',
    label: 'Catalogue',
    icon: CatalogSvg,
  },
  {
    id: 'playlists',
    label: 'Playlists',
    icon: PlayListSvg,
  },
  {
    id: 'files',
    label: 'Files',
    icon: FileSvg,
  },
  {
    id: 'contacts',
    label: 'Contacts',
    icon: ContactSvg,
  },
  {
    id: 'starred',
    label: 'Starred',
    icon: StarredSvg,
  },
];

export const sidebarSections: ISidebarSection[] = [
  {
    id: 'songs',
    title: 'Songs',
    items: [
      {
        id: 'song-1',
        title: 'Born Again',
        artist: 'Lisa feat. Doja Cat & RAYE',
      },
      {
        id: 'song-2',
        title: 'Dusk Till Down',
        artist: 'ZAYN',
      },
      {
        id: 'song-3',
        title: "Say You Won't Let Go",
        artist: 'James Arthur',
      },
    ],
    isCollapsed: false,
  },
  {
    id: 'catalogues',
    title: 'Catalogues',
    items: [],
    isCollapsed: true,
  },
];