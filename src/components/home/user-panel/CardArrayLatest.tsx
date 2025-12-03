'use client'
import { Box, Typography } from '@mui/material';
import { ICardArrayLatestProps } from '@/types/home';
import SecondaryButton from '@/components/ui/SecondaryButton';
import { EyeIconSvg, MoneyIconSvg } from '@/assets/icons';
import { secondaryButtonsArray } from '@/mock/secondaryButtons.mock';

const CardArrayLatest = ({ 
  title, 
  artist, 
  duration, 
  views, 
  earnings 
}: ICardArrayLatestProps) => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        borderRadius: '16px',
        p: 2.5,
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography variant="h6">
            {title}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 0.7, alignItems: 'center' }}>
            <Typography variant="h9">
              {artist}
            </Typography>
            <Box
              display='flex'
              flexDirection='row'
              gap={0.5}
              ml={0.5}
            >
              <Typography
                variant="h9"
                color="text.secondary"            
              >
                •
              </Typography>
              <Typography
                variant="h9"
                color="text.secondary"
              >
                {duration}
              </Typography>
            </Box>
          </Box>
        </Box>

        <SecondaryButton 
          text={secondaryButtonsArray[0].text} 
          icon={secondaryButtonsArray[0].icon} 
          onClick={secondaryButtonsArray[0].onClick}
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 3 }}>
        <Box sx={{ display: 'flex', gap: 0.7, alignItems: 'center' }}>
          <EyeIconSvg />
          <Typography variant="h8">
            {views} views
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 0.7, alignItems: 'center' }}>
          <MoneyIconSvg />
          <Typography variant="h8">
            {earnings} EUR
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CardArrayLatest;