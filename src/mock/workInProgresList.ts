import { ICardPalyList } from "@/types/playlist";
import { IWorkInProgress } from "@/types/home";
import CoverOne from "@/assets/workProgresPicture1.png"
import CoverTwo from "@/assets/workProgresPicture2.png"
import Profile1 from "@/assets/Ellipse6.png"
import Profile2 from "@/assets/Ellipse7.png"
import Profile3 from "@/assets/Ellipse8.png"

import Picture1 from "@/assets/examplePlaylist.png"
import Picture2 from "@/assets/examplePlaylist.png"

export const workInProgressList: IWorkInProgress[] = [
  {
    id: 1,
    image: CoverOne,
    title: 'Echoes of Twilight',
    createdDate: '10 Jun 2025',
    collaborators: [
      Profile1,
      Profile2,
      Profile3,
    ]
  },
  {
    id: 2,
    image: CoverTwo,
    title: "I'm Gonna Be (500 miles)",
    createdDate: '10 Jun 2025',
    collaborators: [
      Profile1,
      Profile2,
      Profile3,
    ]
  }
];

export const playListCards: ICardPalyList[] = [
  {
    id: 1,
    image: Picture1,
    title: 'Whispers of Dusk',
    createdDate: '10 Jun 2025',
    collaborators: [Profile1, Profile2, Profile3],
    isFlipped: true,
    valueShared: 125,
    valueListener: 1250,
    valueDownloads: 89
  },
  {
    id: 2,
    image: Picture1,
    title: "Echoes of Twilight",
    createdDate: '10 Jun 2025',
    collaborators: [Profile1, Profile2, Profile3],
    isFlipped: false,
    valueShared: 340,
    valueListener: 2100,
    valueDownloads: 156
  },
  {
    id: 3,
    image: Picture2,
    title: "Murmurs of Evening",
    createdDate: '10 Jun 2025',
    collaborators: [Profile1, Profile2, Profile3],
    isFlipped: false,
    valueShared: 87,
    valueListener: 950,
    valueDownloads: 45
  }
];