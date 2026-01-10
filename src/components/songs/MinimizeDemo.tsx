import { Box } from '@mui/material';
import JameArtur from '@/assets/jamesArthurTrack.png'
import { collaboratorsTrack } from '@/mock/collaboratorTrack.mock';
import MinimizeSongPlayer from './MinimizeSongPlayer';
import { IDemoProps } from '@/types/song';

// Demo component
const MinimizeDemo = ({
  onExpand,
  trackingStatus
}: IDemoProps) => {
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
        trackingStatus={trackingStatus}
      />
    </Box>
  );
};

export default MinimizeDemo;