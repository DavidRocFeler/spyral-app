import { PlusBrandIconSvg, PlusYellowSvg } from '@/assets/icons'
import { IUploadBoxProps } from '@/types/ui'
import { Box, Typography } from '@mui/material'

const UploadBox = ({
    width = '600px',
    height = '80px',
    text = 'Upload track (Supported formats include MP3, WAV, and FLAC)',
    bgcolor = 'primary.main',
    borderColor = 'grey.900',
    icon = PlusBrandIconSvg
}: IUploadBoxProps) => {
    const IconSvg = icon
  return (
    <Box
        sx={{
        bgcolor: bgcolor,
        borderRadius: '12px',
        px: 6,
        width: width,
        display: 'flex',
        justifyContent: 'center',
        height: height,
        alignItems: 'center',
        border: '2px dashed',
        borderColor: borderColor,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        '&:hover': {
            borderColor: 'secondary.main',
        },
    }}
    >
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
        <Box
            sx={{
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}
        >
            <IconSvg/>
        </Box>
        </Box>

        <Box
        display='flex'
        flexDirection='column'
        >
        <Typography
            variant="h10"
            color= 'text.secondary'
        >
            {text}
        </Typography>
        </Box>
    </Box>
  )
}

export default UploadBox