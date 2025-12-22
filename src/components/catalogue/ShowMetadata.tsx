'use client'
import { useState } from 'react';
import { Box, Typography, Switch, ThemeProvider } from '@mui/material';
import { FlexColumn } from '../ui/FlexColumn';

interface MetadataItem {
  id: string;
  label: string;
  enabled: boolean;
}

const ShowMetadata = () => {
  const [items, setItems] = useState<MetadataItem[]>([
    { id: 'title', label: 'Title', enabled: true },
    { id: 'authors', label: 'Authors', enabled: true },
    { id: 'isrc', label: 'ISRC', enabled: true },
    { id: 'bpm', label: 'BPM', enabled: true },
    { id: 'label', label: 'Label', enabled: false },
    { id: 'artwork', label: 'Artwork', enabled: true },
    { id: 'lyrics', label: 'Lyrics', enabled: true },
  ]);

  const handleToggle = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, enabled: !item.enabled } : item
    ));
  };

  return (
      <FlexColumn
        gap={2}
        sx={{
          alignItems: 'flex-start',
          height: 'fit-content',
          width: '198px',
        }}
      >
        <Typography
          variant="h8"
        >
          Show Metadata
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {items.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >
              <Typography
                variant="h3"
              >
                {item.label}
              </Typography>
              <Switch
                checked={item.enabled}
                onChange={() => handleToggle(item.id)}
                sx={{
                    width: 42,
                    height: 24,
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    '& .MuiSwitch-switchBase': {
                    padding: 0,
                    margin: '1px',
                    transitionDuration: '300ms',
                    color: 'background.default',
                    '&.Mui-checked': {
                        transform: 'translateX(18px)',
                        color: 'background.default',
                        '& + .MuiSwitch-track': {
                        backgroundColor: 'secondary.main',
                        opacity: 1,
                        border: 0,
                        },
                    },
                    },
                    '& .MuiSwitch-thumb': {
                    boxSizing: 'border-box',
                    width: 22,
                    height: 22,
                    },
                    '& .MuiSwitch-track': {
                    borderRadius: 24,
                    backgroundColor: 'text.secondary',
                    opacity: 1,
                    height: 24,
                    },
                }}
                />
            </Box>
          ))}
        </Box>
      </FlexColumn>
  );
};

export default ShowMetadata;