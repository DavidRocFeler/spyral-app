import CoverPicture1 from '@/assets/artistPagePicture1.png'
import CoverPicture2 from '@/assets/artistPagePicture2.png'
import CoverPicture3 from '@/assets/artistPagePicture3.png'
import CoverPicture4 from '@/assets/artistPagePicture3.png'
import { StaticImageData } from 'next/image'

export interface IArtistPageProps {
  id: number
  image: StaticImageData
  alt: string
}

export const pictureArtistPage: IArtistPageProps[] = [
  {
    id: 1,
    image: CoverPicture1,
    alt: 'Cover 1'
  },
  {
    id: 2,
    image: CoverPicture2,
    alt: 'Cover 2'
  },
  {
    id: 3,
    image: CoverPicture3,
    alt: 'Cover 3'
  },
  {
    id: 4,
    image: CoverPicture4,
    alt: 'Cover 4'
  }
]