// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import LandingImage from '@/assets/lading.png'

export default function LandingPage() {
  return (
    <>
     <Link 
     href='access'
     >
     <Image
     src={LandingImage}
     alt='LandingPage'
     fill
     style={{
        objectFit: 'contain'
     }}
     />
     </Link>
    </>
  );
}