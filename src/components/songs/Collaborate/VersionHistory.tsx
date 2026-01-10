// VersionHistory.tsx
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import IconSpan from '@/components/ui/IconSpan';
import { FlexCenter } from '@/components/ui/FlexCenter';
import { ICollaboratorSongHistory } from '@/types/song';
import { LittleSpanSvg } from '@/assets/icons';

const VersionHistory = ({
latestVersion,
sharedVersion
}:ICollaboratorSongHistory) => {
  return (
    <Box sx={{ bgcolor: 'background.default', borderRadius: '24px', py: 2, px: 3, height: '100%' }}>
      
      <Box mb={2} pb={1} borderBottom='1px solid' borderColor='grey.900'>
        <Typography variant='h10' fontWeight={700}>
          Latest version
        </Typography>
        
        <List sx={{ p: 0, mt: 0.5 }}>
          {latestVersion.map((version) => (
            <Box key={version.id} sx={{ mb: 2 }}>
              <FlexCenter sx={{
                width: '100%',
                mb: -1
              }}>
                <Typography mr='auto' variant='h8'>
                  {version.music}
                </Typography>
                <Box mr={-2}>
                  <IconSpan
                    icon={LittleSpanSvg}
                    bgcolor='transparent'
                  />
                </Box>
              </FlexCenter>
              
              <ListItem sx={{ p: 0, mb: 1 }}>
                <ListItemText
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.5
                  }}
                  primary={
                    <Typography 
                      variant='h7' 
                      color='text.secondary'
                      sx={{ fontSize: '14px' }}
                    >
                      {version.artist}
                    </Typography>
                  }
                  secondary={
                    <Typography 
                      variant='h7' 
                      color='text.secondary'
                      sx={{ fontSize: '12px' }}
                    >
                      {version.timestamp}
                    </Typography>
                  }
                />
              </ListItem>
            </Box>
          ))}
        </List>
      </Box>
      
      {/* Versions Shared Section */}
      <Box>
        <Typography variant='h10' fontWeight={700}>
          Versions shared
        </Typography>
        
        <Box sx={{ pt: 1, px: 0 }}>
          {sharedVersion.length === 0 ? (
            <Typography variant='h7' color='text.secondary'>
              Nothing here yet
            </Typography>
          ) : (
            <List sx={{ p: 0 }}>
              {sharedVersion.map((version) => (
                <Box key={version.id} sx={{ mb: 2 }}>
                  <FlexCenter sx={{
                    width: '100%',
                    mb: -1
                  }}>
                    <Typography mr='auto' variant='h8'>
                      {version.music}
                    </Typography>
                    <Box mr={-2}>
                      <IconSpan
                        icon={LittleSpanSvg}
                        bgcolor='transparent'
                      />
                    </Box>
                  </FlexCenter>
                  
                  <ListItem sx={{ p: 0, mb: 1 }}>
                    <ListItemText
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 0.5
                      }}
                      primary={
                        <Typography 
                          variant='h7' 
                          color='text.secondary'
                          sx={{ fontSize: '14px' }}
                        >
                          {version.artist}
                        </Typography>
                      }
                      secondary={
                        <Typography 
                          variant='h7' 
                          color='text.secondary'
                          sx={{ fontSize: '12px' }}
                        >
                          {version.timestamp}
                          {version.size && ` • ${version.size}`}
                        </Typography>
                      }
                    />
                  </ListItem>
                </Box>
              ))}
            </List>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default VersionHistory;