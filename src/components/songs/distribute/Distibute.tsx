'use client'
import { DistributeIconBigBrandSvg } from '@/assets/icons'
import Demo from '@/components/songs/Demo'
import ListButtonsTracking from '@/components/songs/ListButtonsTracking'
import MinimizeDemo from '@/components/songs/MinimizeDemo'
import TitleIcon from '@/components/ui/TitleIcon'
import { Box } from '@mui/material'
import  { useEffect, useState } from 'react'
import FormDistribute from '@/components/songs/distribute/FormDistribute'
import ModalDistribute from './ModalDistribute'

const Distribute = () => {
    const [isDemoMinimized, setIsDemoMinimized] = useState(false)
    const [buttonNone, setButtonNone] = useState<string>('')
    const currentTrackingStatus = 4
    const [showModal, setShowModal] = useState(false)
  
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
        <FormDistribute onDeliver={() => setShowModal(true)}/>
        
        {/* 👇 Solo agrega onClose aquí */}
        {showModal && <ModalDistribute onClose={() => setShowModal(false)} />}
    </Box>
  )
}

export default Distribute