'use client';
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
      borderColor: 'grey.900',
      position: 'relative'
    }}>
      {/* Sidebar izquierdo */}
      <Box height='100%'
      position='absolute'
      bgcolor='red'
      >
      <SlideBarMenuLeft
      menuItems={menuItemsRegister}
      />
      </Box>

      {/* Formulario principal */}
      <Box sx={{ 
        pt: 3,
        pl: 3,
        width: '81%',
        ml: 'auto'
      }}>
        <FormRegisterSong/>
      </Box>
    </Box>
  );
};

export default RegisterSong;