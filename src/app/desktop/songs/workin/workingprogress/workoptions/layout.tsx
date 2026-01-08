import SongNavigationTabs from "@/components/songs/published/SongNavigationTabs"
import { tabsWorkInProgress } from "@/mock/tabsSong.mock"
import { Box, Typography } from "@mui/material"

const WorkInProgressLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box py={2} px={0}>
      <Typography ml={4} variant="h4" fontSize='24px'>
        Echoes of Twilight
      </Typography>
      <Box mt={5}>
        <SongNavigationTabs tabs={tabsWorkInProgress} />
      </Box>
      {children}
    </Box>
  )
}

export default WorkInProgressLayout