import { MenuPlayControlSvg, PlayControlIconSvg, ShareIconSvg, StatusDraftIcon, StatusPendingIcon, StatusPublishedIcon } from "@/assets/icons";
import { ICardTrackPersonalProps } from "@/types/catalogue";
import { Box, Typography } from "@mui/material";
import { FlexColumn } from "../ui/FlexColumn";
  
  const CardTrackPersonal = ({ 
    track 
  }: ICardTrackPersonalProps) => {

    const getStatusIcon = (status: string) => {
      const statusLower = status.toLowerCase();
      
      if (statusLower === 'pending') return <StatusPendingIcon />;
      if (statusLower === 'draft') return <StatusDraftIcon />;
      if (statusLower === 'published') return <StatusPublishedIcon />;
      
      return <StatusPendingIcon />; 
    };

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
        <FlexColumn sx={{ 
          gap: 1.5,
          alignItems: 'flex-start'
          }}>
          <Typography
            variant="h8"
          >
            {track.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.7, alignItems: 'center' }}>
            <Typography
              variant="h9"
              color="secondary.main"
            >
              {track.status}
            </Typography>
            {getStatusIcon(track.status)} 
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
        </FlexColumn>
  
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
              display: track.display || 'flex',
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

export default CardTrackPersonal;
  