// TodoList.tsx
import { Box, Typography } from '@mui/material';
import { FlexCenter } from '@/components/ui/FlexCenter';
import TextButton from '@/components/ui/TextButton';
import { CheckIconBrandSvg, PlusSvg, TrashGreyIconSvg } from '@/assets/icons';
import { FlexColumn } from '@/components/ui/FlexColumn';
import SecondaryButton from '@/components/ui/SecondaryButton';
import TaskTable from './TaskTable';
import { ITaskTableComponentProps } from '@/types/song';

const TodoList = ({taskTableData}: ITaskTableComponentProps) => {
  // Verificar si hay tareas
  const hasTasks = taskTableData && taskTableData.length > 0;

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
      <FlexCenter
        mb={4}
        sx={{
          width: '100%',
        }}
      >
        <Typography mr='auto' variant='h3'>
          To-Do List
        </Typography>
        <TextButton
          text='Clear finished task'
          icon={TrashGreyIconSvg}
          gap={0.7}
          iconPb={0.3}
        />
      </FlexCenter>
      
      {/* Renderizar condicionalmente según si hay tareas */}
      {hasTasks ? (
        // Si HAY tareas: Mostrar TaskTable
        <TaskTable taskTableData={taskTableData} />
      ) : (
        // Si NO HAY tareas: Mostrar mensaje "All Done!"
        <FlexColumn>
          <CheckIconBrandSvg/>
          
          <Typography mt={2} variant='h4'>
            All Done!
          </Typography>
          
          <Typography lineHeight='1rem' my={2} variant='h7' color='text.secondary' textAlign='center' px={12}>
            You’ve completed everything on your list.
            Sit back, relax, or add something new.
          </Typography>
          
          <SecondaryButton
            height='44px'
            text='Create task'
            icon={PlusSvg}
          />
        </FlexColumn>
      )}
    </Box>
  );
};

export default TodoList;