import { Box, Typography } from '@mui/material'

export interface INumberCounterProps {
    counter: number
}

const NumberCounter = ({counter}:INumberCounterProps) => {
  return (
    <>
        <Typography 
        bgcolor='grey.900'
        display='flex'
        alignItems='center'
        justifyContent='center'
        width='24px'
        height='24px'
        borderRadius='20px'
        sx={{cursor: 'pointer'}}
        variant='h8'>
            {counter}
        </Typography>
    </>
  )
}

export default NumberCounter