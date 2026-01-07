import AddTrackUpload from '@/components/playlist/addTrack/AddTrackUpload'
import PlayListCardSeting from '@/components/playlist/addTrack/PlayListCardSeting'
import { FlexCenter } from '@/components/ui/FlexCenter'
import { Box } from '@mui/material'

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