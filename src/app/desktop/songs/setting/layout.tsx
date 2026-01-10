'use client'
import { Box } from "@mui/material"
import SlideBarMenuLeft from "@/components/ui/SlideBarMenuLeft"
import { songsSettingData } from "@/mock/sideBarLeft.mock"

const SettingLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <Box
      display='flex' 
      minHeight='100vh' 
    >
      {/* Sidebar */}
      <Box 
        flexShrink={0}  
      >
        <SlideBarMenuLeft
          menuItems={songsSettingData}
        />
      </Box>

      <Box 
        width='100%'  
        flexGrow={1} 
      >
        <Box 
          px={4}
          minHeight='100vh' 
          pb={15}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default SettingLayout;