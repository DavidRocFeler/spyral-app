import { Box, Typography } from "@mui/material"
import Image from "next/image"
import coverImage from "@/assets/jamesArthurTrack.png"
import { collaboratorsTrack } from "@/mock/collaboratorTrack.mock"
import CollaboratorTrack from "../CollaboratorTrack"
import { FlexCenter } from "@/components/ui/FlexCenter"
import TrackingPublished from "./TrackingPublished"

interface ICardPublished {
    trackingStatus: number;
    bgcolor?: string;
}

const CardPublished = ({
    trackingStatus,
    bgcolor
}: ICardPublished) => {
  return (
    <Box
        position='relative'
        sx={{
        bgcolor: bgcolor,
        borderRadius: '32px',
        px: 4,
        width: '100',
        mx: 'auto',
        display: 'flex',
        alignItems: 'center',
        height: '96px',
        gap: 12
        }}
    >
        {/* Cover + Artist */}
        <FlexCenter gap={5}>
            <Box
            sx={{
                position: 'relative',
                width: 64,
                height: 64,
                flexShrink: 0,
                borderRadius: '12px',
                overflow: 'hidden'
            }}
            >
            <Image
                src={coverImage}
                alt='cover'
                width={64}
                height={64}
                style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%'
                }}
            />
            </Box>


            <Box height='60px'>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
                    <Typography variant="h3">
                    title
                    </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Typography variant="h4">
                    artist
                    </Typography>
                </Box>
            </Box>
        </FlexCenter>

        {/* Collaborators */}
        <Box position='relative' sx={{ display: 'flex', flexDirection:'column', alignItems: 'start', gap: 0, height:'53px' }}>
            <Typography variant="h8" color="text.secondary">
                Collaborators
            </Typography>
            <Box position='absolute' bottom={0} display='flex' gap={1} alignItems='center'>
                {collaboratorsTrack.length > 0 ? (
                    <CollaboratorTrack 
                    collaborators={collaboratorsTrack} 
                    width={24}
                    height={24}
                    />
                    ) : (
                    <Typography variant="body2" color="text.disabled">
                     No collaborators
                    </Typography>
                )}
            </Box>
        </Box>

        <FlexCenter ml='auto'>
            <TrackingPublished
            trackingStatus={trackingStatus}
            />
        </FlexCenter>
    </Box>
  )
}

export default CardPublished