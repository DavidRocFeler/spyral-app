import { ICardPerformingArtist, ICardPlataformProps } from '@/types/song';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

const CardPlatformSelection = ({ 
  text, 
  bgcolor = 'background.paper',
  onClick,
  icon
}: ICardPlataformProps) => {
  const IconSvg = icon || null;
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onClick?.();
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        bgcolor: bgcolor,
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        height: '44px',
        width: 'fit-content',
        px: 2,
        gap: icon ? 1.2 : 0,
        alignItems: 'center',
        cursor: 'pointer',
        border: isSelected ? '1px solid' : 'none',
        borderColor: isSelected ? 'secondary.main' : 'transparent',
        '&:hover': {
          opacity: 0.9,
        },
      }}
    >
    {IconSvg ? (
        <IconSvg/>
    ) : null }
      <Typography
        variant='h8'
        sx={{
          color: isSelected ? 'secondary.main' : 'inherit',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default CardPlatformSelection;