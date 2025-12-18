'use client'
import { useState } from 'react';
import { Box, Typography, Switch } from '@mui/material';
import { FlexColumn } from '../ui/FlexColumn';
import type { IMetadataItem } from "@/types/playlist";
import { settingPlaylist } from '@/mock/switchAndLabel.mock';

export interface ISwitchAndLabel {
  switchItems?: IMetadataItem[];
  gap?: number;
}

const SwitchAndLabel = ({
  switchItems = settingPlaylist, 
  gap = 3
}: ISwitchAndLabel) => {
  const [items, setItems] = useState<IMetadataItem[]>(switchItems);

  const handleToggle = (id: string) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, enabled: !item.enabled } : item
    ));
  };

  return (
    <FlexColumn
      gap={1.5}
      sx={{
        alignItems: 'flex-start',
        height: 'fit-content',
      }}
    >
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 2 }}>
        {items.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: gap
            }}
          >
            <Typography
              variant="h8"
            >
              {item.label}
            </Typography>
            <Switch
              checked={item.enabled}
              onChange={() => handleToggle(item.id)}
              sx={{
                ml:'auto',
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
                      border: '1px solid',
                      borderColor: 'secondary.main',
                    },
                    '& .MuiSwitch-thumb': {
                      border: '1px solid',
                      borderColor: 'secondary.main',
                    },
                  },
                },
                '& .MuiSwitch-thumb': {
                  boxSizing: 'border-box',
                  width: 22,
                  height: 22,
                  border: '1px solid',
                  borderColor: 'secondary.main',
                },
                '& .MuiSwitch-track': {
                  borderRadius: '100px',
                  backgroundColor: 'grey.900',
                  opacity: 1,
                  height: 24,
                  border: '1px solid',
                  borderColor: 'secondary.main',
                },
              }}
            />
          </Box>
        ))}
      </Box>
    </FlexColumn>
  );
};

export default SwitchAndLabel;