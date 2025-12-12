'use client'
import { Box } from '@mui/material'
import { useState } from 'react'
import SecondaryButton from './SecondaryButton' 
import { ISecondaryButtonProps } from '@/types/ui'

export interface ISlideBarMenuProps {
    menuItems: ISecondaryButtonProps[]
}

const SlideBarMenuLeft = ({
    menuItems
}: ISlideBarMenuProps) => {
  // Estado para controlar qué menú está seleccionado
  const [selectedMenu, setSelectedMenu] = useState<string>('Home')

  return (
    <Box sx={{ 
      width: '200px', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      pt: 3,
      px: 0,
      borderRight: '1px solid',
      borderColor: 'grey.900'
    }}>
      {menuItems.map((item, index) => (
        <Box key={index} sx={{ mb: 1 }}>
          <SecondaryButton 
            text={item.text}
            width='160px'
            height='43px'
            justifyContent='start'
            pl={2.5}
            bgcolor={item.bgcolor}
            // Agregar estado de selección si tu SecondaryButton lo soporta
          />
        </Box>
      ))}
    </Box>
  )
}

export default SlideBarMenuLeft