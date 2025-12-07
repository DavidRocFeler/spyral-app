import { CollaborationsBrandIconSvg, DistributeBrandIconSvg, RegisterBrandIconSvg, RevenueBrandIconSvg, UploadBrandIconSvg } from "@/assets/icons";
import { ITrackinButtonProps } from "@/types/ui";

export const trackingButton: ITrackinButtonProps[] = [
    { text: 'Upload', icon: UploadBrandIconSvg },
    { text: 'Collaborate', icon: CollaborationsBrandIconSvg },
    { text: 'Register', icon: RegisterBrandIconSvg},
    { text: 'Distribute', icon: DistributeBrandIconSvg },
    { text: 'Revenue', icon: RevenueBrandIconSvg }
]