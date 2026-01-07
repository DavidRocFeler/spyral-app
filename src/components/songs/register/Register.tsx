import PlayerRegister from '@/components/songs/register/PlayerRegister'
import JamesArthur from "@/assets/jamesArthurTrack.png"
import { collaboratorsTrack } from '@/mock/collaboratorTrack.mock'
import { Box, Typography } from '@mui/material'
import TitleIcon from '@/components/ui/TitleIcon'
import { RegisterIconGoldSvg } from '@/assets/icons'

const Register = () => {    
  return (
    <Box py={2} px={0}>
 
        <Box mt={0} mb={4}>
            <TitleIcon
            icon={RegisterIconGoldSvg}
            text='Register'
            /> 
        </Box>

        <Box mb={4}>
            <Typography variant='h7'> Please check the details before registering. </Typography>
        </Box>
        <PlayerRegister
        coverImage={JamesArthur}
        artistName='Jame Arthur'
        songTitle="say you won't let go"
        duration='4min'
        lastUpdate='10 marz'
        currentTime='5mn'
        collaborators={collaboratorsTrack}
        href='/songs/register/buma'
        />
    </Box>
  )
}

export default Register