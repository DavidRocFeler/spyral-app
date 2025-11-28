import { Box } from '@mui/material';
import PlayControlCover from '@/components/play-control/PlayControlCover';
import RelatedTracks from '@/components/play-control/RelatedTracks';

// Main PlayControl Page
const PlayControlPage = () => {
  return (
    <Box
      sx={{
        height: '878px',
        width: '100%',
        bgcolor: 'primary.main',
        display: 'flex',
        gap: '32px',
        px: 6,
        py: 3
      }}
    >
      <PlayControlCover />
      <RelatedTracks />
    </Box>
  );
};

export default PlayControlPage;