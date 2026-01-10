import { FlexCenter } from './FlexCenter'
import { Typography } from '@mui/material'
import { ITitleIconProps } from '@/types/ui'

export const TitleIcon = ({icon, text}: ITitleIconProps) => {
    const IconSvg = icon
  return (
    <>
        <FlexCenter gap={2}>
            <IconSvg/>
            <Typography pb={0.15} variant='h2' > {text} </Typography>
        </FlexCenter>
    </>
  )
}

export default TitleIcon;
