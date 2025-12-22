import SongNavigationTabs from "@/components/songs/published/SongNavigationTabs"
import WorkInProgressSection from "@/components/songs/published/WorkInProgressSection"
import { Box, Typography } from "@mui/material"

const WorkInProgress = () => {

  return (
    <Box py={2} px={0}>
        <Typography ml={4} variant="h4"
        fontSize='24px'
        >
            Songs
        </Typography>
        <Box mt={5}><SongNavigationTabs/></Box>
        <Box mt={3}>
            <WorkInProgressSection/>
        </Box>
    </Box>
  )
}

export default WorkInProgress