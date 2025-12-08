'use client'
import { useState, useEffect, useRef } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import JameArtur from '@/assets/UserMason.png'

// Icons - reemplaza con tus propios iconos
const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8 5v14l11-7L8 5z" fill="currentColor" />
  </svg>
);

const PauseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="6" y="4" width="4" height="16" fill="currentColor" />
    <rect x="14" y="4" width="4" height="16" fill="currentColor" />
  </svg>
);

const EditIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M11.5 1.5l3 3-9 9H2.5v-3l9-9z" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

const UpArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 14V6M10 6L6 10M10 6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8l3 3 7-7" stroke="#000" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Waveform component
const AudioWaveform = ({ isPlaying }: { isPlaying: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const progressRef = useRef(0);

  // Generar alturas aleatorias para las barras
  const [bars] = useState(() => 
    Array.from({ length: 80 }, () => Math.random() * 0.8 + 0.2)
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      const barWidth = 3;
      const gap = 2;
      const totalBarWidth = barWidth + gap;

      ctx.clearRect(0, 0, width, height);

      bars.forEach((barHeight, index) => {
        const x = index * totalBarWidth;
        const normalizedHeight = barHeight * height;
        const y = (height - normalizedHeight) / 2;

        // Color basado en si está antes o después del progreso
        const barProgress = (index / bars.length) * 100;
        if (barProgress <= progressRef.current) {
          ctx.fillStyle = '#E2FC0B'; // Color activo (amarillo)
        } else {
          ctx.fillStyle = '#808080'; // Color inactivo (gris)
        }

        // Añadir animación sutil si está reproduciendo
        let animatedHeight = normalizedHeight;
        if (isPlaying && barProgress <= progressRef.current + 5) {
          const oscillation = Math.sin(Date.now() / 100 + index) * 2;
          animatedHeight = normalizedHeight + oscillation;
        }

        const animatedY = (height - animatedHeight) / 2;
        ctx.fillRect(x, animatedY, barWidth, animatedHeight);
      });

      if (isPlaying) {
        progressRef.current += 0.15;
        if (progressRef.current > 100) {
          progressRef.current = 0;
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, bars]);

  return (
    <canvas
      ref={canvasRef}
      width={700}
      height={80}
      style={{
        width: '100%',
        height: '80px',
        maxWidth: '700px'
      }}
    />
  );
};

// Main component
interface Collaborator {
  id: string;
  name: string;
  avatar: StaticImageData | string;
}

interface SongPlayerCardProps {
  coverImage: StaticImageData | string;
  artistName: string;
  songTitle: string;
  collaborators: Collaborator[];
  lastUpdate: string;
  duration: string;
  currentTime: string;
}

const SongPlayerCard = ({
  coverImage,
  artistName,
  songTitle,
  collaborators,
  lastUpdate,
  duration = '4:15',
  currentTime = '0:00'
}: SongPlayerCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Box
      sx={{
        bgcolor: '#1a1a1a',
        borderRadius: '16px',
        p: 3,
        maxWidth: '800px',
        mx: 'auto',
        display: 'flex',
        gap: 3
      }}
    >
      {/* Cover Image */}
      <Box
        sx={{
          position: 'relative',
          width: 250,
          height: 250,
          flexShrink: 0,
          borderRadius: '12px',
          overflow: 'hidden'
        }}
      >
        <Image
          src={coverImage}
          alt={songTitle}
          width={250}
          height={250}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
        />
        {/* Edit button */}
        <IconButton
          sx={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            bgcolor: 'rgba(0,0,0,0.6)',
            color: 'white',
            width: 32,
            height: 32,
            '&:hover': {
              bgcolor: 'rgba(0,0,0,0.8)'
            }
          }}
        >
          <EditIcon />
        </IconButton>
      </Box>

      {/* Content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
              <Typography variant="h5" fontWeight="bold" color="white">
                {songTitle}
              </Typography>
              <IconButton size="small" sx={{ color: '#808080' }}>
                <EditIcon />
              </IconButton>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Typography variant="body2" color="#808080">
                {artistName}
              </Typography>
              <IconButton size="small" sx={{ color: '#808080' }}>
                <EditIcon />
              </IconButton>
            </Box>

            {/* Collaborators */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Typography variant="body2" color="#808080">
                Collaborators
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                {collaborators.map((collab) => (
                  <Box
                    key={collab.id}
                    sx={{
                      position: 'relative',
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '2px solid #1a1a1a'
                    }}
                  >
                    <Image
                      src={JameArtur}
                      alt={collab.name}
                      width={24}
                      height={24}
                      style={{ objectFit: 'cover' }}
                    />
                  </Box>
                ))}
                <IconButton
                  size="small"
                  sx={{
                    width: 24,
                    height: 24,
                    bgcolor: '#333',
                    color: '#808080',
                    fontSize: '14px',
                    '&:hover': { bgcolor: '#444' }
                  }}
                >
                  +
                </IconButton>
              </Box>
            </Box>

            {/* Last update */}
            <Typography variant="caption" color="#808080">
              Last update: {lastUpdate}
            </Typography>
          </Box>

          {/* Up arrow button */}
          <IconButton
            sx={{
              bgcolor: '#2a2a2a',
              color: 'white',
              width: 36,
              height: 36,
              '&:hover': { bgcolor: '#3a3a3a' }
            }}
          >
            <UpArrowIcon />
          </IconButton>
        </Box>

        {/* Controls */}
        <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center' }}>
          <IconButton
            onClick={handlePlayPause}
            sx={{
              bgcolor: 'white',
              color: 'black',
              width: 48,
              height: 48,
              '&:hover': { bgcolor: '#f0f0f0' }
            }}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </IconButton>

          <IconButton
            sx={{
              bgcolor: '#E2FC0B',
              color: 'black',
              borderRadius: '20px',
              px: 2,
              height: 40,
              '&:hover': { bgcolor: '#d0eb00' }
            }}
          >
            <Typography variant="body2" fontWeight="bold" sx={{ mr: 0.5 }}>
              Register
            </Typography>
            <CheckIcon />
          </IconButton>
        </Box>

        {/* Waveform */}
        <Box sx={{ position: 'relative', mb: 1 }}>
          <AudioWaveform isPlaying={isPlaying} />
        </Box>

        {/* Time */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="caption" color="#808080">
            {currentTime}
          </Typography>
          <Typography variant="caption" color="#808080">
            {duration}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

// Demo component
const Demo = () => {
  const mockCollaborators = [
    { id: '1', name: 'User 1', avatar: 'https://i.pravatar.cc/150?img=12' },
    { id: '2', name: 'User 2', avatar: 'https://i.pravatar.cc/150?img=45' },
    { id: '3', name: 'User 3', avatar: 'https://i.pravatar.cc/150?img=33' }
  ];

  return (
    <Box sx={{ bgcolor: '#000', minHeight: '100vh', p: 4 }}>
      <SongPlayerCard
        coverImage={JameArtur}
        artistName="James Arthur"
        songTitle="Say You Won't Let Go"
        collaborators={mockCollaborators}
        lastUpdate="11 Jan 2025"
        duration="4:15"
        currentTime="0:00"
      />
    </Box>
  );
};

export default Demo;