import PublishedSection from "@/components/songs/published/PublishedSection"
import SongNavigationTabs from "@/components/songs/published/SongNavigationTabs"
import WorkInProgressSection from "@/components/songs/published/WorkInProgressSection"
import SlideBarMenuLeft from "@/components/ui/SlideBarMenuLeft"
import { menuItemsWorkInProgress } from "@/mock/sideBarLeft.mock"
import { tabsWorkInProgress } from "@/mock/tabsSong.mock"
import { Box, Typography } from "@mui/material"

const WorkProgressTrack = () => {

  return (
    <Box py={2} px={0}>
        <Typography ml={4} variant="h4"
        fontSize='24px'
        >
            Echoes of Twilight
        </Typography>
        <Box mt={5}>
            <SongNavigationTabs
            tabs={tabsWorkInProgress}
            />
        </Box>

        <Box>
          <SlideBarMenuLeft
          menuItems={menuItemsWorkInProgress}
          />
        </Box>
    </Box>
  )
}

export default WorkProgressTrack;