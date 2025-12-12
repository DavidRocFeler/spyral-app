import PublishedSection from "@/components/songs/published/PublishedSection"
import SongNavigationTabs from "@/components/songs/published/SongNavigationTabs"
import { Box, Typography } from "@mui/material"

const Published = () => {

  return (
    <Box py={2} px={0}>
        <Typography ml={4} variant="h4"
        fontSize='24px'
        >
            Songs
        </Typography>
        <Box mt={5}><SongNavigationTabs/></Box>
        <Box mt={3}>
          <PublishedSection/>
        </Box>
    </Box>
  )
}

export default Published