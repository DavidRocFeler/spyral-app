'use client'
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import SelectCustom from '@/components/ui/SelectCustom';
import { ISettingUsersList } from '@/types/song';


const columns = [
  { key: 'name', label: 'Name', width: '33%' },
  { key: 'album', label: 'Album', width: '33%' },
  { key: 'permission', label: 'Permission', width: '33%' },
];

const AddUserSetting = ({ songUserSettingListTable }: ISettingUsersList) => {
  const [permissions, setPermissions] = useState<Record<string, string>>(
    songUserSettingListTable.reduce((acc, item) => {
      acc[item.id] = item.permission;
      return acc;
    }, {} as Record<string, string>)
  );

  const handlePermissionChange = (taskId: string, newPermission: string) => {
    setPermissions(prev => ({
      ...prev,
      [taskId]: newPermission
    }));
  };

  const totalTasks = songUserSettingListTable.length;
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
        gap: 2,
        borderBottom: '1px solid',
        borderColor: 'primary.main',
      }}>
        {columns.map((column) => (
          <Typography 
            key={column.key}
            color='text.secondary' 
            variant="h8" 
          >
            {column.label}
          </Typography>
        ))}
      </Box>

      {/* Task Rows */}
      {songUserSettingListTable.map((task, index) => {
        const isLastRow = index === totalTasks - 1;
        
        return (
          <Box 
            bgcolor='grey.900'
            key={task.id}
            sx={{ 
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
              variant="h7" 
              sx={{ 
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {task.name}
            </Typography>

            {/* Album */}
            <Typography 
              variant="h7"
              sx={{ 
                ml: 0.9,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {task.album}
            </Typography>

            {/* Permission */}
            <Box>
              <SelectCustom
                ptIcon={0.1}
                bgcolor='transparent'
                fullWidth={false}
                width='fit-content'
                variant='h7'
                typographyOptions='h7'
                options={[permissions[task.id]]}
                value={permissions[task.id]}
                onChange={(value) => handlePermissionChange(task.id, value)}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default AddUserSetting;