import { Box } from '@mui/material'

const GrandiantButton = () => {
  return (
    <Box
    className='gradient-active'
    sx={{
      typography: 'h8',
      height: '44px',
      width: '150px',
      borderRadius: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'primary.main',
      cursor: 'pointer'
    }}
    >
    Continue
    </Box>
  )
}

export default GrandiantButton