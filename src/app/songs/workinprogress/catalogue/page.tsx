import SongNavigationTabs from "@/components/songs/published/SongNavigationTabs"
import FolderComponent from "@/components/ui/Folder"
import { FlexCenter } from "@/components/ui/FlexCenter"
import { FlexColumn } from "@/components/ui/FlexColumn"
import { foldersData, foldersSongsCatalogue } from "@/mock/cardFolderCatalogue.mock"
import { tabsWorkInProgress } from "@/mock/tabsSong.mock"
import { Box, Grid, Typography } from "@mui/material"

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

            <FlexColumn mb={3} px={4} mt={4} sx={{
              alignItems: 'flex-start'
            }}>
              <Typography 
              variant="h3"> This track is part of </Typography>
            </FlexColumn>
            <Box 
                sx={{
                width: '100%',
                px: 4,
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',                    // 1 colum in móvil
                  sm: 'repeat(2, 1fr)',         // 2 colum in tablet pequeña
                  md: 'repeat(3, 1fr)',         // 3 colum in tablet mediana
                  lg: 'repeat(4, 1fr)',         // 4 colum in desktop
                  xl: 'repeat(4, 1fr)'          // 4 colum in desktop grande
                },
                gap: 2,
                mt: 2
              }}
            >
              {foldersSongsCatalogue.map((folder) => (
                <Box key={folder.id}>
                  <FolderComponent
                    title={folder.title}
                    tracks={folder.tracks}
                    changeButton
                  />
                </Box>
              ))}
            </Box>
        </Box>
    </Box>
  )
}

export default Catalogue