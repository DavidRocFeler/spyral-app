import { IMenuItemProps } from "@/types/ui";

export const menuItemsRegister: IMenuItemProps[] = [
    { text: 'BUMA Data', bgcolor: 'transparent', href: '/desktop/songs/register/buma'},
    { text: 'Personal Info', bgcolor: 'transparent', href: '/desktop/songs/register/personal'}
  ];
  
export const menuItemsWorkInProgress: IMenuItemProps[] = [
    { text: 'Tracklist', bgcolor: 'transparent', href: '/desktop/songs/workin/workinprogress/workoptions/meta/tracklist'},
    { text: 'Artist', bgcolor: 'transparent', href: '/desktop/songs/workin/workinprogress/workoptions/meta/artist'},
    { text: 'Main', bgcolor: 'transparent', href: '/desktop/songs/workin/workinprogress/workoptions/meta/main'},
    { text: 'Identifiers', bgcolor: 'transparent', href: '/desktop/songs/workin/workinprogress/workoptions/meta/identifiers'},
    { text: 'Default Dates', bgcolor: 'transparent', href: '/desktop/songs/workin/workinprogress/workoptions/meta/defaultdates'},
    { text: 'Release', bgcolor: 'transparent', href: '/desktop/songs/workin/workinprogress/workoptions/meta/release'},
    { text: 'Copyrights', bgcolor: 'transparent', href: '/desktop/songs/workin/workinprogress/workoptions/meta/copyrights'},
    { text: 'Genre', bgcolor: 'transparent', href: '/desktop/songs/workin/workinprogress/workoptions/meta/genre'},
    { text: 'Promotion', bgcolor: 'transparent', href: '/desktop/songs/workin/workinprogress/workoptions/meta/promotion'},
    { text: 'Languages', bgcolor: 'transparent', href: '/desktop/songs/workin/workinprogress/workoptions/meta/languages'},
    { text: 'World', bgcolor: 'transparent', href: '/desktop/songs/workin/workinprogress/workoptions/meta/world'},
    { text: 'Pricing', bgcolor: 'transparent', href: '/desktop/songs/workin/workinprogress/workoptions/meta/pricing'},
    { text: 'Tags', bgcolor: 'transparent', href: '/desktop/songs/workin/workinprogress/workoptions/meta/tags'},
    { text: 'Attachments', bgcolor: 'transparent', href: '/desktop/songs/workin/workinprogress/workoptions/meta/attachments'},
    { text: 'Trends', bgcolor: 'transparent', href: '/desktop/songs/workin/workinprogress/workoptions/meta/trends'}
  ];
  
  //catalogue view => /catalogue
export const catalogueListView: IMenuItemProps[] = [
  { text: 'My Catalogue', bgcolor: 'transparent', href: '/desktop/catalogue/mycatalogue'},
  { text: 'Published', bgcolor: 'transparent', href: '/desktop/catalogue/published'},
  { text: 'Tracks', bgcolor: 'transparent', href: '/desktop/catalogue/tracks'},
  { text: 'Playlist', bgcolor: 'transparent', href: '/desktop/catalogue/playlist'},
  { text: 'Album', bgcolor: 'transparent', href: '/desktop/catalogue/album'},
  { text: 'Artist', bgcolor: 'transparent', href: '/desktop/catalogue/artist'},
  { text: 'Catalogue Design', bgcolor: 'transparent', href: '/desktop/catalogue/cataloguedesign'},
  { text: 'Acc. & Prom.', bgcolor: 'transparent', href: '/desktop/catalogue/accprom'},
  { text: 'Clients', bgcolor: 'transparent', href: '/desktop/catalogue/clients'},
  { text: 'Stats', bgcolor: 'transparent', href: '/desktop/catalogue/stats'},
  { text: 'Notifications', bgcolor: 'transparent', href: '/desktop/catalogue/notifications'},
];

export const songsSettingData: IMenuItemProps[] = [
  { text: 'General', bgcolor: 'transparent', href: '/desktop/songs/setting/general'},
  { text: 'Security', bgcolor: 'transparent', href: '/desktop/songs/setting/segurity'},
  { text: 'Billing', bgcolor: 'transparent', href: '/desktop/songs/setting/billing'},
  { text: 'Users', bgcolor: 'transparent', href: '/desktop/songs/setting/users'},
  { text: 'Metadata', bgcolor: 'transparent', href: '/desktop/songs/setting/metadata'},
  { text: 'Tags', bgcolor: 'transparent', href: '/desktop/songs/setting/tags'},
  { text: 'Inboxes', bgcolor: 'transparent', href: '/desktop/songs/setting/inboxes'},
];