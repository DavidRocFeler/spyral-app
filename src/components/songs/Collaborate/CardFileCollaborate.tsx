// CardFileCollaborate.tsx
'use client'
import { Box, Typography } from '@mui/material';
import { FlexCenter } from '@/components/ui/FlexCenter';
import IconSpan from '@/components/ui/IconSpan';
import { ShareIconSvg } from '@/assets/icons';
import { IFileItem } from '@/types/song'; 

interface CardFileCollaborateProps {
  file: IFileItem;
  iconSpan?: boolean; // Prop opcional
  height?: string;
  width?: string;
  px?: number;
  py?: number;
}

const CardFileCollaborate = ({ 
  file, 
  iconSpan = true,
  height,
  width,
  px = 1.2,
  py = 1
}: CardFileCollaborateProps) => {
  const FileIcon = file.fileIcon;
  
  return (
    <Box
      sx={{
        bgcolor: 'grey.900',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '16px',
        height: '56px',
        width: '100%',
        p: 1.5,
        pr: iconSpan ? 1 : 1.5, // Ajusta el padding si no hay iconSpan
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 2,
        overflow: 'hidden',
        width: iconSpan ? 'calc(100% - 40px)' : '100%' // Ajusta el ancho
      }}>
        {FileIcon && (
          <FlexCenter 
          borderRadius='12px' 
          px={px} 
          py={py} 
          bgcolor='background.paper'
          sx={{
            height: height,
            width: width
          }}
          >
            <FileIcon />
          </FlexCenter>
        )}
        <Box display='flex' flexDirection='column' alignItems='flex-start' gap={1}>
          <Typography variant='h8' sx={{ maxWidth: '100%' }}>
            {file.name}
          </Typography>
          <Box display='flex' alignItems='center' gap={0.3}>
            <Typography variant='h9' color='text.secondary'>
              {file.type}
            </Typography>
            <Typography variant='h9' color='text.secondary'>
              •
            </Typography>
            <Typography variant='h9' color='text.secondary'>
              {file.size}
            </Typography>
          </Box>
        </Box>
      </Box>
      {iconSpan && ( // ← CONDICIONAL PARA MOSTRAR/OCULTAR IconSpan
        <FlexCenter>
          <IconSpan
            icon={ShareIconSvg}
            bgcolor='transparent'
          />
        </FlexCenter>
      )}
    </Box>
  );
};

export default CardFileCollaborate;