import FolderComponent from "@/components/ui/Folder"
import { FlexColumn } from "@/components/ui/FlexColumn"
import { foldersSongsCatalogue } from "@/mock/cardFolderCatalogue.mock"
import { Box, Typography } from "@mui/material"

const WorkingProgressCatalogue = () => {
  return (
    <Box>
      <FlexColumn mb={3} px={4} mt={4} sx={{
        alignItems: 'flex-start'
      }}>
        <Typography variant="h3">
          This track is part of
        </Typography>
      </FlexColumn>
      <Box sx={{
        width: '100%',
        px: 4,
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
          xl: 'repeat(4, 1fr)'
        },
        gap: 2,
        mt: 2
      }}>
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
  )
}

export default WorkingProgressCatalogue;