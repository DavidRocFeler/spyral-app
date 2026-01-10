'use client'
import { useState } from 'react';
import { Box, Typography, Collapse } from '@mui/material';
import { FlexCenter } from '@/components/ui/FlexCenter';
import SecondaryButton from '@/components/ui/SecondaryButton';
import IconSpan from '@/components/ui/IconSpan';
import { ArrowDownSvg, ArrowUpSvg, EditeSmallIconSvg } from '@/assets/icons';
import TextButton from '@/components/ui/TextButton';
import { ICardMetaMainProps } from '@/types/song';
import { defaultMainData } from '@/mock/workingProgressMeta.mock';

const CardMetaMain = ({
  mainData = defaultMainData,
  initiallyOpen = true
}: ICardMetaMainProps) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  
  const {
    title,
    alternativeTitle,
    artistId,
    releaseVersion,
    labels
  } = mainData;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      borderRadius='24px'
      bgcolor='background.default'
      p={3}
    >
      <FlexCenter sx={{ width: '100%' }}>
        <Typography mr='auto' variant="h3">
          Main 
        </Typography>
        <FlexCenter gap={1}>
          <SecondaryButton
            icon={EditeSmallIconSvg}
            text='Edit'
          />
          <IconSpan
            borderRadius='8px'
            icon={isOpen ? ArrowUpSvg : ArrowDownSvg}
            onClick={toggleOpen}
          />    
        </FlexCenter>
      </FlexCenter>

      <Collapse in={isOpen}>
        {/* Title */}
        <FlexCenter gap={1.5} sx={{ mt: 2 }}>
          <Typography variant='h7' color='text.secondary'>
            Title
          </Typography>
          <Typography variant='h8'>
            {title}
          </Typography>
        </FlexCenter>

        {/* Alternative Title */}
        <FlexCenter gap={1.5} sx={{ mt: 2 }}>
          <Typography variant='h7' color='text.secondary'>
            Alternative Title
          </Typography>
          <Typography variant='h8'>
            {alternativeTitle}
          </Typography>
        </FlexCenter>

        {/* Artist ID */}
        <FlexCenter gap={1.5} sx={{ mt: 2 }}>
          <Typography variant='h7' color='text.secondary'>
            Artist ID
          </Typography>
          <Typography variant='h8'>
            {artistId}
          </Typography>
        </FlexCenter>

        {/* Release Version */}
        <FlexCenter gap={1.5} sx={{ mt: 2 }}>
          <Typography variant='h7' color='text.secondary'>
            Release version
          </Typography>
          <Typography variant='h8'>
            {releaseVersion}
          </Typography>
        </FlexCenter>

        {/* Labels */}
        <FlexCenter gap={1.5} sx={{ mt: 2 }}>
          <Typography variant='h7' color='text.secondary'>
            Labels
          </Typography>
          <FlexCenter gap={1} flexWrap="wrap">
            {labels.map((label, index) => (
              <TextButton
                key={`label-${index}`}
                bgcolor='background.paper'
                text={label}
                color='white'
                unset=''
                height='32px'
                borderRadius='50px'
              />
            ))}
          </FlexCenter>
        </FlexCenter>
      </Collapse>
    </Box>
  );
};

export default CardMetaMain;