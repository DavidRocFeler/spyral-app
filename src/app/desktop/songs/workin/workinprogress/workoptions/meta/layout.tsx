import { FlexCenter } from "@/components/ui/FlexCenter"
import SlideBarMenuLeft from "@/components/ui/SlideBarMenuLeft"
import { menuItemsWorkInProgress } from "@/mock/sideBarLeft.mock"
import { Box } from "@mui/material"

const MetaLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <FlexCenter 
      position='relative' 
      sx={{
        alignItems:'flex-start',
        width: '100%',
        minHeight: 'calc(100vh - 200px)',
      }}
    >
      <Box 
        sx={{
          minHeight: '100%',
          alignSelf: 'stretch',
        }}
      >
        <SlideBarMenuLeft menuItems={menuItemsWorkInProgress} />
      </Box>
      <Box 
        ml='auto'
        width='100%'
      >
        {children}
      </Box>
    </FlexCenter>
  )
}

export default MetaLayout;