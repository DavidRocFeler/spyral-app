'use client'
import { Box, Typography } from '@mui/material';
import { ICardArrayPlaylistProps } from '@/types/home';
import { secondaryButtonsArray } from '@/mock/secondaryButtons.mock';
import SecondaryButton from '@/components/ui/SecondaryButton';
import { DownloadBrandSvg, HeadPhoneBrandSvg, SharedBrandSvg } from '@/assets/icons';

const CardArrayPlaylist = ({ 
  title,
  songsCount,
  sharedCount, 
  listenersCount,
  downloadsCount
}: ICardArrayPlaylistProps) => {

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: '#2a2a2a',
        height: '80px',
        borderRadius: '16px',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 1.4
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box display='flex' alignItems='center' gap={2.5} >
          <Typography variant="h6" sx={{ mb: 0.5 }}>
            {title}
          </Typography>
          
          <Typography 
            pb={0.2}
            variant="h8" 
            sx={{ 
              color: 'text.secondary'
            }}
          >
            {songsCount} songs
          </Typography>
        </Box>
      </Box>

      {/* Stats */}
      <Box sx={{ display: 'flex', gap: 2, }}>
        {/* Shared */}
        <Box sx={{ display: 'flex', gap: 0.7, alignItems: 'center' }}>
          <SharedBrandSvg />
          <Typography variant="h8">
            {sharedCount} Shared
          </Typography>
        </Box>

        {/* Listeners */}
        <Box sx={{ display: 'flex', gap: 0.7, alignItems: 'center' }}>
          <HeadPhoneBrandSvg />
          <Typography variant="h8">
            {formatNumber(listenersCount)} Listeners
          </Typography>
        </Box>

        {/* Downloads */}
        <Box sx={{ display: 'flex', gap: 0.7, alignItems: 'center' }}>
          <DownloadBrandSvg />
          <Typography variant="h8">
            {formatNumber(downloadsCount)} Downloads
          </Typography>
        </Box>
      </Box>

      <Box
      position='absolute'
      right={-25}
      top='50%'
      sx={{
        transform: 'translate(-50%, -50%)', // Compensa el 50% del propio tamaño
      }}
      >
        <SecondaryButton
          text={secondaryButtonsArray[1].text} 
          icon={secondaryButtonsArray[1].icon} 
          onClick={secondaryButtonsArray[1].onClick}
        />
      </Box>
    </Box>
  );
};

export default CardArrayPlaylist;