// components/Modals/AddNewModal.tsx
'use client';
import { Box, Typography } from '@mui/material';
import { useNavigationStore } from '@/store/navigationStore';
import { PlusYellowSvg } from '@/assets/icons';
import { useEffect } from 'react';
import UploadBoxMain from '../ui/UploadBoxMain';

const AddNewItem = () => {
  const { isModalOpen, closeModal } = useNavigationStore();

  useEffect(() => {
    if (isModalOpen) {
      // Deshabilitar scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Restaurar scroll
      document.body.style.overflow = 'unset';
    }

    // Cleanup: restaurar cuando el componente se desmonte
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;

  return (
    <Box
      onClick={closeModal}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          width: '55%',
          bgcolor: 'background.default',
          borderRadius: '40px',
          padding: 4,
          pb: 1,
          outline: 'none',
          position: 'relative',
        }}
      >
        <Typography
          variant="h3"
          textAlign='center'
        >
          Add Image Or Video
        </Typography>

        {/* Upload Area */}
        <Box mt={4}>
          <UploadBoxMain
          textSecondary=''
          textLast=''
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AddNewItem;