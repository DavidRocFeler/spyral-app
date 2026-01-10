// CardYourCatalogues.tsx
'use client'
import { useState } from 'react';
import { Box, Typography, Tabs, Tab, Grid } from '@mui/material';
import Image from 'next/image';
import { catalogues } from '@/mock/catalogues.mock';
import ViewAll from '@/components/ui/ViewAll';

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
        
        <ViewAll/>
      </Box>

     {/* Tabs */}
    <Box sx={{ borderBottom: 1, borderColor: 'background.paper', mb: 3 }}>
      <Tabs 
        value={activeTab} 
        onChange={handleTabChange}
        sx={{
          mb: -0.1,
          '& .MuiTab-root': {
            color: '#808080',
            textTransform: 'none',
            padding: '8px 16px',
            typography: 'h8', 
          },
          '& .Mui-selected': {
            color: '#FFF !important',
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#FFF',
            height: '1px',
          },
        }}
      >
        <Tab label="Starred" disableRipple/> 
        <Tab label="Recently Viewed" disableRipple/> 
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
                style={{ objectFit: 'cover', borderRadius: '8px' }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardYourCatalogues;