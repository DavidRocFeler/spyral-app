import { Box, Typography } from '@mui/material';
import { ISecondaryButtonProps } from '@/types/ui';

const SecondaryButtonGrey = ({ 
  text = 'Play', 
  icon: IconComponent,
  gap = 1.5,
  width = 'fit-content',
  borderRadius = '50px',
  justifyContent = 'center',
  onClick 
}: ISecondaryButtonProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        bgcolor: 'grey.900',
        borderRadius: borderRadius,
        display: 'flex',
        justifyContent: justifyContent,
        height: '44px',
        px: 2,
        width: width,
        gap: gap,
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
          opacity: 0.9,
        },
      }}
    >
      <Typography
        variant='h8'
        color='text.secondary'
      >
        {text}
      </Typography>
      <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        ml: 'auto'
      }}
      >
        {IconComponent && <IconComponent/>}
      </Box>
    </Box>
  );
};

export default SecondaryButtonGrey;