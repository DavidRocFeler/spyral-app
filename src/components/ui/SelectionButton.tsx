import { ISelectionButtonProps } from '@/types/ui';
import { Box, Typography } from '@mui/material';

const SelectionButton = ({ 
  text, 
  bgcolor = 'background.paper',
  onClick,
  isSelected = false,
  height= '32px',
  minWidth= '0px',
  color,
  px = 1.5
}: ISelectionButtonProps) => {
  
  return (
    <Box
      onClick={onClick}
      sx={{
        bgcolor: bgcolor,
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        height: height,
        width: 'fit-content',
        minWidth: minWidth,
        px: px,
        alignItems: 'center',
        cursor: 'pointer',
        border: isSelected ? '1px solid' : 'none',
        borderColor: isSelected ? 'secondary.main' : 'transparent',
        '&:hover': {
          opacity: 0.9,
        },
      }}
    >
      <Typography
        variant='h8'
        sx={{
          color: color || (isSelected && 'secondary.main') || 'inherit',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default SelectionButton;