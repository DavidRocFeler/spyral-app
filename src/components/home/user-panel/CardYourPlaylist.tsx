import { ArrowRightSvg } from '@/assets/icons';
import { Box, Typography } from '@mui/material';
import CardArrayPlaylist from './CardPlayList';
import { playlistsList } from '@/mock/playlist.mock';
import ViewAll from '@/components/ui/ViewAll';
import CardSharePlayList from './CardSharePlayList';

const CardYourPlaylists = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        height: '272px',
        borderRadius: '24px',
        p: 3,
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h4">
            Your Playlists
          </Typography>
          
          <Box
            sx={{
              bgcolor: 'background.paper',
              borderRadius: '20px',
              px: 1.5,
              py: 0.5,
            }}
          >
            <Typography 
              variant="h8" 
            >
              8 playlists shared
            </Typography>
          </Box>
        </Box>
        
        <ViewAll/>
      </Box>

      {/* Playlists List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {playlistsList.map((playlist) => (
          <CardArrayPlaylist
            key={playlist.id}
            title={playlist.title}
            songsCount={playlist.songsCount}
            sharedCount={playlist.sharedCount}
            listenersCount={playlist.listenersCount}
            downloadsCount={playlist.downloadsCount}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CardYourPlaylists;