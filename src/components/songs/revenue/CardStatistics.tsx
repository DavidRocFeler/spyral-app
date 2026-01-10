'use client'
import { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { FlexCenter } from '@/components/ui/FlexCenter';
import { FlexColumn } from '@/components/ui/FlexColumn';
import IconSpan from '@/components/ui/IconSpan';
import { ArrowDiagonalSvg } from '@/assets/icons';
import { IStatisticsCardProps } from '@/types/song';



const CardStatistics = ({
  currentValue = 142,
  percentageChange = 12.75,
  label = 'Streams',
  currentHour = new Date().getHours()
}: IStatisticsCardProps) => {
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

      {/* Chart Area */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          mt: 5,
        }}
      >
        {/* Área del gráfico */}
        <Box
          sx={{
            flex: 1,
            borderTop: '1px solid',
            borderColor: 'grey.800',
            position: 'relative',
          }}
        >
          {/* Línea vertical desde hora 2 (25%) */}
          <Box
            sx={{
              position: 'absolute',
              left: '25.5%',
              top: 0,
              bottom: 0,
              borderLeft: '2px dashed',
              borderColor: 'grey.800',
            }}
          />
          
          {/* Línea vertical desde hora 3 (50%) */}
          <Box
            sx={{
              position: 'absolute',
              left: '48.5%',
              top: 0,
              bottom: 0,
              borderLeft: '2px dashed',
              borderColor: 'grey.800',
            }}
          />
          
          {/* Línea vertical desde hora 4 (75%) */}
          <Box
            sx={{
              position: 'absolute',
              left: '72%',
              top: 0,
              bottom: 0,
              borderLeft: '2px dashed',
              borderColor: 'grey.800',
            }}
          />
        </Box>

        {/* Hour Labels */}
        <Box 
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            pt: 2,
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
      </Box>
    </Paper>
  );
};

export default CardStatistics;