// CollaborationWindow.tsx
import { ArrowDownSvg } from '@/assets/icons';
import BoxTextField from '@/components/ui/BoxTextField';
import { Box, Typography, TextField, Select, MenuItem, Button } from '@mui/material';

const mockVersionOptions = ['Select version', 'Version 1.0', 'Version 2.0', 'Version 3.0'];

const CollaborationWindow = () => {
  return (
    <Box
    sx={{
      bgcolor: 'background.default', 
      borderRadius: '24px', 
      px: 2.5, 
      py: 3,
      height: '100%' 
    }}
    >
      <Typography variant='h3' mb={2}>
        Collaboration Window
      </Typography>
      
      <Box
        sx={{
          typography: 'h7',
          color: 'text.secondary',
          lineHeight: '1.2rem'
        }}
      >
        No comments have been added yet. Share your version and start receiving feedback!
      </Box>
      
      <BoxTextField
      boxmt={2.5}
      flexDirection='row-reverse'
      IconSvg={ArrowDownSvg}
      />
    </Box>
  );
};

export default CollaborationWindow;