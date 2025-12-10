// FilesPanel.tsx
'use client'
import { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import SelectCustom from '@/components/ui/SelectCustom';
import { PlusSvg } from '@/assets/icons';
import { FlexCenter } from '@/components/ui/FlexCenter';
import TextButton from '@/components/ui/TextButton';
import NumberCounter from '@/components/ui/NumberCounter';
import BoxTextField from '@/components/ui/BoxTextField';
import CardFileCollaborate from './CardFileCollaborate';
import { ICollaboratorSongFile } from '@/types/song';

const mockFileSelect = ['Acoustic drums (12 files)', 'Channel', 'Electric Guitar', 'Bass Line'];

const FilesPanel = ({fileItem}: ICollaboratorSongFile) => {
  const [selectedChannel, setSelectedChannel] = useState(mockFileSelect[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calcular el total de páginas
  const totalPages = Math.ceil(fileItem.length / itemsPerPage);
  
  // Obtener los archivos para la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFiles = fileItem.slice(startIndex, endIndex);

  // Calcular filas necesarias basado en la cantidad de archivos en la página actual
  const rowsNeeded = Math.ceil(currentFiles.length / 2);

  // Handlers para la paginación
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Box sx={{
      bgcolor: 'background.default', 
      borderRadius: '24px', 
      px: 2.5, 
      pt: 3,
      pb: 2.5,
      height: '100%' 
    }}>
      <Typography variant='h3' mb={2}>
        Files
      </Typography>

      <SelectCustom
        options={mockFileSelect}
        value={selectedChannel}
        onChange={setSelectedChannel}
      />
      
      {/* Grid container con 2 columnas */}
      <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
        {currentFiles.map((file) => (
          <Grid size={6} key={file.id}>
            <CardFileCollaborate 
              file={file}
            />
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 2,
        mt: rowsNeeded > 3 ? 0 : 2
      }}>
        <Typography variant='h9' color='text.secondary' 
          sx={{
            cursor: 'default'
          }}
        >
          Viewing {startIndex + 1}-{Math.min(endIndex, fileItem.length)} of {fileItem.length} files
        </Typography>
        <FlexCenter gap={1.5}>
          <TextButton
            text='Back'
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          />
          
          {/* Renderizar los números de página */}
          {Array.from({ length: totalPages }, (_, index) => (
            <NumberCounter
              key={index + 1}
              counter={index + 1}
              isActive={currentPage === index + 1}
              onClick={() => handlePageClick(index + 1)}
            />
          ))}
          
          <TextButton
            text='Next'
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          />
        </FlexCenter>
      </Box>
      
      <Typography variant='h8' mb={1}>
        Share file
      </Typography>

      <BoxTextField
        IconSvg={PlusSvg}
      />
    </Box>
  );
};

export default FilesPanel;