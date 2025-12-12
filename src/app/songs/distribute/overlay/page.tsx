'use client'
import { DistributeIconBigBrandSvg, RegisterIconGoldSvg } from '@/assets/icons'
import PlayerModal from '@/components/songs/register/PlayerModal'
import RegisterSong from '@/components/songs/register/RegisterSong'
import Demo from '@/components/songs/Demo'
import ListButtonsTracking from '@/components/songs/ListButtonsTracking'
import MinimizeDemo from '@/components/songs/MinimizeDemo'
import TitleIcon from '@/components/ui/TitleIcon'
import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import FormDistribute from '@/components/songs/distribute/FormDistribute'
import ModalDistribute from '@/components/songs/distribute/ModalDistribute'

const DistributeOverlay = () => {
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
            icon={DistributeIconBigBrandSvg}
            text='Distribute'
            /> 
        </Box>
        <FormDistribute/>
        <ModalDistribute/>
    </Box>
  )
}

export default DistributeOverlay