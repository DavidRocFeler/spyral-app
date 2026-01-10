import React from 'react';
import { Box, Typography, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconSpan from '@/components/ui/IconSpan';
import { IconDragSvg, SmallPlusBrandSvg } from '@/assets/icons';
import { ITaskTableComponentProps } from '@/types/song';

export type TaskStatus = 'not-started' | 'pending' | 'finished';

const getStatusColor = (status: TaskStatus): string => {
  switch (status) {
    case 'not-started':
      return '#FF1050';
    case 'pending':
      return '#FF6C10';
    case 'finished':
      return '#00CD0A';
    default:
      return '#808080';
  }
};

const getStatusLabel = (status: TaskStatus): string => {
  switch (status) {
    case 'not-started':
      return 'Not started';
    case 'pending':
      return 'Pending';
    case 'finished':
      return 'Finished';
    default:
      return '';
  }
};

const TaskTable = ({ taskTableData }: ITaskTableComponentProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedTaskId, setSelectedTaskId] = React.useState<string>('');

  const handleStatusClick = (event: React.MouseEvent<HTMLElement>, taskId: string) => {
    setAnchorEl(event.currentTarget);
    setSelectedTaskId(taskId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedTaskId('');
  };

  const statusOptions: TaskStatus[] = ['not-started', 'pending', 'finished'];
  
  const totalTasks = taskTableData.length;

  return (
    <Box sx={{ 
      width: '100%',
    }}>
      {/* Header */}
      <Box sx={{ 
        display: 'grid',
        bgcolor: 'grey.900',
        borderTopLeftRadius: '16px',
        borderTopRightRadius: '16px',
        gridTemplateColumns: '40px 1fr 130px 60px 45px',
        py: 1.5,
        px: 2,
        gap: 1,
        borderBottom: '1px solid',
        borderColor: 'primary.main',
      }}>
        <IconSpan
        icon={SmallPlusBrandSvg}
        borderRadius='8px'
        />
        <Typography bgcolor='' color='text.secondary' variant="h8" alignSelf='center'>
          Task
        </Typography>
        <Typography bgcolor='' color='text.secondary' variant="h8" alignSelf='center'>
          Added by
        </Typography>
        <Typography bgcolor='' color='text.secondary' variant="h8" alignSelf='center'>
          Date
        </Typography>
        <Typography bgcolor='' color='text.secondary' variant="h8" alignSelf='center'>
          Status
        </Typography>
      </Box>

      {/* Task Rows */}
      {taskTableData.map((task, index) => {
        // Determinar si es la última fila
        const isLastRow = index === totalTasks - 1;
        
        return (
          <Box 
            bgcolor='grey.900'
            key={task.id}
            sx={{ 
              py: 1.5,
              px: 2,
              gap: 1,
              display: 'grid',
              gridTemplateColumns: '40px 1fr 130px 60px 45px',
              ...(isLastRow ? {
                borderBottom: 'none',
                borderBottomRightRadius: '16px',
                borderBottomLeftRadius: '16px',
              } : {
                borderBottom: '1px solid',
                borderBottomRightRadius: '0px',
                borderBottomLeftRadius: '0px',
                borderColor: 'primary.main',
              }),
              alignItems: 'center',
            }}
          >
            <IconSpan
            icon={IconDragSvg}
            bgcolor='transparent'
            />
            
            <Typography variant="h8">
              {task.task}
            </Typography>
            
            <Typography variant="h8">
              {task.addedBy}
            </Typography>
            
            <Typography variant="h8">
              {task.date}
            </Typography>
            
            <Box 
              sx={{ 
                display: 'flex',
                alignItems: 'center',
                gap: 0.2,
                cursor: 'pointer'
              }}
              onClick={(e) => handleStatusClick(e, task.id)}
            >
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  backgroundColor: getStatusColor(task.status)
                }}
              />
              <KeyboardArrowDownIcon sx={{ color: '#FFF', fontSize: 20 }} />
            </Box>
          </Box>
        );
      })}

      <Box sx={{ 
        display: 'flex',
        gap: 3,
        pt: 3,
        justifyContent: 'flex-end'
      }}>
        {statusOptions.map((status) => (
          <Box key={status} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: getStatusColor(status)
              }}
            />
            <Typography variant='h9' color='text.secondary'>
              {getStatusLabel(status)}
            </Typography>
          </Box>
        ))}
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {statusOptions.map((status) => (
          <MenuItem key={status} onClick={handleClose}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: getStatusColor(status)
                }}
              />
              {getStatusLabel(status)}
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default TaskTable;