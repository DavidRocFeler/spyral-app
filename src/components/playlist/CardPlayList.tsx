'use client'
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
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

  return (
    <Box
      sx={{
        bgcolor: 'grey.900',
        borderRadius: '16px',
        p: 2,
        pb: 1.5
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
          bgcolor: isFlipped ? 'background.default' : 'transparent'
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

        {/* Share Button */}
        <Box
          sx={{
            position: 'absolute',
            right: 9,
            top: 8,
          }}
        >
          <SecondaryButton 
            text={secondaryButtonsArray[1].text} 
            icon={secondaryButtonsArray[1].icon} 
            onClick={() => setOpen(true)}
          />
        </Box>

        <CardShareProgress
          open={open} 
          onClose={() => setOpen(false)} 
        />
      </Box>

      {/* Title */}
      <Typography variant="h8">
        {title}
      </Typography>
    </Box>
  );
};

export default CardPlayList;