import { Box, Typography } from '@mui/material';
import CardArrayLatest from './CardArrayLatest';
import { latestReleases } from '@/mock/latestRelease.mock';
import ViewAll from '@/components/ui/ViewAll';

const CardLatestReleases = () => {
  return (
    <Box
      sx={{
        bgcolor: '#1a1a1a',
        height: '310px',
        borderRadius: '24px',
        p: 3,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">
          Latest Releases
        </Typography>
        
        <ViewAll/>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {latestReleases.map((release) => (
          <CardArrayLatest
            key={release.id}
            title={release.title}
            artist={release.artist}
            duration={release.duration}
            views={release.views}
            earnings={release.earnings}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CardLatestReleases;