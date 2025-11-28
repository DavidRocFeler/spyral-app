// mock/musicPlayer.mock.ts
import ArtisPlayer from "@/assets/playControl.png";
import {
  PlayLeftIconSvg,
  PlayIconSvg,
  PlayRigthIconSvg,
  SoundIconSvg,
  AutomaticSoundSvg,
  RandonSoundSvg,
  LikeIconSvg,
  DisLikeIconSvg,
  MenuSpanSvg,
  ArrowUpSvg,
  DownloadIconSvg,
  FavoriteIconSvg,
  AddPlayListSvg,
  UserArtistIconSvg,
  ShareIconSvg,
  ReportSvg
} from '@/assets/icons';
import { IArtistPlayer, ICardIconPlayerMusicProps, ICardMenuPlayerMusicProps, IPlayerMusic } from '@/types/playerMusic';

export const artistPlayer: IArtistPlayer = {
  title: "Whispers of the Night",
  artist: "Sophia Bennett ",
  listened: "40k listened",
  cover: ArtisPlayer,
  duration: "4:32",
  currentTime: "1:42",
  progress: 39
};

export const playerMusic: IPlayerMusic[] = [
  {
    id: 'play-left',
    icon: PlayLeftIconSvg,
    action: 'previous'
  },
  {
    id: 'play',
    icon: PlayIconSvg,
    action: 'play'
  },
  {
    id: 'play-right',
    icon: PlayRigthIconSvg,
    action: 'next'
  },
  {
    id: 'like',
    icon: LikeIconSvg,
    action: 'like'
  },
  {
    id: 'dislike',
    icon: DisLikeIconSvg,
    action: 'dislike'
  },
  {
    id: 'menu',
    icon: MenuSpanSvg,
    action: 'menu'
  },
  {
    id: 'sound',
    icon: SoundIconSvg,
    action: 'volume'
  },
  {
    id: 'automatic',
    icon: AutomaticSoundSvg,
    action: 'repeat'
  },
  {
    id: 'random',
    icon: RandonSoundSvg,
    action: 'shuffle'
  },
  {
    id: 'arrow-up',
    icon: ArrowUpSvg,
    action: 'expand'
  }
];

export const menuItems: ICardIconPlayerMusicProps[] = [
    { id: 'download', icon: DownloadIconSvg, label: 'Download' },
    { id: 'favorite', icon: FavoriteIconSvg, label: 'Add to favorite' },
    { id: 'playlist', icon: AddPlayListSvg, label: 'Add to playlist' },
    { id: 'artist', icon: UserArtistIconSvg, label: 'View artist' },
    { id: 'share', icon: ShareIconSvg, label: 'Share' },
    { id: 'report', icon: ReportSvg, label: 'Report' }
  ];