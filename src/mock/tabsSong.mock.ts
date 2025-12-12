import { ITabConfig } from "@/types/song";

 export const tabsSong: ITabConfig[] = [
    { label: 'Work in Progress', href: '/songs/workinprogress' },
    { label: 'Published', href: '/songs/published' },
    { label: 'All', href: '/songs/all' },
  ];

  export const tabsWorkInProgress: ITabConfig[] = [
    { label: 'Work', href: '/songs/workinprogress/work' },
    { label: 'Meta', href: '/songs/workinprogress/meta' },
    { label: 'History', href: '/songs/workinprogress/history' },
    { label: 'Catalogue', href: '/songs/workinprogress/catalogue' },
  ];