import { useState } from 'react';
import { Box, Typography, Collapse } from '@mui/material';
import { FlexCenter } from '@/components/ui/FlexCenter';
import SecondaryButton from '@/components/ui/SecondaryButton';
import IconSpan from '@/components/ui/IconSpan';
import { ArrowDownSvg, ArrowUpSvg, EditeSmallIconSvg, TranslateIconSvg } from '@/assets/icons';
import { FlexColumn } from '@/components/ui/FlexColumn';
import SelectCustom from '@/components/ui/SelectCustom';
import PrimaryButton from '@/components/ui/PrimaryButton';

const CardMetaLang = ({}) => {
  const [isOpen, setIsOpen] = useState(true);
  const mockFileSelect = ['Spanish, Italian, Swedish', 'Spanish, Italian, Swedish', 'Spanish, Italian, Swedish'];
  const [selectedChannel, setSelectedChannel] = useState(mockFileSelect[0]);
  
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
        Languages
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
          Default language
          </Typography>
          <Typography variant='h8'>
          English
          </Typography>
        </FlexCenter>

        <FlexColumn
        gap={1}
        sx={{
            alignItems: 'flex-start'
        }}
        >
            <Box mt={3}>
                <Typography variant='h8'>
                Translation
                </Typography>
                <FlexCenter mt={1} gap={2}>
                    <SelectCustom
                    options={mockFileSelect}
                    value={selectedChannel}
                    onChange={setSelectedChannel}
                    fullWidth={false}
                    height="44px"
                    heightOption="31px"
                    borderRadius="12px"
                    bgcolor="grey.900"
                    
                    variant='h7'
                    width='70dvh'
                    />
                    <PrimaryButton
                    text='Translate'
                    icon={TranslateIconSvg}
                    />
                </FlexCenter>
            </Box>
        </FlexColumn>
      </Collapse>
    </Box>
  );
};

export default CardMetaLang;