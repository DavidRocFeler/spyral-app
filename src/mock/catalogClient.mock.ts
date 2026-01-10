import { SongIconBrandSvg } from "@/assets/icons";
import { ISummaryProps } from "@/types/home";
import { IFileItem } from "@/types/song";

export const catalogueClientsData: ISummaryProps[] = [
    {
      value: 12.675,
      subtitle: 'View',
    },
    {
      value: 9.566,
      subtitle: 'Strems',
    },
    {
      value: 12.675,
      subtitle: 'Downloads',
    },
    {
    value: 12.000,
    subvalue: 'EUR',
    subtitle: 'Access Requests',
    },
  ]

  export const mockFilesCatalogue: IFileItem[] = [
    { id: 1, name: 'audio_track_1.mp3', size: '3.2MB', type: 'MP3', fileIcon: SongIconBrandSvg },
    { id: 2, name: 'sound_recording.wav', size: '5.00MB', type: 'WAV', fileIcon: SongIconBrandSvg }, 
];