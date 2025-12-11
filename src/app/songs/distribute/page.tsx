'use client'
import { DistributeIconBigBrandSvg, RegisterIconGoldSvg } from '@/assets/icons'
import PlayerModal from '@/components/songs/register/PlayerModal'
import RegisterSong from '@/components/songs/register/RegisterSong'
import Demo from '@/components/songs/Demo'
import ListButtonsTracking from '@/components/songs/ListButtonsTracking'
import MinimizeDemo from '@/components/songs/MinimizeDemo'
import TitleIcon from '@/components/ui/TitleIcon'
import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormDistribute from '@/components/songs/distribute/FormDistribute'

const Distribute = () => {
    const [isDemoMinimized, setIsDemoMinimized] = useState(false)

    const handleToggleDemo = () => {
        setIsDemoMinimized(!isDemoMinimized)
      }
    

  return (
    <Box py={2} px={4}>
        <Box display="flex" gap={2} mb={1}>
            <ListButtonsTracking trackingStatus={4} />
        </Box>
        {isDemoMinimized ? (
          <Demo onMinimize={handleToggleDemo} />
        ) : (
          <MinimizeDemo onExpand={handleToggleDemo} />
        )}
        <Box mt={5} mb={4}>
            <TitleIcon
            icon={DistributeIconBigBrandSvg}
            text='Distribute'
            /> 
        </Box>
        <FormDistribute/>
    </Box>
  )
}

export default Distribute