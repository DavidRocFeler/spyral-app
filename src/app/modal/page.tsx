'use client';

import { useState } from 'react';
import { Button, Box } from '@mui/material';
import CardSharePlayList from '@/components/home/user-panel/CardSharePlayList';

const ModalPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ p: 4 }}>
      <Button 
        variant="contained" 
        onClick={() => setOpen(true)}
        sx={{ bgcolor: 'secondary.main' }}
      >
        Abrir Modal Share Playlist
      </Button>
      
      <CardSharePlayList 
        open={open} 
        onClose={() => setOpen(false)} 
      />
    </Box>
  );
}

export default ModalPage;