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
    display='flex'
    pr={2}
    alignItems='center'
    bgcolor='grey.900'
    height='102px'
    borderRadius='16px'
    >
      <Box
        sx={{
          p: 2.5,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.3
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box
          display='flex'
          flexDirection='column'
          gap={1.5}
          >
            <Typography variant="h8">
              {title}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 0.7, alignItems: 'center' }}>
              <Typography variant="h9"
              color="text.secondary"            
              >
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
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <Box sx={{ display: 'flex', gap: 0.7, alignItems: 'center' }}>
            <EyeIconSvg />
            <Typography variant="h7">
              {views} views
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 0.7, alignItems: 'center' }}>
            <MoneyIconSvg />
            <Typography variant="h7">
              {earnings} EUR
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
      ml='auto'
      >
        <SecondaryButton 
          text={secondaryButtonsArray[0].text} 
          icon={secondaryButtonsArray[0].icon} 
          onClick={secondaryButtonsArray[0].onClick}
        />
      </Box>
    </Box>
  );
};

export default CardArrayLatest;