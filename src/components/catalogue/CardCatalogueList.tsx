import React from 'react';
import { Box, Typography } from '@mui/material';
import { ShareLinkIcon } from '@/assets/icons';
import { ICatalogueList } from '@/types/catalogue';
import SecondaryButton from '../ui/SecondaryButton';

export type TaskStatus = 'not-started' | 'pending' | 'finished';

const columns = [
  { key: 'name', label: 'Name', width: '180px' },
  { key: 'playlist', label: 'Playlist', width: '200px' },
  { key: 'track', label: 'Track', width: '90px' },
  { key: 'status', label: 'Status', width: '120px' },
  { key: 'link', label: 'Link', width: '140px' }
];

const CardCatalogueList = ({ catalogueListTable }: ICatalogueList) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedTaskId, setSelectedTaskId] = React.useState<string>('');

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedTaskId('');
  };

  const totalTasks = catalogueListTable.length;
  
  const gridTemplateColumns = columns.map(col => col.width).join(' ');

  return (
    <Box sx={{ 
      width: '100%',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <Box sx={{ 
        display: 'grid',
        bgcolor: 'grey.900',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
        gridTemplateColumns,
        py: 1.5,
        pl: 3,
        gap: 2,
        borderBottom: '1px solid',
        borderColor: 'primary.main',
      }}>
        {columns.map((column) => (
          <Typography 
            key={column.key}
            color='text.secondary' 
            variant="h8" 
            alignSelf='center'
          >
            {column.label}
          </Typography>
        ))}
      </Box>

      {/* Task Rows */}
      {catalogueListTable.map((task, index) => {
        const isLastRow = index === totalTasks - 1;
        
        return (
          <Box 
            bgcolor='grey.900'
            key={task.id}
            sx={{ 
              py: 1.5,
              px: 3,
              gap: 2,
              display: 'grid',
              gridTemplateColumns,
              alignItems: 'center',
              ...(isLastRow ? {
                borderBottom: 'none',
                borderBottomRightRadius: '16px',
                borderBottomLeftRadius: '16px',
              } : {
                borderBottom: '1px solid',
                borderColor: 'primary.main',
              }),
            }}
          >            
            {/* Name */}
            <Typography 
              variant="h8" 
              py={1.5}
              sx={{ 
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {task.name}
            </Typography>
            
            {/* Playlist */}
            <Typography 
              variant="h8"
              sx={{ 
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {task.playlist}
            </Typography>
            
            {/* Track */}
            <Typography 
              variant="h8"
              sx={{ 
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {task.track}
            </Typography>
            
            {/* Status */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <SecondaryButton
                text={task.status}
                px={1.8}
                pl={1.8}
              />
            </Box>
            
            {/* Link */}
            <SecondaryButton
              text='Share link'
              width='fit-content'
              px={1.8}
              pl={1.8}
              icon={ShareLinkIcon}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default CardCatalogueList;