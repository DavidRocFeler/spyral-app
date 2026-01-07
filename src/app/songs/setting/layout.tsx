'use client'
import { Box } from "@mui/material"
import SlideBarMenuLeft from "@/components/ui/SlideBarMenuLeft"
import { songsSettingData } from "@/mock/sideBarLeft.mock"

export default function SettingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box
      display='flex' 
      minHeight='100vh' 
    >
      {/* Sidebar */}
      <Box 
        width='21%'  
        flexShrink={0}  
      >
        <SlideBarMenuLeft
          menuItems={songsSettingData}
        />
      </Box>

      <Box 
        width='75%'  
        flexGrow={1} 
      >
        <Box 
          pr={4}
          minHeight='100vh' 
          pb={15}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
}