import { PendingSvg, RegisterIconGoldSvg } from "@/assets/icons"
import PlayerRegisterMinimized from "@/components/songs/register/PlayerRegisterMinimized"
import { FlexCenter } from "@/components/ui/FlexCenter"
import SlideBarMenuLeft from "@/components/ui/SlideBarMenuLeft"
import TitleIcon from "@/components/ui/TitleIcon"
import { menuItemsRegister } from "@/mock/sideBarLeft.mock"
import { Box, Typography } from "@mui/material"

const RegisterWithSidebarLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <Box>
      <Box mt={2} mb={3}>
        <TitleIcon
          icon={RegisterIconGoldSvg}
          text='Register'
        /> 
      </Box>

      <FlexCenter 
      bgcolor='grey.900'
      gap={1}
      p={1}
      mb={4}
      borderRadius='9px'
      >
        <Typography variant="h8"> Status: </Typography>
        <Typography variant="h8" color="secondary.main"> Pending</Typography>
        <PendingSvg/>
      </FlexCenter>
      
      <PlayerRegisterMinimized/>
      
      <Box sx={{ 
        display: 'flex', 
        pt: 0,
        borderTop: 'solid 1px',
        borderColor: 'grey.900',
        position: 'relative'
      }}>
        {/* left Sidebar */}
        <Box 
          height='100%'
          position='absolute'
        >
          <SlideBarMenuLeft
            menuItems={menuItemsRegister}
          />
        </Box>
        
        <Box sx={{ 
          py: 3,
          pl: 3,
          width: '81%',
          ml: 'auto'
        }}>
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default RegisterWithSidebarLayout;