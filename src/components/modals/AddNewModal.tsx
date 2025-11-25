// components/Modals/AddNewModal.tsx
'use client';

import { Box, Typography, Modal } from '@mui/material';
import { useNavigationStore } from '@/store/navigationStore';
import { PlusYellowSvg } from '@/assets/icons';

const AddNewModal = () => {
  const { isModalOpen, closeModal } = useNavigationStore();

  return (
    <Modal
      open={isModalOpen}
      onClose={closeModal}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: '90%',
          maxWidth: '400px',
          bgcolor: 'background.paper',
          borderRadius: '16px',
          padding: 4,
          outline: 'none',
          position: 'relative',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: '18px',
            fontWeight: 600,
            mb: 3,
            textAlign: 'center',
          }}
        >
          Add Image Or Video
        </Typography>

        {/* Upload Area */}
        <Box
          sx={{
            bgcolor: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '12px',
            padding: 6,
            border: '2px dashed rgba(255, 255, 255, 0.2)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            textAlign: 'center',
            '&:hover': {
              borderColor: 'rgba(226, 252, 11, 0.5)',
              bgcolor: 'rgba(0, 0, 0, 0.4)',
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

          <Typography
            variant="body1"
            sx={{
              fontSize: '14px',
              color: 'text.secondary',
            }}
          >
            Drag and drop files here
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddNewModal;