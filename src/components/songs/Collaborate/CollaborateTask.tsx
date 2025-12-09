import { Box, Grid } from '@mui/material';
import VersionHistory from './VersionHistory';
import FilesPanel from './FilesPanel';
import TodoList from './TodoList';
import CollaborationWindow from './CollaborationWindow';
import { CollaborationBrandSvg } from '@/assets/icons';
import TitleIcon from '@/components/ui/TitleIcon';

const CollaborateTask = () => {
  return (
    <Box>
        <TitleIcon
        icon={CollaborationBrandSvg}
        text='Collaborate'
        />
        <Grid
        container
        spacing={2}
        sx={{
            height: '600px',
            width: '100%',
        }}
        >
            {/* Primera columna: 220px */}
            <Grid 
                size={2.3} // ≈ 220px del total 1164px
                sx={{ 
                height: '850px',
                display: 'flex',
                flexDirection: 'column',
                }}
            >
                <VersionHistory />
            </Grid>
            
            {/* Segunda columna: 560px */}
            <Grid 
                size={5.9} // ≈ 560px del total 1164px
                container
                direction="column"
                sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                }}
            >
                <Grid display='flex' flexDirection='column' gap={2} flex={1}>
                <FilesPanel/>
                <TodoList/>
                </Grid>
            </Grid>
            
            {/* Tercera columna: 384px */}
            <Grid 
                size={3.8} // ≈ 384px del total 1164px
                sx={{ 
                height: 'fit-content',
                display: 'flex',
                flexDirection: 'column',
                }}
            >
                <CollaborationWindow/>
            </Grid>
        </Grid>
    </Box>
  );
};

export default CollaborateTask;