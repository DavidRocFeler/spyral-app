import { CollaborationsBrandIconSvg, DistributeBrandIconSvg, RegisterBrandIconSvg, RevenueBrandIconSvg, UploadBrandIconSvg } from "@/assets/icons";
import { ITrackinButtonProps } from "@/types/ui";

export const trackingButton: ITrackinButtonProps[] = [
    { text: 'Upload', icon: UploadBrandIconSvg, href: '/songs' },
    { text: 'Collaborate', icon: CollaborationsBrandIconSvg, href: '/songs/collaborate' },
    { text: 'Register', icon: RegisterBrandIconSvg, href: '/songs/register' },
    { text: 'Distribute', icon: DistributeBrandIconSvg, href: '/songs/distribute' },
    { text: 'Revenue', icon: RevenueBrandIconSvg, href: '/songs/revenue' }
]