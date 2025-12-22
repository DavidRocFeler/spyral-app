'use client';
import { Box, Typography } from '@mui/material';
import UploadBoxMain from '../ui/UploadBoxMain';
import { useMusicPlayerStore } from '@/store/useMusicPlayerStore';

const EmptyState = () => {
  const setCurrentTrack = useMusicPlayerStore((state) => state.setCurrentTrack);

  const handleMusicUpload = (file: File) => {
    const track = {
      file,
      name: file.name,
      url: URL.createObjectURL(file),
    };
    setCurrentTrack(track);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        overflowY: 'auto',
        bgcolor: 'primary.main',
        padding: 4,
        pb: 10,
      }}
    >
      <Box
        sx={{
          maxWidth: '650px',
          width: '100%',
          bgcolor: 'background.default',
          borderRadius: 8,
          padding: 4,
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" mb={4}>
          Start By Importing Your Music
        </Typography>

        {/* Upload Box - Ahora con callback */}
        <UploadBoxMain onFileUpload={handleMusicUpload} />

        {/* Divider Text */}
        <Typography variant="h7">
          or connect here an app to start importing
        </Typography>

        {/* App Icons */}
        <Box
          mt={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
          }}
        >
          {[1, 2, 3].map((item) => (
            <Box
              key={item}
              sx={{
                width: 40,
                height: 40,
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.15)',
                  transform: 'scale(1.05)',
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default EmptyState;