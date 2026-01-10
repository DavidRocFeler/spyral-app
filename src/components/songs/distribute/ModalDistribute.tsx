'use client';

import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { FlexCenter } from '@/components/ui/FlexCenter';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { FlexColumn } from '@/components/ui/FlexColumn';
import { platformsTwo } from '@/mock/platformData.mock';
import CardPlatformSelection from '@/components/ui/CardPlatformsSelection';
import SecondaryButton from '@/components/ui/SecondaryButton';
import Link from 'next/link';
import { IModalDistributeProps } from '@/types/song';

const distributors = [
  { name: 'DISTRIBUTOR NAME 1', selected: true },
  { name: 'FUGA', selected: false },
  { name: 'DISTRIBUTOR NAME 3', selected: false }
];

const ModalDistribute = ({
  onClose,
}: IModalDistributeProps) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['Spotify']);

  const handlePlatformClick = (name: string) => {
    if (selectedPlatforms.includes(name)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== name));
    } else {
      setSelectedPlatforms([...selectedPlatforms, name]);
    }
  };

  const handleDeliver = () => {
    console.log('Deliver clicked');
  };

  return (
    // Overlay negro con opacidad 0.5
    <Box
      onClick={onClose}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      {/* Contenedor principal del modal */}
      <Box 
        onClick={(e) => e.stopPropagation()} 
        mt={5} 
        bgcolor='background.default' 
        width='811px' 
        py={5} 
        px={5} 
        borderRadius='40px'
        sx={{
          position: 'relative',
          zIndex: 10000,
        }}
      >
        {/* Release Date */}
        <FlexColumn gap={1.5} sx={{ mb: 5, alignItems: 'flex-start' }}>
          <Typography variant='h4'>
              Check Everything once more before distributing
          </Typography>
        </FlexColumn>

        {/* Relase date  */}
        <FlexColumn gap={1.5} sx={{ mb: 4, alignItems: 'flex-start'}}>
          <Typography variant='h8'>
            Release Date
          </Typography>
          <Typography variant='h6'>
            25 August 2025 
          </Typography>
        </FlexColumn>
        
        {/* Distribuitor */}
        <FlexColumn gap={1.5} sx={{ mb: 4, alignItems: 'flex-start'}}>
          <Typography variant='h8'>
            Distributor
          </Typography>
          <Typography variant='h6'>
            Lorem Ipsum
          </Typography>
        </FlexColumn>

        {/* Platforms */}
        <FlexColumn gap={1} sx={{ mb: 5, alignItems: 'flex-start'}}>
          <Typography variant='h8'>
            Platforms
          </Typography>
          <FlexCenter gap={1.5} sx={{ mt: 0, flexWrap: 'wrap' }}>
            {platformsTwo.map((platform) => (
              <CardPlatformSelection
                px={0}
                bgcolor='transparent'
                key={platform.text}
                text={platform.text}
                icon={platform.icon}
                onClick={() => handlePlatformClick(platform.text)}
              />
            ))}
          </FlexCenter>
        </FlexColumn>

        {/* Deliver Button */}
        <FlexCenter mx='auto' gap={2}>
          <SecondaryButton
            text='Go Back'
            height='44px'
            bgcolor='grey.900'
            onClick={onClose} 
          />
         <Link
         href='/desktop/songs/revenue'
         style={{
           color: 'inherit',
           textDecoration: 'none'
         }}
         >
          <PrimaryButton
              height='44px'
              text="Distribute"
              onClick={handleDeliver}
            />
         </Link>
        </FlexCenter>
      </Box>
    </Box>
  );
};

export default ModalDistribute;