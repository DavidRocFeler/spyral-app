import { EditeIconSvg, SettingIconSvg } from '@/assets/icons'
import AddTrackUpload from '@/components/playlist/addTrack/AddTrackUpload'
import PlayListCardSeting from '@/components/playlist/addTrack/PlayListCardSeting'
import CardPlayAddTrack from '@/components/playlist/CardPlayAddTrack'
import CardPublished from '@/components/songs/published/CardPublished'
import { FlexCenter } from '@/components/ui/FlexCenter'
import { FlexColumn } from '@/components/ui/FlexColumn'
import IconSpan from '@/components/ui/IconSpan'
import { Box, Typography } from '@mui/material'

const AddTrack = () => {
  return (
    <Box px={4}>
       <FlexCenter
       gap={3}
       sx={{
        width: '100%',
        alignItems: 'flex-start'
       }}
       >
        <PlayListCardSeting/>
        <AddTrackUpload/>
       </FlexCenter>
    </Box>
  )
}

export default AddTrack