import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import CardArrayProgress from './CardArrayProgress';
import { ArrowRightSvg } from '@/assets/icons';
import { workInProgressList } from '@/mock/workInProgresList';
import ViewAll from '@/components/ui/ViewAll';

const CardWorkInProgress = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        borderRadius: '24px',
        height: '363px',
        p: 3,
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          Work In Progress
        </Typography>
        
        <ViewAll/>
      </Box>

      {/* Cards Grid */}
      <Grid
        container 
        spacing={2}
        >
        {workInProgressList.map((work, index) => (
            <Grid key={work.id} size={{ xs: 6 }} sx={{ flexShrink: 0 }}>
            <CardArrayProgress
                image={work.image}
                title={work.title}
                createdDate={work.createdDate}
                collaborators={work.collaborators}
                index={index}
            />
            </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardWorkInProgress;