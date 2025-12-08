import Demo from "@/components/songs/Demo"
import ListButtonsTracking from "@/components/songs/ListButtonsTracking"
import Tracking from "@/components/songs/Tracking"
import { Box } from "@mui/material"

const SongsCollaborate = () => {
  return (
    <Box display="flex" flexDirection='column' gap={2} mb={4}>
        <ListButtonsTracking trackingStatus={2} />
        <Demo/>
    </Box>
  )
}

export default SongsCollaborate