import { Box, Typography } from '@mui/material';
import { ISecondaryButtonProps } from '@/types/ui';

const SecondaryButton = ({ 
  text = 'Play', 
  icon: IconComponent,
  onClick 
}: ISecondaryButtonProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        bgcolor: 'background.paper',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        py: 0.8,
        px: 1.5,
        gap: 1.5,
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
          opacity: 0.9,
        },
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