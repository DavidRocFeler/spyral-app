import PlayerModal from '@/components/register/PlayerModal'
import React from 'react'
import JamesArthur from "@/assets/jamesArthurTrack.png"
import { collaboratorsTrack } from '@/mock/collaboratorTrack.mock'
import ListButtonsTracking from '@/components/songs/ListButtonsTracking'
import MinimizeDemo from '@/components/songs/MinimizeDemo'
import { Box, Typography } from '@mui/material'
import TitleIcon from '@/components/ui/TitleIcon'
import { RegisterBrandIconSvg, RegisterIconGoldSvg } from '@/assets/icons'
import { FlexCenter } from '@/components/ui/FlexCenter'

const Register = ({ onExpamd }: { onExpamd: () => void }) => {
  return (
    <Box py={2} px={4}>
        <Box display="flex" gap={2} mb={1}>
            <ListButtonsTracking trackingStatus={3} />
        </Box>
        <MinimizeDemo
        onExpand={onExpamd}
        />
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
        artistName='Loren Ipsum'
        songTitle='Titulo de musica'
        duration='4min'
        lastUpdate='10 marz'
        currentTime='5mn'
        collaborators={collaboratorsTrack}
        />
    </Box>
  )
}

export default Register