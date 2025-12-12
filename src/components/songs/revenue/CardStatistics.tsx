import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { FlexCenter } from '@/components/ui/FlexCenter';
import { FlexColumn } from '@/components/ui/FlexColumn';
import IconSpan from '@/components/ui/IconSpan';
import { ArrowDiagonalSvg } from '@/assets/icons';

interface IStatisticsCardProps {
  currentValue?: number;
  percentageChange?: number;
  label?: string;
  currentHour?: number;
}

const CardStatistics: React.FC<IStatisticsCardProps> = ({
  currentValue = 142,
  percentageChange = 12.75,
  label = 'Streams',
  currentHour = new Date().getHours()
}) => {
  const [animatedValue, setAnimatedValue] = useState<number>(currentValue);

  // Generate 5 hours dynamically based on current hour
  const generateHourLabels = (): string[] => {
    const hours: string[] = [];
    
    for (let i = 4; i >= 0; i--) {
      const hour = currentHour - (i * 2);
      const displayHour = hour < 0 ? hour + 24 : hour;
      hours.push(`${displayHour}:00`);
    }
    
    return hours;
  };

  const hourLabels = generateHourLabels();

  // Simulate value animation
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue(prev => {
        const change = (Math.random() - 0.5) * 10;
        return Math.round(Math.max(50, Math.min(200, prev + change)));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Paper
      elevation={0}
      sx={{
        bgcolor: 'background.default',
        borderRadius: '24px',
        p: 4,
        width: '100%',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Header Section */}
      <FlexCenter sx={{ mb: 0, zIndex: 2, width: '100%' }}>
        <FlexColumn 
          gap={2} 
          mr='auto'
          sx={{
            alignItems: 'start'
          }}
        >
          <Typography
            variant="h8"
            color='text.secondary'
          >
            Statistics
          </Typography>
          <Typography variant='h3'>
            {label}
          </Typography>
        </FlexColumn>
        
        <FlexColumn 
          gap={1}
          sx={{
            alignItems: 'flex-end'
          }}
        >
          <Typography
            variant="h8"
            fontSize='24px'
          >
            {animatedValue}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
            <IconSpan
              icon={ArrowDiagonalSvg}
              bgcolor='background.paper'
              height='21px'
              width='21px'
            />
            <Typography
              variant="h8"
              sx={{
                color: 'secondary.main',
                fontSize: '16px',
                fontWeight: 400
              }}
            >
              {percentageChange}%
            </Typography>
          </Box>
        </FlexColumn>
      </FlexCenter>

      {/* Hour Labels */}
      <Box 
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(5, auto)',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 'auto',
        }}
      >
        {hourLabels.map((hour, index) => (
          <Typography 
            key={index}
            variant='h8' 
            color='text.secondary' 
            fontWeight={500}
          >
            {hour}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
};

export default CardStatistics;