import { Box, colors, Typography } from '@mui/material';
import { ComponentType, isValidElement } from 'react';
import { ISecondaryButtonProps } from '@/types/ui';

const SecondaryButton = ({ 
  text = 'Play', 
  icon,
  bgcolor = 'background.paper',
  height = '32px',
  onClick,
  width,
  justifyContent = 'center',
  pl = 2,
  borderRadius = '50px',
  varitant = 'h8',
  px = 2,
  borderBottomLeftRadius, 
  borderBottomRightRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  color,
  flexDirection = 'row'
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
        borderRadius: borderRadius,
        display: 'flex',
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        height: height,
        width: width,
        px: px,
        pl: pl,
        gap: 1.5,
        alignItems: 'center',
        cursor: 'pointer',
        borderBottomLeftRadius: borderBottomLeftRadius,
        borderBottomRightRadius: borderBottomRightRadius,
        borderTopLeftRadius: borderTopLeftRadius,
        borderTopRightRadius: borderTopRightRadius,
        '&:hover': {
          opacity: 0.9,
        },
      }}
    >
      <Typography
      sx={{
        color: color,
        typography: varitant
      }}
      >
        {text}
      </Typography>
      {renderIcon()}
    </Box>
  );
};

export default SecondaryButton;