// CardFileCollaborate.tsx
'use client'
import { Box, Typography } from '@mui/material';
import { FlexCenter } from '@/components/ui/FlexCenter';
import IconSpan from '@/components/ui/IconSpan';
import { ShareIconSvg } from '@/assets/icons';
import { IFileItem } from '@/types/song'; 

interface CardFileCollaborateProps {
  file: IFileItem;
}

const CardFileCollaborate = ({ file }: CardFileCollaborateProps) => {
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
        pr: 1,
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 2,
        overflow: 'hidden',
        width: 'calc(100% - 40px)'
      }}>
        {FileIcon && ( // ← AÑADE CONDICIONAL POR SI ES UNDEFINED
          <FlexCenter borderRadius='12px' px={1.2} py={1} bgcolor='background.paper'>
            <FileIcon />
          </FlexCenter>
        )}
        <Box display='flex' flexDirection='column' alignItems='flex-start' gap={1} sx={{ overflow: 'hidden' }}>
          <Typography variant='h8' noWrap sx={{ maxWidth: '100%' }}>
            {file.name} {/* ← VALOR POR DEFECTO */}
          </Typography>
          <Box display='flex' alignItems='center' gap={1}>
            <Typography variant='h9' color='text.secondary'>
              {file.size}
            </Typography>
            <Typography variant='h9' color='text.secondary'>
              •
            </Typography>
            <Typography variant='h9' color='text.secondary'>
              {file.type}
            </Typography>
          </Box>
        </Box>
      </Box>
      <FlexCenter>
        <IconSpan
          icon={ShareIconSvg}
          bgcolor='transparent'
        />
      </FlexCenter>
    </Box>
  );
};

export default CardFileCollaborate;