import { ISongPlayerCardProps } from "@/types/song";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CollaboratorTrack from "@/components/songs/CollaboratorTrack";
import JamesArthur from "@/assets/jamesArthurTrack.png"
import { collaboratorsTrack } from "@/mock/collaboratorTrack.mock";

const PlayerRegisterMinimized = ({
  coverImage = JamesArthur,
  artistName = 'Jame Arthur',
  songTitle = "Say you won't let's go",
  collaborators = collaboratorsTrack,
}: ISongPlayerCardProps ) => {
  return (
    <Box    
      position='relative'
      sx={{
        borderRadius: '40px',
        p: 0,
        width: '100',
        mx: 'auto',
        display: 'flex',
        alignItems: 'start',
        gap: 5
      }}
    >
      {/* Cover Image */}
      <Box
        sx={{
          position: 'relative',
          width: 120,
          height: 120,
          flexShrink: 0,
          borderRadius: '12px',
          overflow: 'hidden'
        }}
      >
        <Image
          src={coverImage}
          alt={songTitle}
          width={120}
          height={120}
          priority
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%'
          }}
        />
      </Box>

      {/* Content */}
      <Box 
        alignItems='flex-start'
        sx={{
          pt: 0.5, 
          display: 'flex', 
          flexDirection: 'column'
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 3.5 }}>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
              <Typography variant="h4">
                {songTitle}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Typography variant="h8">
                Author
              </Typography>
              <Typography variant="h7" pb={0.1}>
                {artistName}
              </Typography>
            </Box>

            {/* Collaborators */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Typography variant="h8">
                Collaborators
              </Typography>
              <Box display='flex' gap={0.5} alignItems='center'>
                {collaborators.length > 0 ? (
                  <CollaboratorTrack collaborators={collaborators} />
                ) : (
                  <Typography variant="body2" color="text.disabled">
                    No collaborators
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};  

export default PlayerRegisterMinimized;