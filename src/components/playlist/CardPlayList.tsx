'use client'
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import SecondaryButton from '@/components/ui/SecondaryButton';
import { secondaryButtonsArray } from '@/mock/secondaryButtons.mock';
import { useState } from 'react';
import { DownloadBrandSvg, HeadPhoneBrandSvg, SharedBrandSvg } from '@/assets/icons';
import { ICardPalyList } from '@/types/playlist';
import { FlexColumn } from '../ui/FlexColumn';
import { FlexCenter } from '../ui/FlexCenter';
import CardShareProgress from '../home/user-panel/CardShareProgress';

const CardPlayList = ({ 
  image,
  title,
  isFlipped = false,
  valueShared = 0,
  valueListener = 0,
  valueDownloads = 0
}: ICardPalyList) => {
  const [open, setOpen] = useState(false); 

  const handleShareClick = () => {
    setOpen(true);
  };

  return (
    <Box
      sx={{
        bgcolor: 'grey.900',
        borderRadius: '16px',
        p: 2,
        pb: 1.5,
        position: 'relative'
      }}
    >
      {/* Link wrapper - solo envuelve las partes clickeables */}
      <Link
        href='/playlist/addtrack'
        style={{
          color: 'inherit',
          textDecoration: 'none'
        }}
      >
        {/* Image Container */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '160px',
            borderRadius: '12px',
            display: isFlipped ? 'flex' : 'block',
            alignItems: isFlipped ? 'center' : 'unset',
            pl: isFlipped ? 2 : 0,
            overflow: 'hidden',
            mb: 2,
            bgcolor: isFlipped ? 'background.default' : 'transparent',
            cursor: 'pointer'
          }}
        >
          {isFlipped ? (
            // Parte trasera
            <FlexColumn gap={1.5}>
              <FlexCenter 
                sx={{
                  width: '100%',
                  justifyContent: 'flex-start',
                  gap: 0.7  
                }}
              >
                <SharedBrandSvg/>
                <FlexCenter 
                  gap={0.5}
                  sx={{
                    width: 'fit-content'
                  }}
                >
                  <Typography variant='h7'>{valueShared}</Typography>
                  <Typography variant='h7'>Shared</Typography>
                </FlexCenter>
              </FlexCenter>

              <FlexCenter
                sx={{
                  width: '100%',
                  justifyContent: 'flex-start',
                  gap: 0.7  
                }}
              >
                <HeadPhoneBrandSvg/>
                <FlexCenter 
                  gap={0.5}
                  sx={{
                    width: 'fit-content'
                  }}
                >
                  <Typography variant='h7'>{valueListener}</Typography>
                  <Typography variant='h7'>Listener</Typography>
                </FlexCenter>
              </FlexCenter>

              <FlexCenter 
                sx={{
                  width: '100%',
                  justifyContent: 'flex-start',
                  gap: 0.7  
                }}
              >
                <DownloadBrandSvg/>
                <FlexCenter 
                  gap={0.5}
                  sx={{
                    width: 'fit-content'
                  }}
                >
                  <Typography variant='h7'>{valueDownloads}</Typography>
                  <Typography variant='h7'>Downloads</Typography>
                </FlexCenter>
              </FlexCenter>
            </FlexColumn>
          ) : (
            // Parte delantera
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
            />
          )}
        </Box>

        {/* Title */}
        <Typography variant="h8">
          {title}
        </Typography>
      </Link>

      {/* Share Button - FUERA del Link para que no active la navegación */}
      <Box
        sx={{
          position: 'absolute',
          right: 17, // Ajustado por el padding del Box padre (9 + 8)
          top: 24,   // Ajustado por el padding del Box padre (8 + 16)
          zIndex: 10
        }}
      >
        <SecondaryButton 
          text={secondaryButtonsArray[1].text} 
          icon={secondaryButtonsArray[1].icon} 
          onClick={handleShareClick}
        />
      </Box>

      <CardShareProgress
        open={open} 
        onClose={() => setOpen(false)} 
      />
    </Box>
  );
};

export default CardPlayList;