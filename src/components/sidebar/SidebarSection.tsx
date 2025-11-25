'use client'
// components/Sidebar/SidebarSection.tsx
import { useState } from 'react';
import { Box, Typography, Collapse } from '@mui/material';
import { ArrowUpSvg, ArrowDownSvg } from '@/assets/icons';
import { ISidebarSectionProps } from '@/types/sidebar';

const SidebarSection = ({ section }: ISidebarSectionProps) => {
  const [isOpen, setIsOpen] = useState(!section.isCollapsed);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const ArrowIcon = isOpen ? ArrowUpSvg : ArrowDownSvg;

  return (
    <Box sx={{ mt: 3 }}>
      <Box
        onClick={handleToggle}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          padding: '8px 16px',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '8px',
          },
        }}
      >
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: 400,
            color: 'text.primary',
            letterSpacing: '0.5px',
          }}
        >
          {section.title}
        </Typography>
        <ArrowIcon style={{ width: 16, height: 16, color: '#808080' }} />
      </Box>

      <Collapse in={isOpen}>
        <Box 
          sx={{ 
            mt: 1,
            pb: 2,
            borderBottom: 'solid 1px',
            borderColor: 'background.default' 
          }}
        >
          {section.items.map((item) => (
            <Box
              key={item.id}
              sx={{
                py: 1,
                px: 2,
                cursor: 'pointer',
                borderRadius: '8px',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: '13px',
                  color: 'text.primary',
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  color: 'text.secondary',
                  mt: 0.5,
                }}
              >
                {item.artist}
              </Typography>
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default SidebarSection;