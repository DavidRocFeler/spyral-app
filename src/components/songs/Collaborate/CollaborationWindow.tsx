// CollaborationWindow.tsx
import { ArrowDownSvg } from '@/assets/icons';
import BoxTextField from '@/components/ui/BoxTextField';
import { Box, Typography } from '@mui/material';
import { ICardCommentsComponentProps } from '@/types/song';
import CardComments from './CardComment';

const CollaborationWindow = ({cardCommentsData}: ICardCommentsComponentProps) => {
  // Verificar si hay comentarios
  const hasComments = cardCommentsData && cardCommentsData.length > 0;

  return (
    <Box
      sx={{
        bgcolor: 'background.default', 
        borderRadius: '24px', 
        px: 2.5, 
        py: 3,
        height: '100%' 
      }}
    >
      <Typography variant='h3' mb={4}>
        Collaboration Window
      </Typography>

      {/* Renderizar CardComments solo si hay comentarios */}
      {hasComments ? (
        <CardComments cardCommentsData={cardCommentsData} />
      ) : (
        <Box
          sx={{
            typography: 'h7',
            color: 'text.secondary',
            lineHeight: '1.2rem',
            mb: 2 // Agregado margen inferior para separación
          }}
        >
          No comments have been added yet. Share your version and start receiving feedback!
        </Box>
      )}
      
      <BoxTextField
        boxmt={2.5}
        flexDirection='row-reverse'
        IconSvg={ArrowDownSvg}
      />
    </Box>
  );
};

export default CollaborationWindow;