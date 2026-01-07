import SongNavigationTabs from "@/components/songs/published/SongNavigationTabs"
import CardHistory from "@/components/songs/workinprogress/CardHisyory"
import { FlexColumn } from "@/components/ui/FlexColumn"
import { historyCommentsMock } from "@/mock/cardHistory.mock"
import { tabsWorkInProgress } from "@/mock/tabsSong.mock"
import { Box, Typography } from "@mui/material"

const WorkProgressHistory = () => {

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

        <FlexColumn px={4} pt={4} sx={{
          alignItems: 'flex-start'
        }}>
          <Typography 
          mb={3.5}
          variant="h3">History</Typography>
          <CardHistory
          cardCommentsData={historyCommentsMock}
          />
        </FlexColumn>
    </Box>
  )
}

export default WorkProgressHistory;