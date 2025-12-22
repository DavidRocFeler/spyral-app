'use client';
import { useRef } from 'react';
import { PlusYellowSvg } from '@/assets/icons';
import { Box, Typography } from '@mui/material';

export interface IUploadBoxMain {
  width?: string;
  textMain?: string;
  textSecondary?: string;
  textLast?: string;
  acceptedFormats?: string;
  onFileUpload?: (file: File) => void; // 👈 Callback opcional
}

const UploadBoxMain = ({
  width = 'auto',
  textMain = "Drag and drop files here or",
  textSecondary = 'Browse',
  textLast = 'Supported formats include: MP3, WAV, and FLAC.',
  acceptedFormats = '.mp3,.wav,.flac',
  onFileUpload, // 👈 Opcional
}: IUploadBoxMain) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleBoxClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onFileUpload) {
      onFileUpload(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && onFileUpload) {
      const validExtensions = acceptedFormats.split(',').map(ext => ext.replace('.', '').toLowerCase());
      const extension = file.name.split('.').pop()?.toLowerCase();
      
      if (extension && validExtensions.includes(extension)) {
        onFileUpload(file);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Hidden Input */}
      <input
        ref={inputRef}
        type="file"
        accept={acceptedFormats}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />

      {/* Upload Box - ESTILOS INTACTOS */}
      <Box
        mb={3}
        onClick={handleBoxClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        sx={{
          bgcolor: 'background.paper',
          borderRadius: 6,
          padding: 6,
          width: width,
          border: '2px dashed',
          borderColor: 'grey.900',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          '&:hover': {
            borderColor: 'secondary.main',
            bgcolor: 'primary.main',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 2,
          }}
        >
          <Box
            sx={{
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <PlusYellowSvg />
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          sx={{
            width: 'fit-content',
            mx: 'auto',
          }}
        >
          <Typography textAlign="center" variant="h10" color="text.secondary">
            {textMain}{' '}
            <Box
              component="span"
              sx={{
                color: 'secondary.main',
                fontWeight: 450,
              }}
            >
              {textSecondary}
            </Box>
          </Typography>

          <Typography variant="h10" color="text.secondary">
            {textLast}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default UploadBoxMain;