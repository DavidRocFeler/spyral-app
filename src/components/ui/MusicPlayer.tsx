// components/MusicPlayer.tsx
import { artistPlayer, playerMusic } from '@/mock/musicPlayer.mock';
import { Box, Typography, LinearProgress, IconButton } from '@mui/material';
import Image from 'next/image';

const MusicPlayer = () => {
  const controls = playerMusic.slice(0, 3);
  const actions = playerMusic.slice(3, 9);
  const expandButton = playerMusic[9];

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'grey.900',
        zIndex: 1300,
        px: 2,
        py: 1.5
      }}
    >
      {/* Progress Bar */}
      <LinearProgress
        variant="determinate"
        value={artistPlayer.progress}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          bgcolor: 'grey.900',
          '& .MuiLinearProgress-bar': {
            bgcolor: 'secondary.main'
          }
        }}
      />

      <Box display="flex" alignItems="center" gap={2}>
        {/* Track Info */}
        <Box display="flex" alignItems="center" gap={1.5} flex={1}>
          <Box
            position="relative"
            width={48}
            height={48}
            borderRadius="8px"
            overflow="hidden"
          >
            <Image
              src={artistPlayer.cover}
              alt={artistPlayer.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
          <Box>
            <Typography variant="h8" color="text.primary">
              {artistPlayer.title}
            </Typography>
            <Typography variant="h9" color="text.secondary">
              {artistPlayer.artist}
            </Typography>
          </Box>
        </Box>

        {/* Controls */}
        <Box display="flex" alignItems="center" gap={1}>
          {controls.map((control) => {
            const IconComponent = control.icon;
            return (
              <IconButton key={control.id} size="small">
                <IconComponent />
              </IconButton>
            );
          })}
        </Box>

        {/* Time */}
        <Typography variant="h9" color="text.secondary">
          {artistPlayer.currentTime} / {artistPlayer.duration}
        </Typography>

        {/* Actions */}
        <Box display="flex" alignItems="center" gap={1}>
          {actions.map((action) => {
            const IconComponent = action.icon;
            return (
              <IconButton key={action.id} size="small">
                <IconComponent />
              </IconButton>
            );
          })}
          
          {/* Arrow Up Button */}
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              border: 1,
              borderColor: 'grey.900',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {(() => {
              const ExpandIcon = expandButton.icon;
              return <ExpandIcon />;
            })()}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MusicPlayer;