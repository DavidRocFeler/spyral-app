import { ArrowRightSvg } from '@/assets/icons';
import { Box, Typography } from '@mui/material';
import CardArrayPlaylist from './CardPlayList';
import { playlistsList } from '@/mock/playlist.mock';

const CardYourPlaylists = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
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
              bgcolor: '#2a2a2a',
              borderRadius: '20px',
              px: 1.5,
              py: 0.5,
            }}
          >
            <Typography 
              variant="h8" 
              sx={{ 
                color: 'text.secondary'
              }}
            >
              8 playlists shared
            </Typography>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer' }}>
          <Typography variant="h8">
            View all
          </Typography>
          <ArrowRightSvg />
        </Box>
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