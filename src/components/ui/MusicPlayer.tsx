// components/MusicPlayer.tsx
'use client'
import { useEffect, useRef, useState } from 'react';
import { artistPlayer, playerMusic } from '@/mock/musicPlayer.mock';
import { Box, Typography, LinearProgress, IconButton } from '@mui/material';
import Image from 'next/image';
import CardMenuPlayerMusic from './CardMenuPlayerMusic';

const MusicPlayer = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [progress, setProgress] = useState(artistPlayer.progress);
  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const controls = playerMusic.slice(0, 3);
  const artistMenu = playerMusic.slice(3, 6);
  const actions = playerMusic.slice(6, 9);
  const expandButton = playerMusic[9];

  const handleLike = () => {
    setLikes(prev => prev + 1);
    console.log('Likes:', likes + 1);
  };

  const handleDislike = () => {
    setDislikes(prev => prev + 1);
    console.log('Dislikes:', dislikes + 1);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const getActionHandler = (action: string) => {
    switch (action) {
      case 'like':
        return handleLike;
      case 'dislike':
        return handleDislike;
      case 'menu':
        return handleMenuOpen;
      default:
        return () => {};
    }
  };

  const handleProgressMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateProgress(e);
  };
  
  const handleProgressMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      updateProgress(e as any);
    }
  };
  
  const handleProgressMouseUp = () => {
    setIsDragging(false);
  };
  
  const updateProgress = (e: React.MouseEvent | MouseEvent) => {
    if (progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const x = (e as MouseEvent).clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setProgress(percentage);
      console.log(`Progress: ${percentage.toFixed(2)}%`);
    }
  };
  
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleProgressMouseMove);
      document.addEventListener('mouseup', handleProgressMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleProgressMouseMove);
      document.removeEventListener('mouseup', handleProgressMouseUp);
    };
  }, [isDragging]);

  return (
    <Box
      sx={{
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        height: '96px',
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: 'background.default',
        borderTop: 1,
        borderColor: 'grey.900',
        zIndex: 5,
        py: 1.5
      }}
    >
      {/* Progress Bar Container */}
      <Box 
      ref={progressBarRef}
      onMouseDown={handleProgressMouseDown}
      sx={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        height: 4,
        cursor: 'pointer'
        }}
        >
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 4,
            bgcolor: 'grey.900',
            '& .MuiLinearProgress-bar': {
              bgcolor: 'secondary.main'
            }
          }}
        />
        
        {/* Círculo en la punta */}
        <Box
          onMouseDown={handleProgressMouseDown} 
          sx={{
            position: 'absolute',
            top: -10,
            left: `${progress}%`,
            cursor: 'pointer',
            width: 24,
            height: 24,
            borderRadius: '50%',
            bgcolor: 'secondary.main',
            border: '4px solid',
            borderColor: "grey.900",
            transform: 'translateX(-50%)',
            transition: 'left 0.3s ease',
            zIndex: 1
          }}
        />
      </Box>

      <Box 
        display="flex" 
        alignItems="center" 
        width='100%'
        px={3.5}
        gap={2}
      >
        {/* Controls */}
        <Box 
          display="flex" 
          alignItems="center" 
          flex={0.75}
          gap={1}
        >
          {controls.map((control) => {
            const IconComponent = control.icon;
            return (
              <IconButton key={control.id} size="small">
                <IconComponent />
              </IconButton>
            );
          })}

          {/* Time */}
          <Typography ml={1.5} variant="h9" color="text.secondary">
            {artistPlayer.currentTime} / {artistPlayer.duration}
          </Typography>
        </Box>

        {/* Track Info */}
        <Box 
          display="flex" 
          alignItems="center" 
          gap={1.5} 
          flex={1}
          width='fit'
        >
          <Box
            position="relative"
            width={56}
            height={56}
            borderRadius="16px"
            overflow="hidden"
          >
            <Image
              src={artistPlayer.cover}
              alt={artistPlayer.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            gap={1}
            ml={0.2}
          >
            <Typography variant="h8" color="text.primary">
              {artistPlayer.title}
            </Typography>
            <Box
              display='flex'
              flexDirection='row'
              alignItems='center'
              gap={0.5}
            >
              <Typography variant="h9" color="text.secondary">
                {artistPlayer.artist}
              </Typography>
              <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
                gap={0.5}
              >
                <Typography variant="h9" color="text.secondary">•</Typography>
                <Typography variant="h9" color="text.secondary">{artistPlayer.listened}</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            ml={3}
            display='flex'
            flexDirection='row'
            alignItems='center'
            justifyContent='center'
            gap={1.3}
          >
            {artistMenu.map((item) => {
              const IconComponent = item.icon;
              return (
                <IconButton 
                  key={item.id} 
                  size="small"
                  onClick={getActionHandler(item.action)}
                >
                  <IconComponent />
                </IconButton>
              );
            })}
          </Box>
        </Box>

        {/* Actions */}
        <Box 
          display="flex" 
          alignItems="center" 
          gap={1}
        >
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
              width: 25,
              height: 25,
              borderRadius: '50%',
              bgcolor: 'primary.dark',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'primary.dark',
              ml: 4,
              '& svg': {
                fill: '#000',
                color: '#000',
                transition: '#000',
              },
              '& svg path': {
                fill: '#000',
              },
              '& svg circle': {
                fill: '#000',
              },
              '& svg rect': {
                fill: '#000',
              },
            }}
          >
            <Box pt={0.4}>
              {(() => {
                const ExpandIcon = expandButton.icon;
                return <ExpandIcon/>;
              })()}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Card Menu Player Music */}
      <CardMenuPlayerMusic
        menuPlayer={{
            open: Boolean(anchorEl),
            anchorEl: anchorEl,
            onClose: handleMenuClose
        }}
      />
    </Box>
  );
};

export default MusicPlayer;