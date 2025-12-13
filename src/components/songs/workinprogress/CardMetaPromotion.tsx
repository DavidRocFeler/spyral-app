import { useState } from 'react';
import { Box, Typography, Collapse } from '@mui/material';
import { FlexCenter } from '@/components/ui/FlexCenter';
import SecondaryButton from '@/components/ui/SecondaryButton';
import IconSpan from '@/components/ui/IconSpan';
import { ArrowDownSvg, ArrowUpSvg, EditeSmallIconSvg } from '@/assets/icons';
import TextButton from '@/components/ui/TextButton';
import { ICardMetaMainProps } from '@/types/song';
import { defaultMainData } from '@/mock/workingProgressMeta.mock';

const CardMetaPromotion = ({}) => {
  const [isOpen, setIsOpen] = useState(true);
  
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
        Promotion
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
          Album notes
          </Typography>
          <Typography variant='h8'>
          No album notes
          </Typography>
        </FlexCenter>

        {/* Alternative Title */}
        <FlexCenter gap={2.5} sx={{ mt: 2 }}>
          <Typography variant='h7' color='text.secondary'>
          Label copy info
          </Typography>
          <Typography variant='h8'>
          No label copy info
          </Typography>
        </FlexCenter>
      </Collapse>
    </Box>
  );
};

export default CardMetaPromotion;