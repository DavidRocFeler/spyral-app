import { Box, Typography } from "@mui/material"
import { FlexColumn } from "@/components/ui/FlexColumn"
import { FlexCenter } from "@/components/ui/FlexCenter"
import PrimaryButton from "@/components/ui/PrimaryButton"
import CheckRadius from "@/components/ui/CheckRadius"

const Notifications = () => {
  return (
    <Box pr={4}>
      <FlexColumn 
        mb={3} 
        gap={3.5}
        sx={{
          width: '100%',
          alignItems: 'flex-start'
        }}
      >
        <Typography variant="h3">
          Notifications
        </Typography>
      </FlexColumn>

      <Typography variant="h7" color='text.secondary'>
        Choose your notification
      </Typography>
      
      <FlexCenter gap={1} mt={2}>
        <CheckRadius text="In App" />
        <CheckRadius text="In App and Email" />
        <CheckRadius text="I don't want any notifications" />
      </FlexCenter>

      <Box mt={4}>
        <PrimaryButton text="Save setting" />
      </Box>
    </Box>
  )
}

export default Notifications