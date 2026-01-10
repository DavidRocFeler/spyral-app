'use client'
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import SwitchCustom from '@/components/ui/SwitchCustom';
import IconSpan from '@/components/ui/IconSpan';
import { ArrowDownSvg, LittleSpanSvg } from '@/assets/icons';
import { ISettingTagsList } from '@/types/song';

const columns = [
  { key: 'tagName', label: 'Tag Name', width: '25%' },
  { key: 'category', label: 'Category', width: '20%' },
  { key: 'type', label: 'Type', width: '15%' },
  { key: 'shareSettings', label: 'Share Settings', width: '20%' },
  { key: 'actions', label: 'Actions', width: '10%' },
];

const TagsSettingTable = ({ songTagsSettingListTable }: ISettingTagsList) => {
  const [permissions, setPermissions] = useState<Record<string, string>>(
    songTagsSettingListTable.reduce((acc, item) => {
      acc[item.id] = item.id;
      return acc;
    }, {} as Record<string, string>)
  );

  const handlePermissionChange = (taskId: string, newPermission: string) => {
    setPermissions(prev => ({
      ...prev,
      [taskId]: newPermission
    }));
  };

  const totalTasks = songTagsSettingListTable.length;
  const gridTemplateColumns = columns.map(col => col.width).join(' ');

  return (
    <Box sx={{ 
      width: '100%',
      overflow: 'visible',
    }}>
      {/* Header */}
      <Box sx={{ 
        display: 'grid',
        bgcolor: 'grey.900',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
        gridTemplateColumns,
        py: 1.9,
        pl: 2.8,
        borderBottom: '1px solid',
        borderColor: 'primary.main',
      }}>
        {columns.map((column) => (
        <Box 
          key={column.key}
          display='flex'
          alignItems='center'
          gap={0.7}
        >
            <Typography 
                color='text.secondary' 
                variant="h8" 
                ml={column.key === 'tagName' ? 0 : '15%'}
            >
                {column.label}
            </Typography>
            {column.key === 'category' && <ArrowDownSvg/>}
        </Box>
        ))}
      </Box>

      {/* Task Rows */}
      {songTagsSettingListTable.map((task, index) => {
        const isLastRow = index === totalTasks - 1;
        
        return (
          <Box 
            bgcolor='grey.900'
            key={task.id}
            sx={{ 
              pl: 3,
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
            {/* Tag name */}
            <Box
              sx={{ 
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                py: 1,
              }}
            >
             <Typography
                variant="h7" 
                bgcolor='background.paper'
                px={1.5}
                py={1}
                borderRadius='50px'
             > 
                {task.tagName}
             </Typography>
            </Box>

            {/* Category */}
            <Typography 
              variant="h7"
              ml='15%'
              sx={{ 
                py: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {task.category}
            </Typography>

            {/* Type */}
            <Typography
              variant='h7'
              py={1}
              ml='15%'
            >
              {task.type}
            </Typography>

            {/* Share Settings */}
            <Box
              display='flex'
              justifyContent='flex-start'
              py={1}
              ml='15%'
            >
              <SwitchCustom />
            </Box>

            {/* Actions */}
            <Box
              py={1}
              ml='15%'
            >
              <IconSpan
                icon={LittleSpanSvg}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default TagsSettingTable;