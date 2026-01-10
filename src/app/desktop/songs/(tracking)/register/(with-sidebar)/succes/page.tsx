import ToastSucces from '@/components/ui/ToastSucces'
import Register from '@/components/songs/register/Register'
import { Box } from '@mui/material'

const RegisterViewSucces = () => {

  return (
    <Box py={2} px={4}>
        <Register/>
        <ToastSucces/>
    </Box>
  )
}

export default RegisterViewSucces