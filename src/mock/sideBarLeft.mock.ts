import { IMenuItemProps } from "@/types/ui";

export const menuItemsRegister: IMenuItemProps[] = [
    { text: 'BUMA Data', bgcolor: 'transparent', href: '/songs/register/buma'},
    { text: 'Personal Info', bgcolor: 'transparent', href: '/songs/register/personal'}
  ];
  
export const menuItemsWorkInProgress: IMenuItemProps[] = [
    { text: 'Tracklist', bgcolor: 'background.default', href: '/tracklist'},
    { text: 'Artist', bgcolor: 'transparent', href: '/artist'},
    { text: 'Main', bgcolor: 'transparent', href: '/main'},
    { text: 'Identifiers', bgcolor: 'transparent', href: '/identifiers'},
    { text: 'Default Dates', bgcolor: 'transparent', href: '/defaultdates'},
    { text: 'Release', bgcolor: 'transparent', href: '/release'},
    { text: 'Copyrights', bgcolor: 'transparent', href: '/copyrights'},
    { text: 'Genre', bgcolor: 'transparent', href: '/genre'},
    { text: 'Promotion', bgcolor: 'transparent', href: '/promotion'},
    { text: 'Languages', bgcolor: 'transparent', href: '/languages'},
    { text: 'World', bgcolor: 'transparent', href: '/world'},
    { text: 'Pricing', bgcolor: 'transparent', href: '/pricing'},
    { text: 'Tags', bgcolor: 'transparent', href: '/tags'},
    { text: 'Attachments', bgcolor: 'transparent', href: '/attachments'},
    { text: 'Trends', bgcolor: 'transparent', href: '/trends'}
  ];
  
  //catalogue view => /catalogue
export const catalogueListView: IMenuItemProps[] = [
  { text: 'My Catalogue', bgcolor: 'transparent', href: '/catalogue/mycatalogue'},
  { text: 'Published', bgcolor: 'transparent', href: '/catalogue/published'},
  { text: 'Tracks', bgcolor: 'transparent', href: '/catalogue/tracks'},
  { text: 'Playlist', bgcolor: 'transparent', href: '/catalogue/playlist'},
  { text: 'Album', bgcolor: 'transparent', href: '/catalogue/album'},
  { text: 'Artist', bgcolor: 'transparent', href: '/catalogue/artist'},
  { text: 'Catalogue Design', bgcolor: 'transparent', href: '/catalogue/cataloguedesign'},
  { text: 'Acc. & Prom.', bgcolor: 'transparent', href: '/catalogue/accprom'},
  { text: 'Clients', bgcolor: 'transparent', href: '/catalogue/clients'},
  { text: 'Stats', bgcolor: 'transparent', href: '/catalogue/stats'},
  { text: 'Notifications', bgcolor: 'transparent', href: '/catalogue/notifications'},
];

export const songsSettingData: IMenuItemProps[] = [
  { text: 'General', bgcolor: 'transparent', href: '/songs/setting/general'},
  { text: 'Security', bgcolor: 'transparent', href: '/songs/setting/segurity'},
  { text: 'Billing', bgcolor: 'transparent', href: '/songs/setting/billing'},
  { text: 'Users', bgcolor: 'transparent', href: '/songs/setting/users'},
  { text: 'Metadata', bgcolor: 'transparent', href: '/songs/setting/metadata'},
  { text: 'Tags', bgcolor: 'transparent', href: '/songs/setting/tags'},
  { text: 'Inboxes', bgcolor: 'transparent', href: '/songs/setting/inboxes'},
];