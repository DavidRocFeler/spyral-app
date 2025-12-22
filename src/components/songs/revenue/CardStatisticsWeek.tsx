'use client'
import { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { FlexCenter } from '@/components/ui/FlexCenter';
import { FlexColumn } from '@/components/ui/FlexColumn';

export interface IStatisticsWeekCardProps {
  currentValue?: number;
  percentageChange?: number;
  label?: string;
}

const CardStatisticsWeek = ({
  currentValue = 142,
  label = 'Revenue vs Forecasted',
}: IStatisticsWeekCardProps) => {
  const [animatedValue, setAnimatedValue] = useState<number>(currentValue);

  // Week labels (eje X)
  const weekLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];

  // Y axis labels (eje Y)
  const yAxisLabels = ['10k', '5k', '1k', '0'];

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
          <FlexColumn sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
            <FlexCenter gap={1}>
              <Box
                bgcolor='#376EEF'
                width='16px'
                height='16px'
                borderRadius='50px'
              />
              <Typography variant='h7'> Last month </Typography>
            </FlexCenter>
            <FlexCenter gap={1}>
              <Box
                bgcolor='secondary.main'
                width='16px'
                height='16px'
                borderRadius='50px'
              />
              <Typography variant='h7'> Last month </Typography>
            </FlexCenter>
          </FlexColumn>
        </FlexColumn>
      </FlexCenter>

      {/* Chart Area - Plano Cartesiano */}
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          mt: 5,
        }}
      >
        {/* Eje Y (izquierda) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            pr: 2,
            pb: 0,
          }}
        >
          {yAxisLabels.map((label, index) => (
            <Typography
              key={index}
              variant='h8'
              color='text.secondary'
              fontWeight={500}
            >
              {label}
            </Typography>
          ))}
        </Box>

        {/* Área del gráfico + Eje X */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '1px solid',
            borderRight: '1px solid',
            borderColor: 'grey.800',
          }}
        >
          {/* Área del gráfico (donde irían las barras/líneas) */}
          <Box
            sx={{
              flex: 1,
              borderBottom: '1px solid',
              borderTop: '2px dashed',
              borderColor: 'grey.800',
              position: 'relative',
            }}
          >
            {/* Línea vertical punteada desde Week 2 */}
            <Box
              sx={{
                position: 'absolute',
                left: '37%',
                top: 0,
                bottom: 0,
                borderLeft: '2px dashed',
                borderColor: 'grey.800',
              }}
            />
            
            {/* Línea vertical punteada desde Week 3 */}
            <Box
              sx={{
                position: 'absolute',
                left: '62%',
                top: 0,
                bottom: 0,
                borderLeft: '2px dashed',
                borderColor: 'grey.800',
              }}
            />
          </Box>

          {/* Eje X (abajo) - Week Labels */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              pt: 2,
            }}
          >
            {weekLabels.map((week, index) => (
              <Typography
                key={index}
                variant='h8'
                color='text.secondary'
                fontWeight={500}
              >
                {week}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default CardStatisticsWeek;