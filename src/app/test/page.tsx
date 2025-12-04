'use client';

import React, { useState } from 'react';
import { Button } from '@mui/material';
import CardShareProgress from '@/components/home/user-panel/CardShareProgress';

export default function TestPage() {
  const [open, setOpen] = useState(true); // empieza abierto para que lo veas inmediatamente

  return (
    <div>
      <Button onClick={() => setOpen(true)}>
        Abrir Modal
      </Button>
      
      <CardShareProgress
        open={open} 
        onClose={() => setOpen(false)} 
      />
    </div>
  );
}