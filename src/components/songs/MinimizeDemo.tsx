import { Box } from '@mui/material';
import JameArtur from '@/assets/jamesArthurTrack.png'
import { collaboratorsTrack } from '@/mock/collaboratorTrack.mock';
import SongPlayerCard from './SongPlayerCard';
import MinimizeSongPlayer from './MinimizeSongPlayer';

// Demo component
const MinimizeDemo = ({ onExpand }: { onExpand: () => void }) => {
  return (
    <Box 
    width='100%'
    mb={3}
    >
      <MinimizeSongPlayer
        coverImage={JameArtur}
        artistName="James Arthur"
        songTitle="Say You Won't Let Go"
        collaborators={collaboratorsTrack}
        lastUpdate="11 Jan 2025"
        duration="4:15"
        currentTime="0:00"
        onExpand={onExpand}
      />
    </Box>
  );
};

export default MinimizeDemo;