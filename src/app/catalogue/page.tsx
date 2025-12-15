'use client'
import { ListViewIconSvg, PlusBlackSvg, PlusSvg, SquareIconList } from '@/assets/icons'
import FolderComponent from '@/components/ui/Folder'
import { FlexCenter } from '@/components/ui/FlexCenter'
import IconSpan from '@/components/ui/IconSpan'
import PrimaryButton from '@/components/ui/PrimaryButton'
import SearchBarDropDown from '@/components/ui/SearchBarDropDown'
import SecondaryButton from '@/components/ui/SecondaryButton'
import { foldersData } from '@/mock/cardFolderCatalogue.mock'
import { Box, Grid } from '@mui/material'

const Catalogue = () => {
  return (
    <Box pb={2}>
        <FlexCenter sx={{
            width: '100%',
            px: 4,
            mb: 2
        }}>
            <SearchBarDropDown/>
            <FlexCenter ml='auto' gap={2.5}>
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
  
        <Box 
          sx={{
            width: '100%',
            px: 4,
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',                    // 1 columna en móvil
              sm: 'repeat(2, 1fr)',         // 2 columnas en tablet pequeña
              md: 'repeat(3, 1fr)',         // 3 columnas en tablet mediana
              lg: 'repeat(4, 1fr)',         // 4 columnas en desktop
              xl: 'repeat(4, 1fr)'          // 4 columnas en desktop grande
            },
              gap: 2,
              mt: 2
            }}
          >
            {foldersData.map((folder) => (
            <Box key={folder.id}>
              <FolderComponent
                title={folder.title}
                tracks={folder.tracks}
                menuButton
              />
            </Box>
          ))}
        </Box>
    </Box>
  )
}

export default Catalogue