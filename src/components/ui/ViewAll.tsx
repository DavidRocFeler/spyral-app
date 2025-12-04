import { ArrowRightWhiteSvg } from "@/assets/icons"
import { Box, Typography } from "@mui/material"

const ViewAll = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
        <Typography variant="h8">
            View all
        </Typography>
       <Box
       display='flex'
       alignItems='center'
       >
         <ArrowRightWhiteSvg/>
       </Box>
    </Box>
  )
}

export default ViewAll