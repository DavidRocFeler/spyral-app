import { EditeIconSvg } from "@/assets/icons"
import { Button } from "@mui/material"
import { ComponentType } from "react";

export interface IIconSpanProps {
    bgcolor?: string;
    icon?: ComponentType;
    borderRadius?: string;
    onClick?: () => void;
    height?: string;
    width?: string;
}

const IconSpan = ({
    bgcolor = 'background.paper',
    icon = EditeIconSvg,
    borderRadius = '50%',
    onClick,
    width = '32px',
    height = '32px'
}: IIconSpanProps) => {
  const IconSvg = icon
  return (
    <Button
      onClick={onClick}
      disableRipple
      sx={{
        all: 'unset',
        bgcolor: bgcolor,
        width: width,
        height: height,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: borderRadius, 
        cursor: 'pointer'
      }}
    >
      <IconSvg/>
    </Button>
  )
}

export default IconSpan