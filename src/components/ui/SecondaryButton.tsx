import { Box, Typography } from '@mui/material';
import { ISecondaryButtonProps } from '@/types/ui';

const SecondaryButton = ({ 
  text = 'Play', 
  icon: IconComponent,
  bgcolor = 'background.paper',
  height = '32px',
  onClick 
}: ISecondaryButtonProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        bgcolor: bgcolor,
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        height: height,
        px: 2,
        gap: 1.5,
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <Typography
        variant='h8'
      >
        {text}
      </Typography>
      {IconComponent && <IconComponent />}
    </Box>
  );
};

export default SecondaryButton;