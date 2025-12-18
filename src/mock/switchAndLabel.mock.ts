import { IMetadataItem } from "@/types/playlist";


export const settingPlaylist: IMetadataItem[] = [
    { id: 'streamingOnly', label: 'Streaming Only', enabled: true },
    { id: 'trackVersion', label: 'Included alternate track version', enabled: true },
    { id: 'shareStems', label: 'Share stems', enabled: true },
    { id: 'showLiriks', label: 'Show Lyrics', enabled: true },
]

export const settingPresentationPlaylist: IMetadataItem[] = [
    { id: 'showBussisnes', label: 'Show Business logo', enabled: true },
    { id: 'showLiriks', label: 'Show Lyrics', enabled: true },
]