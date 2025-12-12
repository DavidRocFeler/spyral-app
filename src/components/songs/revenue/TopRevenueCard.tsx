import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { countriesStatistics } from '@/mock/topRevenue.mock';
import { FlexColumn } from '@/components/ui/FlexColumn';

const TopRevenueCard = () => {
  return (
    <Card
      sx={{
        backgroundColor: 'background.default',
        borderRadius: '24px',
        padding: 1.5,
        width: '100%'
      }}
    >
      <CardContent>
        <FlexColumn gap={1.5}
        sx={{
            alignItems: 'flex-start'
        }}
        >
        <Typography
          variant="h8"
          color='text.secondary'
        >
          Statistics
        </Typography>

        <Typography
          variant="h4"
        >
          Top 10 Countries
        </Typography>
        </FlexColumn>

        <Box mt={3}>
          {countriesStatistics.map((item, index: number) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 1
              }}
            >
              <Typography
                variant='h4'
                fontSize='18px'
              >
                {item.country}
              </Typography>
              <Typography
               variant='h8'
               fontSize='18px'
              >
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default TopRevenueCard;