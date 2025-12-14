'use client'
import { ListViewIconSvg, PlusBlackSvg, PlusSvg, SquareIconList } from '@/assets/icons'
import FolderComponent from '@/components/songs/workinprogress/catalogue/Folder'
import { FlexCenter } from '@/components/ui/FlexCenter'
import IconSpan from '@/components/ui/IconSpan'
import PrimaryButton from '@/components/ui/PrimaryButton'
import SearchBarDropDown from '@/components/ui/SearchBarDropDown'
import SecondaryButton from '@/components/ui/SecondaryButton'
import { Box, Grid } from '@mui/material'

const Catalogue = () => {
  return (
    <Box>
        <FlexCenter sx={{
            width: '100%',
            px: 4
        }}>
            <SearchBarDropDown/>
            <FlexCenter mb={2} ml='auto' gap={2.5}>
                <PrimaryButton
                    text='Add new'
                    icon={PlusBlackSvg}
                />
               <FlexCenter>
                    <IconSpan
                    borderRadius='6px'
                    width='40px'
                    height='40px'
                    icon={SquareIconList}
                    bgcolor='background.paper'
                    borderBottomRightRadius='0px'
                    borderTopRightRadius='0px'
                    />
                    <IconSpan
                    borderRadius='6px'
                    width='40px'
                    height='40px'
                    icon={ListViewIconSvg}
                    bgcolor='background.default'
                    borderBottomLeftRadius='0px'
                    borderTopLeftRadius='0px'
                    />
               </FlexCenter>
            </FlexCenter>
        </FlexCenter>
        <Grid 
  container 
  spacing={2}
  bgcolor='red'
>
  {/* Primera fila - 4 columnas */}
  <Grid size={3} sx={{ minWidth: 0 }}>
    <Box sx={{ width: '100%' }}>
      <FolderComponent
        title='Echoes of the Twilight'
        tracks='8 tracks'
      />
    </Box>
  </Grid>
  <Grid size={3} sx={{ minWidth: 0 }}>
    <Box sx={{ width: '100%' }}>
      <FolderComponent
        title='Echoes of the Twilight'
        tracks='8 tracks'
      />
    </Box>
  </Grid>
  <Grid size={3} sx={{ minWidth: 0 }}>
    <Box sx={{ width: '100%' }}>
      <FolderComponent
        title='Echoes of the Twilight'
        tracks='8 tracks'
      />
    </Box>
  </Grid>
  <Grid size={3} sx={{ minWidth: 0 }}>
    <Box sx={{ width: '100%' }}>
      <FolderComponent
        title='Echoes of the Twilight'
        tracks='8 tracks'
      />
    </Box>
  </Grid>
  
  {/* Segunda fila - 4 columnas */}
  <Grid size={3} sx={{ minWidth: 0 }}>
    <Box sx={{ width: '100%' }}>
      <FolderComponent
        title='Echoes of the Twilight'
        tracks='8 tracks'
      />
    </Box>
  </Grid>
  <Grid size={3} sx={{ minWidth: 0 }}>
    <Box sx={{ width: '100%' }}>
      <FolderComponent
        title='Echoes of the Twilight'
        tracks='8 tracks'
      />
    </Box>
  </Grid>
  <Grid size={3} sx={{ minWidth: 0 }}>
    <Box sx={{ width: '100%' }}>
      <FolderComponent
        title='Echoes of the Twilight'
        tracks='8 tracks'
      />
    </Box>
  </Grid>
  <Grid size={3} sx={{ minWidth: 0 }}>
    <Box sx={{ width: '100%' }}>
      <FolderComponent
        title='Echoes of the Twilight'
        tracks='8 tracks'
      />
    </Box>
  </Grid>
</Grid>
    </Box>
  )
}

export default Catalogue