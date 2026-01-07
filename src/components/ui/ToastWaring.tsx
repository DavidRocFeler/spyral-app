'use client'
import { useState } from 'react';
import { warnings } from '@/mock/warnings.mock'
import { IToastWarningProps } from '@/types/warings';
import { Box, Typography, Button } from '@mui/material';
import ModalAddContact from '../playlist/ModalAddContact';

const ToastWarning = ({ id }: IToastWarningProps) => {
  const [openModal, setOpenModal] = useState(false);
  const warning = warnings.find((item) => item.id === id);

  if (!warning) return null;

  const IconComponent = warning.icon;
  const ButtonIcon = warning.button?.icon;

  const shouldShowModal = id === 'no-contact' || id === 'no-favorite';

  const handleButtonClick = () => {
    if (shouldShowModal) {
      setOpenModal(true);
    } else if (warning.button?.action) {
      warning.button.action(); 
    }
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'primary.main',
          px: 1,
          width: '320px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            maxWidth: '400px',
            textAlign: 'center'
          }}
        >
          {/* Icon */}
          <Box sx={{ mb: 1 }}>
            <IconComponent />
          </Box>

          {/* Title */}
          <Typography variant="h4">
            {warning.title}
          </Typography>

          {/* Label */}
          <Typography variant="body2" color="text.secondary">
            {warning.label}
          </Typography>

          {/* Button (if exists) */}
          {warning.button && (
            <Button
              disableRipple
              sx={{ mt: 3 }}
              variant='primaryButton'
              onClick={handleButtonClick}
            >
              <Typography 
                sx={{ textTransform: 'none' }} 
                variant="body1" 
                color="primary.main"
              >
                {warning.button.span}
              </Typography>
              {ButtonIcon && <ButtonIcon />}
            </Button>
          )}
        </Box>
      </Box>

      {shouldShowModal && (
        <ModalAddContact
          open={openModal} 
          onClose={() => setOpenModal(false)} 
        />
      )}
    </>
  );
};

export default ToastWarning;