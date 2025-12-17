'use client'
import { EditeIconSvg, ListViewIconSvg, PlusBlackSvg, SquareIconList } from "@/assets/icons"
import CardCatalogueList from "@/components/catalogue/CardCatalogueList"
import FolderComponent from '@/components/ui/Folder'
import { FlexCenter } from "@/components/ui/FlexCenter"
import IconSpan from "@/components/ui/IconSpan"
import PrimaryButton from "@/components/ui/PrimaryButton"
import SlideBarMenuLeft from "@/components/ui/SlideBarMenuLeft"
import { catalogueList } from "@/mock/catalogueListCard.mock"
import { foldersData } from '@/mock/cardFolderCatalogue.mock'
import { catalogueListView } from "@/mock/sideBarLeft.mock"
import { Box, Typography } from "@mui/material"
import { useState } from "react"
import SearchBarDropDown from "@/components/ui/SearchBarDropDown"
import PersonalTracks from "@/components/catalogue/PersonalTracks"
import ZoomedCatalogue from "./zoomed/page"

type ViewMode = 'square' | 'list';

const Catalogue = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('square');
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);

  const handleFolderSelect = (id?: number) => {
    if (id !== undefined) {
      setSelectedFolderId(prevId => prevId === id ? null : id);
    }
  };

  const handleClosePersonalTracks = () => {
    setSelectedFolderId(null);
  };


  return (
    <Box pb={2}>
      {/* Header con Search y Botones */}
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
            {/* Square List Button */}
            <IconSpan
              borderRadius='6px'
              width='40px'
              height='40px'
              icon={SquareIconList}
              bgcolor={viewMode === 'square' ? 'background.paper' : 'background.default'}
              borderBottomRightRadius='0px'
              borderTopRightRadius='0px'
              onClick={() => setViewMode('square')}
            />
            {/* List View Button */}
            <IconSpan
              borderRadius='6px'
              width='40px'
              height='40px'
              icon={ListViewIconSvg}
              bgcolor={viewMode === 'list' ? 'background.paper' : 'background.default'}
              borderBottomLeftRadius='0px'
              borderTopLeftRadius='0px'
              onClick={() => setViewMode('list')}
            />
          </FlexCenter>
        </FlexCenter>
      </FlexCenter>

      {/* Vista Square (Grid de Folders) */}
      {viewMode === 'square' && (
        <Box position="relative">
          <Box 
            sx={{
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
              mt: 2,
              position: 'relative'
            }}
          >
            {foldersData.map((folder) => (
              <Box 
                key={folder.id}
                sx={{
                  position: 'relative',
                  zIndex: selectedFolderId === folder.id ? 5 : 1
                }}
              >
                <FolderComponent
                  id={folder.id}
                  title={folder.title}
                  tracks={folder.tracks}
                  menuButton
                  selectionFolder
                  isSelected={selectedFolderId === folder.id}
                  onSelect={handleFolderSelect}
                />
              </Box>
            ))}
          </Box>

          {/* Overlay y PersonalTracks Modal */}
          {selectedFolderId !== null && (
            <>
              {/* Overlay */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bgcolor="rgba(0, 0, 0, 0.8)"
                zIndex={2}
                onClick={handleClosePersonalTracks}
              />
              
              {/* PersonalTracks Panel */}
              <Box
                position="absolute"
                top={0}
                right={0}
                zIndex={5}
                sx={{
                  animation: 'slideIn 0.3s ease-out',
                  '@keyframes slideIn': {
                    from: {
                      transform: 'translateX(100%)',
                    },
                    to: {
                      transform: 'translateX(0)',
                    },
                  },
                }}
              >
                <PersonalTracks/>
              </Box>
            </>
          )}
        </Box>
      )}

      {/* Vista List (Sidebar + Lista de Cards) */}
      {viewMode === 'list' && (
        <>
          <ZoomedCatalogue/>
        </>
      )}
    </Box>
  )
}

export default Catalogue