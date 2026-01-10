import { IContact } from "@/types/ui";
import OliviaJhonson from '@/assets/UserOlivia.png'
import JamesArthur from '@/assets/UserMason.png'
import { AgreeBrandIconSvg, CrownIconSvg } from "@/assets/icons";

export const contactsTracking: IContact[] = [
    {
        id: '1',
        name: 'James Arthur',
        avatar: JamesArthur,
        icon: CrownIconSvg 
    },
    {
        id: '2', 
        name: 'Olivia Johnson',
        avatar: OliviaJhonson,
        icon: AgreeBrandIconSvg, 
        bottom: -12,
    },
    {
        id: '3', 
        name: 'Add artist',
        icon: AgreeBrandIconSvg, 
    }
]
