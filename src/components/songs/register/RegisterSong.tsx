'use client';

import { useState } from 'react';
import { 
  Box, 
} from '@mui/material';
import FormRegisterSong from './FormRegisterSong';
import SlideBarMenuLeft from '@/components/ui/SlideBarMenuLeft';
import { menuItemsRegister } from '@/mock/sideBarLeft.mock';

const RegisterSong = () => {

  return (
    <Box sx={{ 
      display: 'flex', 
      pt: 0,
      borderTop: 'solid 1px',
      borderColor: 'grey.900'
    }}>
      {/* Sidebar izquierdo */}
      <SlideBarMenuLeft
      menuItems={menuItemsRegister}
      />

      {/* Formulario principal */}
      <Box sx={{ 
        flex: 1, 
        pt: 3,
        px: 3,
      }}>
        <FormRegisterSong/>
      </Box>
    </Box>
  );
};

export default RegisterSong;