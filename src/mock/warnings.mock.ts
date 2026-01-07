import { FileEmptySvg, NoContactsSvg, NoFavoritesSvg, NoInternetSvg, PlayBackFailedSvg, PlayListEmptySvg, PlusBlackSvg, SessionExpiredSvg } from "@/assets/icons";
import { IWaringsProps } from "@/types/warings";

export const warnings: IWaringsProps[] = [
    {
        id: 'no-internet', 
        icon: NoInternetSvg, 
        title: 'No Internet Connection', 
        label: "You're offline right now. Please check your internet connection and try again" 
    },
    {
        id: 'playlist-empty', 
        icon: PlayListEmptySvg, 
        title: 'Nothing Here Yet', 
        label: "Your playlist is empty. Add your favorite songs and start building your vibe.",
        button: {
            span: 'Create playlist',
            icon: PlusBlackSvg
        }
    },
    {
        id: 'no-file', 
        icon: FileEmptySvg, 
        title: 'Nothing Here Yet', 
        label: "You don’t have any files here yet. Upload your music or start creating to fill this space.",
        button: {
            span: 'Add new file',
            icon: PlusBlackSvg
        }
    },
    {
        id: 'no-contact', 
        icon: NoContactsSvg, 
        title: 'No Contacts Yet', 
        label: "You haven’t connected with anyone. Follow your favorite artists or add friends to share your music moments.",
        button: {
            span: 'Add contact',
            icon: PlusBlackSvg
        }
    },
    {
        id: 'no-favorite', 
        icon: NoFavoritesSvg, 
        title: 'No Contacts Yet', 
        label: "You haven’t starred any tracks yet. Tap the star to save the songs you love and find them here anytime.",
        button: {
            span: 'Add contact',
            icon: PlusBlackSvg
        }
    },
    {
        id: 'session-expired', 
        icon: SessionExpiredSvg, 
        title: 'Session expired', 
        label: "Your session has expired for security reasons. Please sign in again to continue listening.",
        button: {
            span: 'Sign in',
        }
    },
    {
        id: 'playback-failed', 
        icon: PlayBackFailedSvg, 
        title: 'Playback Failed', 
        label: "We couldn’t play this track. Try again or skip to the next one.",
        button: {
            span: 'Try again',
        }
    },
]