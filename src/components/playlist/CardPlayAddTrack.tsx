import { Box, Typography } from "@mui/material"
import Image from "next/image"
import coverImage from "@/assets/jamesArthurTrack.png"
import { collaboratorsTrack } from "@/mock/collaboratorTrack.mock"
import { FlexCenter } from "@/components/ui/FlexCenter"
import CollaboratorTrack from "@/components/songs/CollaboratorTrack"
import TrackingPublished from "@/components/songs/published/TrackingPublished"
import SecondaryButton from "../ui/SecondaryButton"
import { FixedIconSvg, LittleSpanSvg, PlayIconSvg, PlaySmallIconSvg, TrashWhiteIconSvg } from "@/assets/icons"
import IconSpan from "../ui/IconSpan"
import { FlexColumn } from "../ui/FlexColumn"

interface ICardPublished {
    trackingStatus: number;
    bgcolor?: string;
}

const CardPlayAddTrack = ({
    bgcolor
}: ICardPublished) => {
  return (
    <Box
        position='relative'
        sx={{
        bgcolor: bgcolor,
        borderRadius: '32px',
        px: 2,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: '80px',
        gap: 12
        }}
    >
        {/* Cover + Artist */}
        <FlexCenter gap={2}>
            <Box
            sx={{
                position: 'relative',
                width: 56,
                height: 56,
                flexShrink: 0,
                borderRadius: '12px',
                overflow: 'hidden'
            }}
            >
            <Image
                src={coverImage}
                alt='cover'
                width={56}
                height={56}
                style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%'
                }}
            />
            </Box>


            <FlexColumn gap={1.8}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
                    <Typography variant="h8">
                    title
                    </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
                    <Typography variant="h9" color='text.secondary' >
                    artist
                    </Typography>
                </Box>
            </FlexColumn>
        </FlexCenter>

        <FlexCenter ml='auto' gap={2}>
            <SecondaryButton
            text="Play"
            icon={PlaySmallIconSvg}
            height="32px"
            />

            <IconSpan
            bgcolor="brand.trash"
            icon={TrashWhiteIconSvg}
            />

            <IconSpan
            icon={FixedIconSvg}
            />

            <IconSpan
            icon={LittleSpanSvg}
            />
        </FlexCenter>
    </Box>
  )
}

export default CardPlayAddTrack;