// VersionHistory.tsx
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface Version {
  id: string;
  name: string;
  timestamp: string;
  size: string;
}

const mockVersions: Version[] = [
  { id: '1', name: 'First Mix', timestamp: 'December 5, 10:23 AM', size: '2.4 MB' },
  { id: '2', name: 'Second Mix', timestamp: 'December 6, 3:45 PM', size: '3.1 MB' },
];

const VersionHistory = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', borderRadius: '24px', py: 2, px: 3, height: '100%' }}>
      
      <Box mb={2} pb={1} borderBottom='1px solid' borderColor='grey.900' >
        <Typography variant='h10' fontWeight={700}>
            Latest version
        </Typography>
        
        <List sx={{ p: 0, mt: 0.5 }}>
            {mockVersions.map((version) => (
            <ListItem
                key={version.id}
                sx={{
                p: 0,
                mb: 1,
                }}
            >
                <ListItemText
                primary={
                    <Typography 
                    variant='h7' 
                    color='text.secondary'
                    sx={{ fontSize: '14px' }}
                    >
                    {version.name}
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
            ))}
        </List>
      </Box>
      
      <Box>
        <Typography variant='h10' fontWeight={700}>
            Versions shared
        </Typography>
        
        <Box
            sx={{
            pt: 1,
            px: 0,
            }}
        >
            <Typography variant='h7' color='text.secondary'>
            Nothing here yet
            </Typography>
        </Box>
        </Box>
    </Box>
  );
};

export default VersionHistory;