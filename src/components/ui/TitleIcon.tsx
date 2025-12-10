import React, { ComponentType } from 'react'
import { FlexCenter } from './FlexCenter'
import { CollaborationBrandSvg } from '@/assets/icons'
import { Typography } from '@mui/material'

export interface ITitleIconProps {
    icon: ComponentType
    text: string
}

export const TitleIcon = ({icon, text}: ITitleIconProps) => {
    const IconSvg = icon
  return (
    <>
        <FlexCenter mb={2} gap={2}>
            <IconSvg/>
            <Typography pb={0.15} variant='h2' > {text} </Typography>
        </FlexCenter>
    </>
  )
}

export default TitleIcon;
