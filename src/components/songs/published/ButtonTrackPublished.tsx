import { ITrackinButtonProps } from '@/types/ui';
import { Box, Typography } from '@mui/material';

const ButtonTrackPublished = ({ 
  text, 
  icon: IconComponent,
  gap = 1.5,
  width = 'fit-content',
  borderRadius = '50px',
  borderColor = 'transparent',
  justifyContent = 'center',
  ml = '0px',
  mlicon = '0',
  color = '#808080',
  px = 2,
  bgcolor = 'transparent',
  onClick
}: ITrackinButtonProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        bgcolor: bgcolor,
        border: '2px solid',
        borderColor: borderColor,
        ml: ml,
        borderRadius: borderRadius,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: justifyContent,
        height: '44px',
        px: px,
        width: width,
        gap: gap,
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          ml: mlicon,
          '& svg': {
                fill: color,
                color: '#000',
                transition: '#000',
              },
              '& svg path': {
                fill: color,
              },
              '& svg circle': {
                fill: color,
              },
              '& svg rect': {
                fill: color,
              },
        }}
      >
        {IconComponent && <IconComponent/>}
      </Box>
      <Typography
        variant='h8'
        sx={{
          color: color,
          transition: 'color 0.3s ease'
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default ButtonTrackPublished;