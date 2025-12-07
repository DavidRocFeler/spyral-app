import { IContact } from "@/types/ui";
import OliviaJhonson from '@/assets/UserOlivia.png'
import JamesArthur from '@/assets/UserMason.png'
import { AgreeBrandIconSvg, CrownIconSvg } from "@/assets/icons";

export const contactsTracking: IContact[] = [
    {
        id: '1',
        name: 'James Arthur',
        avatar: JamesArthur,
        icon: CrownIconSvg // Icono específico
    },
    {
        id: '2', 
        name: 'Olivia Johnson',
        avatar: OliviaJhonson,
        icon: AgreeBrandIconSvg, // Otro icono
        bottom: -12,
    },
    {
        id: '3', 
        name: 'Add artist',
        icon: AgreeBrandIconSvg, // Otro icono
    }
]
