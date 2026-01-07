import { Box } from '@mui/material';
import JameArtur from '@/assets/jamesArthurTrack.png'
import { collaboratorsTrack } from '@/mock/collaboratorTrack.mock';
import SongPlayerCard from './SongPlayerCard';
import { IDemoProps } from '@/types/song';

// Demo component
const Demo = ({
  onMinimize, 
  trackingStatus
}: IDemoProps) => {
  return (
    <Box 
    width='100%'
    mb={3}
    >
      <SongPlayerCard
        coverImage={JameArtur}
        artistName="James Arthur"
        songTitle="Say You Won't Let Go"
        collaborators={collaboratorsTrack}
        lastUpdate="11 Jan 2025"
        duration="4:15"
        currentTime="0:00"
        onMinimize={onMinimize}
        trackingStatus={trackingStatus}
      />
    </Box>
  );
};

export default Demo;