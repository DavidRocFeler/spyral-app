import MetaSection from "@/components/songs/workinprogress/MetaSection"
import { FlexCenter } from "@/components/ui/FlexCenter"
import SlideBarMenuLeft from "@/components/ui/SlideBarMenuLeft"
import { menuItemsWorkInProgress } from "@/mock/sideBarLeft.mock"
import { Box } from "@mui/material"

const WorkProgressTrackMeta = () => {
  return (
    <FlexCenter position='relative' sx={{
      alignItems:'flex-start',
      width: '100%',
    }}>
      <Box left={0} position='absolute' width='17.94%' height='100%'>
        <SlideBarMenuLeft menuItems={menuItemsWorkInProgress} />
      </Box>
      <Box ml='auto' width='83%'>
        <MetaSection />
      </Box>
    </FlexCenter>
  )
}

export default WorkProgressTrackMeta;