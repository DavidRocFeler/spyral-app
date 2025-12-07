import { Box, Typography } from '@mui/material';
import { ISecondaryButtonProps } from '@/types/ui';

const SecondaryButtonGrey = ({ 
  text = 'Play', 
  icon: IconComponent,
  gap = 1.5,
  width = 'fit-content',
  borderRadius = '50px',
  justifyContent = 'center',
  ml= '0px',
  mlicon = 'auto',
  color='text.secondary',
  px = 2,
  onClick
}: ISecondaryButtonProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        bgcolor: 'grey.900',
        ml: ml,
        borderRadius: borderRadius,
        display: 'flex',
        justifyContent: justifyContent,
        height: '44px',
        px: px,
        width: width,
        gap: gap,
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <Typography
        variant='h8'
        sx={{
          color: color
        }}
      >
        {text}
      </Typography>
      <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        ml: mlicon
      }}
      >
        {IconComponent && <IconComponent/>}
      </Box>
    </Box>
  );
};

export default SecondaryButtonGrey;