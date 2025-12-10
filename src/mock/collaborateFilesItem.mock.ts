import { FileBrandSvg, SongIconBrandSvg } from "@/assets/icons";
import { IFileItem } from "@/types/song";

export const mockCollaborateFilesItemEmpty: IFileItem[] = [
    { id: 1, name: 'audio_track.mp3', size: '3.2MB', type: 'MP3', fileIcon: SongIconBrandSvg },
    // { id: 2, name: 'bass_line.wav', size: '4.1MB', type: 'WAV', fileIcon: SongIconBrandSvg },
    // { id: 3, name: 'drums_loop.aiff', size: '5.3MB', type: 'AIFF', fileIcon: SongIconBrandSvg },
    // { id: 4, name: 'vocal_take.flac', size: '6.7MB', type: 'FLAC', fileIcon: SongIconBrandSvg },
    // { id: 5, name: 'guitar_solo.mp3', size: '2.8MB', type: 'MP3', fileIcon: SongIconBrandSvg },
    // { id: 6, name: 'synth_pad.wav', size: '4.9MB', type: 'WAV', fileIcon: SongIconBrandSvg },
    // { id: 7, name: 'piano_chords.mp3', size: '3.5MB', type: 'MP3', fileIcon: SongIconBrandSvg },
    // { id: 8, name: 'strings_arrangement.wav', size: '7.2MB', type: 'WAV', fileIcon: SongIconBrandSvg },
  ];

  export const mockCollaborateFilesItem: IFileItem[] = [
    { id: 1, name: 'audio_track.mp3', size: '3.2MB', type: 'MP3', fileIcon: SongIconBrandSvg },
    { id: 2, name: 'bass_line.wav', size: '4.1MB', type: 'WAV', fileIcon: FileBrandSvg },
    { id: 3, name: 'drums_loop.aiff', size: '5.3MB', type: 'AIFF', fileIcon: SongIconBrandSvg },
    { id: 4, name: 'vocal_take.flac', size: '6.7MB', type: 'FLAC', fileIcon: SongIconBrandSvg },
    { id: 5, name: 'guitar_solo.mp3', size: '2.8MB', type: 'MP3', fileIcon: FileBrandSvg },
    { id: 6, name: 'synth_pad.wav', size: '4.9MB', type: 'WAV', fileIcon: SongIconBrandSvg },
    { id: 7, name: 'audio_track.mp3', size: '3.2MB', type: 'MP3', fileIcon: FileBrandSvg  },
    { id: 8, name: 'bass_line.wav', size: '4.1MB', type: 'WAV', fileIcon: SongIconBrandSvg },
    { id: 9, name: 'drums_loop.aiff', size: '5.3MB', type: 'AIFF', fileIcon: SongIconBrandSvg },
    { id: 10, name: 'vocal_take.flac', size: '6.7MB', type: 'FLAC', fileIcon: SongIconBrandSvg },
    { id: 11, name: 'guitar_solo.mp3', size: '2.8MB', type: 'MP3', fileIcon: SongIconBrandSvg },
    { id: 12, name: 'synth_pad.wav', size: '4.9MB', type: 'WAV', fileIcon: FileBrandSvg  },
  ];