import { EditeIconSvg, SettingIconSvg } from '@/assets/icons'
import { FlexCenter } from '@/components/ui/FlexCenter'
import { FlexColumn } from '@/components/ui/FlexColumn'
import IconSpan from '@/components/ui/IconSpan'
import { Box, Typography } from '@mui/material'
import CardPlayAddTrack from '../CardPlayAddTrack'

const PlayListCardSeting = () => {
  return (
    <Box
    bgcolor='background.default'
    borderRadius='24px'
    p={2}
    sx={{
      width: '50%',
    }}
   >
      <FlexCenter mb={4} gap={2}
      sx={{
        width: '100%'
      }}
      >
        <FlexCenter gap={2}>
          <Typography
          width='fit-content'
          variant='h3'
          >
              Murmurs of Evening
          </Typography>
          <IconSpan
          icon={EditeIconSvg}
          />
        </FlexCenter>

        <Box ml='auto'>
          <IconSpan
          icon={SettingIconSvg}
          />
        </Box>
      </FlexCenter>

      <FlexColumn 
      gap={2}
      sx={{
        width: '100%'
      }}
      >
        <CardPlayAddTrack
            trackingStatus={2}
            bgcolor='grey.900'
        />
          <CardPlayAddTrack
            trackingStatus={2}
            bgcolor='grey.900'
        />
          <CardPlayAddTrack
            trackingStatus={2}
            bgcolor='grey.900'
        />
      </FlexColumn>
   </Box>
  )
}

export default PlayListCardSeting