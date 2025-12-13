import SongNavigationTabs from "@/components/songs/published/SongNavigationTabs"
import MetaSection from "@/components/songs/workinprogress/MetaSection"
import { FlexCenter } from "@/components/ui/FlexCenter"
import SlideBarMenuLeft from "@/components/ui/SlideBarMenuLeft"
import { menuItemsWorkInProgress } from "@/mock/sideBarLeft.mock"
import { tabsWorkInProgress } from "@/mock/tabsSong.mock"
import { Box, Typography } from "@mui/material"

const WorkProgressTrackMeta = () => {

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

        <FlexCenter position='relative' sx={{
          alignItems:'flex-start',
          width: '100%',
        }}>
          <Box left={0} position='absolute' width='17.94%' height='100%'>
            <SlideBarMenuLeft
            menuItems={menuItemsWorkInProgress}
            />
          </Box>
          <Box ml='auto' width='83%'>
            <MetaSection/>
          </Box>
        </FlexCenter>
    </Box>
  )
}

export default WorkProgressTrackMeta;