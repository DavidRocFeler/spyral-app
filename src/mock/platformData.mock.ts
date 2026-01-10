import { AppleMusicSvg, SoundCloudSvg, SpotifyIconSvg, YoutubeMusicSvg } from "@/assets/icons";
import { ICardPlataformProps } from "@/types/song";

export const platforms: ICardPlataformProps[] = [
    {
      text: 'Spotify',
      icon: SpotifyIconSvg
    },
    {
      text: 'Apple Music',
      icon: AppleMusicSvg,
    },
    {
      text: 'SoundCloud',
      icon: SoundCloudSvg,
    },
    {
        text: 'YouTube Music',
        icon: YoutubeMusicSvg,
    },
  ];

  export const platformsTwo: ICardPlataformProps[] = [
    {
      text: 'Spotify',
      icon: SpotifyIconSvg
    },
    {
        text: 'YouTube Music',
        icon: YoutubeMusicSvg,
    },
  ];