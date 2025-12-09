import { Box, Typography } from '@mui/material';
import { ReactElement, ComponentType, isValidElement } from 'react';
import { ISecondaryButtonProps } from '@/types/ui';

const SecondaryButton = ({ 
  text = 'Play', 
  icon,
  bgcolor = 'background.paper',
  height = '32px',
  onClick 
}: ISecondaryButtonProps) => {
  const renderIcon = () => {
    if (!icon) return null;
    
    // Si es un ReactElement (ya renderizado: <PlayIconSvg />)
    if (isValidElement(icon)) {
      return icon;
    }
    
    // Si es un ComponentType (PlayIconSvg sin renderizar)
    const IconComponent = icon as ComponentType<any>;
    return <IconComponent />;
  };

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
        '&:hover': {
          opacity: 0.9,
        },
      }}
    >
      <Typography
        variant='body2' // Nota: 'h8' no existe en MUI
        sx={{
          fontWeight: 500,
          fontSize: '0.875rem',
        }}
      >
        {text}
      </Typography>
      {renderIcon()}
    </Box>
  );
};

export default SecondaryButton;