import { IContact } from "@/types/ui";
import EthanCarter from "@/assets/UserAva.png"
import OliviaJhonson from "@/assets/UserLian.png"
import LianSmith from "@/assets/UserLian.png"
import SophiaBrown from '@/assets/UserAva.png'
import MasonDavis from "@/assets/UserMason.png"
import AvaWilson from "@/assets/UserAva.png"

  
  // Mock data - ajusta las rutas según tu estructura
 export const contactsMock: IContact[] = [
    {
      id: '1',
      name: 'Ethan Carter',
      email: 'ethan.carter@example.com',
      avatar: EthanCarter,
    },
    {
      id: '2',
      name: 'Olivia Johnson',
      email: 'olivia.johnson@example.com',
      avatar: OliviaJhonson,
      bottom: -12
    },
    {
      id: '3',
      name: 'Liam Smith',
      email: 'liam.smith@example.com',
      avatar: LianSmith,
    },
    {
      id: '4',
      name: 'Sophia Brown',
      email: 'sophia.brown@example.com',
      avatar: SophiaBrown,
    },
    {
      id: '5',
      name: 'Mason Davis',
      email: 'mason.davis@example.com',
      avatar: MasonDavis,
    },
    {
      id: '6',
      name: 'Ava Wilson',
      email: 'ava.wilson@example.com',
      avatar: AvaWilson,
    },
  ];