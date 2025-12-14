import SongNavigationTabs from "@/components/songs/published/SongNavigationTabs"
import CardHistory from "@/components/songs/workinprogress/CardHisyory"
import FolderComponent from "@/components/songs/workinprogress/catalogue/Folder"
import { FlexCenter } from "@/components/ui/FlexCenter"
import { FlexColumn } from "@/components/ui/FlexColumn"
import { historyCommentsMock } from "@/mock/cardHistory.mock"
import { tabsWorkInProgress } from "@/mock/tabsSong.mock"
import { Box, Typography } from "@mui/material"

const Catalogue = () => {
  return (
    <Box>
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
              variant="h3"> This track is part of </Typography>
              <FlexCenter
              gap={3}
              >
                <FolderComponent
                tracks="8 tracks"
                title="Echoes of the Twilight"
                />
                <FolderComponent
                tracks="12 tracks"
                title='Summer vibes'
                />
              </FlexCenter>
            </FlexColumn>
        </Box>
    </Box>
  )
}

export default Catalogue