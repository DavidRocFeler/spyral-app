'use client'
import { DistributeIconBigBrandSvg } from '@/assets/icons'
import TitleIcon from '@/components/ui/TitleIcon'
import { Box } from '@mui/material'
import  { useState } from 'react'
import FormDistribute from '@/components/songs/distribute/FormDistribute'
import ModalDistribute from './ModalDistribute'

const Distribute = () => {
    const [showModal, setShowModal] = useState(false)

  return (
    <Box py={2} px={0}>

        <Box mt={0} mb={4}>
            <TitleIcon
            icon={DistributeIconBigBrandSvg}
            text='Distribute'
            /> 
        </Box>
        <FormDistribute onDeliver={() => setShowModal(true)}/>
        
        {showModal && <ModalDistribute onClose={() => setShowModal(false)} />}
    </Box>
  )
}

export default Distribute