// components/EmptyState/EmptyState.tsx
import { Box, Typography } from '@mui/material';
import { PlusYellowSvg } from '@/assets/icons';

const EmptyState = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        bgcolor: 'primary.main',
        padding: 4,
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
        <Typography
          variant="h3"
          mb={4}
        >
          Start By Importing Your Music
        </Typography>

        {/* Upload Box */}
        <Box
          mb={3}
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 6,
            padding: 6,
            border: '2px dashed',
            borderColor: 'grey.900',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            '&:hover': {
              borderColor: 'rgba(226, 252, 11, 0.5)',
              bgcolor: 'rgba(0, 0, 0, 0.4)',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 2,
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <PlusYellowSvg/>
            </Box>
          </Box>

          <Box
          display='flex'
          flexDirection='column'
          >
            <Typography
              variant="h10"
              color= 'text.secondary'
            >
              Drag and drop files here or{' '}
              <Box
                component="span"
                sx={{
                  color: 'secondary.main',
                  fontWeight: 450,
                }}
              >
                Browse
              </Box>
            </Typography>

            <Typography
              variant="h10"
              color= 'text.secondary'
            >
              Supported formats include: MP3, WAV, and FLAC.
            </Typography>
          </Box>
        </Box>

        {/* Divider Text */}
        <Typography
          variant='h7'
        >
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