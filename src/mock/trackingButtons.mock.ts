import { CollaborationsBrandIconSvg, DistributeBrandIconSvg, RegisterBrandIconSvg, RevenueBrandIconSvg, UploadBrandIconSvg } from "@/assets/icons";
import { ITrackinButtonProps } from "@/types/ui";

export const trackingButton: ITrackinButtonProps[] = [
    { text: 'Upload', icon: UploadBrandIconSvg, href: '/desktop/songs' },
    { text: 'Collaborate', icon: CollaborationsBrandIconSvg, href: '/desktop/songs/collaborate' },
    { text: 'Register', icon: RegisterBrandIconSvg, href: '/desktop/songs/register' },
    { text: 'Distribute', icon: DistributeBrandIconSvg, href: '/desktop/songs/distribute' },
    { text: 'Revenue', icon: RevenueBrandIconSvg, href: '/desktop/songs/revenue' }
]