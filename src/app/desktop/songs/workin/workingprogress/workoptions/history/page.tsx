import CardHistory from "@/components/songs/workinprogress/CardHisyory"
import { FlexColumn } from "@/components/ui/FlexColumn"
import { historyCommentsMock } from "@/mock/cardHistory.mock"
import { Typography } from "@mui/material"

const WorkProgressHistory = () => {
  return (
    <FlexColumn px={4} pt={4} sx={{
      alignItems: 'flex-start'
    }}>
      <Typography mb={3.5} variant="h3">
        History
      </Typography>
      <CardHistory cardCommentsData={historyCommentsMock} />
    </FlexColumn>
  )
}

export default WorkProgressHistory;