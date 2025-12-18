'use client'
import { ICardPerformingArtist } from '@/types/song';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

const CardPerformingArtist = ({ 
  text, 
  bgcolor = 'background.paper',
  onClick,
  image,
  alt
}: ICardPerformingArtist) => {
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
        height: '36px',
        width: 'fit-content',
        px: 1.5,
        gap: image ? 1 : 0,
        alignItems: 'center',
        cursor: 'pointer',
        border: isSelected ? '1px solid' : 'none',
        borderColor: isSelected ? 'secondary.main' : 'transparent',
        '&:hover': {
          opacity: 0.9,
        },
      }}
    >
    {image ? (
        <Image
        src={image}
        alt={alt || text}
        width={24}
        height={24}
        style={{
            borderRadius: '50%'
        }}
        />
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

export default CardPerformingArtist;