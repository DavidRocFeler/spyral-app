import { MenuPlayControlSvg, PlayControlIconSvg, ShareIconSvg } from "@/assets/icons";
import { ICardTracksProps } from "@/types/playControl";
import { Box, Typography } from "@mui/material";

  
  const CardTracks = ({ track }: ICardTracksProps) => {

    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '67px',
          justifyContent: 'space-between',
          py: 1.2, 
          px: 2,
          borderRadius: '12px',
          bgcolor: 'grey.900',
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h8"
          >
            {track.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.7, alignItems: 'center' }}>
            <Typography
              variant="h9"
            >
              {track.artist}
            </Typography>
            <Box
               display='flex'
               flexDirection='row'
               gap={0.5}
               ml={0.5}
            >
              <Typography
                variant="h9"
                color="text.secondary"            
              >
              • 
              </Typography>
              <Typography
                variant="h9"
                color="text.secondary"
              >
              {track.duration}
              </Typography>
            </Box>
          </Box>
        </Box>
  
        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Box
            sx={{
              bgcolor: 'background.paper',
              borderRadius: '50px',
              display: 'flex',
              justifyContent: 'center',
              py: 0.9,
              gap: 1.5,
              width: '76px',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <Typography
              sx={{
                color: '#fff',
                fontSize: '12px',
                fontWeight: 500
              }}
            >
              Play
            </Typography>
            <PlayControlIconSvg/>
          </Box>
  
          <Box
            sx={{
              bgcolor: 'background.paper',
              borderRadius: '50px',
              width: '88px',
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              py: 0.9,
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            <Typography
              sx={{
                color: '#fff',
                fontSize: '12px',
                fontWeight: 500
              }}
            >
              Share
            </Typography>
            <ShareIconSvg/>
          </Box>
  
          <Box
            sx={{
              bgcolor: 'background.paper',
              borderRadius: '50px',
              padding: 1,
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <MenuPlayControlSvg/>
          </Box>
        </Box>
      </Box>
    );
  };

export default CardTracks;
  