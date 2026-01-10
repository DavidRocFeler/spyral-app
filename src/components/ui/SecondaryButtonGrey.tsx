import { Box, Typography } from '@mui/material';
import { ISecondaryButtonProps } from '@/types/ui';
import { ComponentType, isValidElement } from 'react';

const SecondaryButtonGrey = ({ 
  text = 'Play', 
  icon,
  gap = 1.5,
  width = 'fit-content',
  borderRadius = '50px',
  justifyContent = 'center',
  ml= '0px',
  height ='44px',
  color='text.secondary',
  px = 2,
  bgcolor = 'grey.900',
  onClick,
  mr
}: ISecondaryButtonProps) => {
   const renderIcon = () => {
    if (!icon) return null;
    
    if (isValidElement(icon)) {
      return icon;
    }
    
    const IconComponent = icon as ComponentType<any>;
    return <IconComponent />;
  };
  return (
    <Box
      onClick={onClick}
      sx={{
        bgcolor: bgcolor,
        ml: ml,
        borderRadius: borderRadius,
        display: 'flex',
        justifyContent: justifyContent,
        height: height,
        px: px,
        width: width,
        gap: gap,
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <Typography
        mr={mr}
        variant='h8'
        sx={{
          color: color
        }}
      >
        {text}
      </Typography>
      {renderIcon()}
    </Box>
  );
};

export default SecondaryButtonGrey;