// TodoList.tsx
import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';
import { FlexCenter } from '@/components/ui/FlexCenter';
import TextButton from '@/components/ui/TextButton';
import { CheckIconBrandSvg, PlusSvg, TrashGreyIconSvg } from '@/assets/icons';
import { FlexColumn } from '@/components/ui/FlexColumn';
import SecondaryButton from '@/components/ui/SecondaryButton';

const TodoList = () => {
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
      
      <FlexColumn mt={4}>
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
    </Box>
  );
};

export default TodoList;