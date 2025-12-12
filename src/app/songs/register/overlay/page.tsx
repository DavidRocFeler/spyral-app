'use client'
import PlayerModal from '@/components/songs/register/PlayerModal'
import { useEffect, useState } from 'react'
import JamesArthur from "@/assets/jamesArthurTrack.png"
import { collaboratorsTrack } from '@/mock/collaboratorTrack.mock'
import ListButtonsTracking from '@/components/songs/ListButtonsTracking'
import MinimizeDemo from '@/components/songs/MinimizeDemo'
import { Box, Typography } from '@mui/material'
import TitleIcon from '@/components/ui/TitleIcon'
import { RegisterIconGoldSvg } from '@/assets/icons'
import Demo from '@/components/songs/Demo'
import RegisterSong from '@/components/songs/register/RegisterSong'
import ToastSucces from '@/components/ui/ToastSucces'

const Register = () => {
  const [isDemoMinimized, setIsDemoMinimized] = useState(false)
  const [buttonNone, setButtonNone] = useState<string>('')
    
  // Si ListButtonsTracking solo acepta un número como prop trackingStatus
  // y no tiene onStatusChange, entonces:
  const currentTrackingStatus = 4

  useEffect(() => {
    if (currentTrackingStatus >= 4) {
        setButtonNone('none')
    } else {
        setButtonNone('')
    }
}, [currentTrackingStatus]) 

  const handleToggleDemo = () => {
    setIsDemoMinimized(!isDemoMinimized)
  }

  return (
    <Box py={2} px={4}>
        <Box display="flex" gap={2} mb={1}>
            <ListButtonsTracking trackingStatus={currentTrackingStatus} />
        </Box>
        {isDemoMinimized ? (
          <Demo onMinimize={handleToggleDemo} />
        ) : (
          <MinimizeDemo onExpand={handleToggleDemo} 
          trackingStatus={buttonNone}
          />
        )}
        <Box mt={5} mb={4}>
            <TitleIcon
            icon={RegisterIconGoldSvg}
            text='Register'
            /> 
        </Box>

        <Box mb={4}>
            <Typography variant='h7'> Please check the details before registering. </Typography>
        </Box>
        <PlayerModal
        coverImage={JamesArthur}
        artistName='Jame Arthur'
        songTitle="say you won't let go"
        duration='4min'
        lastUpdate='10 marz'
        currentTime='5mn'
        collaborators={collaboratorsTrack}
        />
        <Box mt={4}>
          <RegisterSong/>
        </Box>
        <ToastSucces/>
    </Box>
  )
}

export default Register