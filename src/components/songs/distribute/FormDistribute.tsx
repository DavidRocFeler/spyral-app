'use client';

import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { FlexCenter } from '@/components/ui/FlexCenter';
import SelectionButton from '@/components/ui/SelectionButton';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { ArrowLineUpSvg } from '@/assets/icons';
import InputCalendar from '@/components/ui/InputCalendar';
import { FlexColumn } from '@/components/ui/FlexColumn';
import { platforms } from '@/mock/platformData.mock';
import CardPlatformSelection from '@/components/ui/CardPlatformsSelection';
import { IFormDistributeProps } from '@/types/song';

const distributors = [
  { name: 'DISTRIBUTOR NAME 1', selected: true },
  { name: 'FUGA', selected: false },
  { name: 'DISTRIBUTOR NAME 3', selected: false }
];

const FormDistribute = ({
  onDeliver,
}: IFormDistributeProps) => {
  const [releaseDate, setReleaseDate] = useState<string>('');
  const [selectedDistributor, setSelectedDistributor] = useState<string>('DISTRIBUTOR NAME 1');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['Spotify']);

  const handleDistributorClick = (name: string) => {
    setSelectedDistributor(name);
  };

  const handlePlatformClick = (name: string) => {
    if (selectedPlatforms.includes(name)) {
      setSelectedPlatforms(selectedPlatforms.filter(p => p !== name));
    } else {
      setSelectedPlatforms([...selectedPlatforms, name]);
    }
  };

  const handleDeliver = () => {
    console.log('Deliver clicked');
    onDeliver?.();
  };

  return (
    <Box mt={5}>
      {/* Release Date */}
      <FlexColumn gap={1.5} sx={{ mb: 5, alignItems: 'flex-start' }}>
        <Typography variant='h8'>
          Release Date
        </Typography>
        <InputCalendar
          value={releaseDate}
          onChange={setReleaseDate}
        />
      </FlexColumn>

      {/* Select Distributor */}
      <FlexColumn gap={0.5} sx={{ mb: 5, alignItems: 'flex-start'}}>
        <Typography variant='h8'>
          Select Distributor
        </Typography>
        <FlexCenter gap={1.5} sx={{ mt: 1 }}>
          {distributors.map((distributor) => (
            <SelectionButton
              minWidth='197px'
              height='44px'
              key={distributor.name}
              text={distributor.name}
              isSelected={selectedDistributor === distributor.name}
              onClick={() => handleDistributorClick(distributor.name)}
            />
          ))}
        </FlexCenter>
      </FlexColumn>

      {/* Platforms */}
      <FlexColumn gap={0.5} sx={{ mb: 5, alignItems: 'flex-start'}}>
        <Typography variant='h8'>
          Platforms
        </Typography>
        <FlexCenter gap={1.5} sx={{ mt: 1, flexWrap: 'wrap' }}>
          {platforms.map((platform) => (
            <CardPlatformSelection
              key={platform.text}
              text={platform.text}
              icon={platform.icon}
              onClick={() => handlePlatformClick(platform.text)}
            />
          ))}
        </FlexCenter>
      </FlexColumn>

      {/* Deliver Button */}
      <Box>
        <PrimaryButton
          height='44px'
          text="Deliver"
          icon={ArrowLineUpSvg}
          onClick={handleDeliver}
        />
      </Box>
    </Box>
  );
};

export default FormDistribute;