'use client'
import FolderComponent from '@/components/ui/Folder'
import { foldersData } from '@/mock/cardFolderCatalogue.mock'
import { Box } from "@mui/material"
import { useState } from "react"
import PersonalTracks from "@/components/catalogue/PersonalTracks"

const Catalogue = () => {
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
          
          <Box
            position="absolute"
            top={0}
            right={0}
            zIndex={5}
            sx={{
              animation: 'slideIn 0.3s ease-out',
              '@keyframes slideIn': {
                from: { transform: 'translateX(100%)' },
                to: { transform: 'translateX(0)' },
              },
            }}
          >
            <PersonalTracks/>
          </Box>
        </>
      )}
    </Box>
  )
}

export default Catalogue