// CardYourCatalogues.tsx
'use client'
import { useState } from 'react';
import { Box, Typography, Tabs, Tab, Grid } from '@mui/material';
import Image from 'next/image';
import { ArrowRightSvg } from '@/assets/icons';
import { catalogues } from '@/mock/catalogues.mock';

const CardYourCatalogues = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        borderRadius: '24px',
        height: '325px',
        p: 3,
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          Your Catalogues
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer' }}>
          <Typography variant="h8">
            View all
          </Typography>
          <ArrowRightSvg />
        </Box>
      </Box>

      {/* Tabs */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange}
          sx={{
            '& .MuiTab-root': {
              color: '#b0b0b0',
              textTransform: 'none',
              fontSize: '14px',
              fontWeight: 500,
              minHeight: '40px',
              padding: '8px 16px',
            },
            '& .Mui-selected': {
              color: '#fff !important',
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#4A90E2',
              height: '2px',
            },
          }}
        >
          <Tab label="Starred" />
          <Tab label="Recently Viewed" />
        </Tabs>
      </Box>

      {/* Images Grid */}
      <Grid spacing={2} container>
        {catalogues.map((catalogue) => (
          <Grid key={catalogue.id} size={4}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '172px',
                borderRadius: '8px',
              }}
            >
              <Image
                src={catalogue.image}
                alt={catalogue.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardYourCatalogues;