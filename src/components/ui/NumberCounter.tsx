// NumberCounter.tsx
import { Typography } from '@mui/material'

export interface INumberCounterProps {
    counter: number;
    isActive?: boolean;
    onClick?: () => void;
}

const NumberCounter = ({counter, isActive = false, onClick}: INumberCounterProps) => {
  return (
    <Typography 
      bgcolor={isActive ? 'grey.900' : 'transparent'}
      display='flex'
      alignItems='center'
      justifyContent='center'
      width='24px'
      height='24px'
      borderRadius='20px'
      sx={{
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        '&:hover': {
          bgcolor: isActive ? 'grey.800' : 'grey.800'
        }
      }}
      variant='h8'
      onClick={onClick}
    >
      {counter}
    </Typography>
  )
}

export default NumberCounter;