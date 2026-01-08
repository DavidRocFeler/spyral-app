import { Box, Typography } from "@mui/material"
import { FlexColumn } from "@/components/ui/FlexColumn"

const AccProm = () => {
  return (
    <Box pr={4}>
      <FlexColumn 
        mb={0} 
        gap={4}
        sx={{
          width: '100%',
          alignItems: 'flex-start'
        }}
      >
        <Typography variant="h3">
          Access & Promotions
        </Typography>
        <Typography variant="h8">Supervisor access</Typography>
        <Typography variant="h8">Primary catalogue</Typography>
        <Typography variant="h8">Access settings</Typography>
      </FlexColumn>
    </Box>
  )
}

export default AccProm