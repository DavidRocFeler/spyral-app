import { EditeIconSvg } from "@/assets/icons"
import { Button } from "@mui/material"
import { ComponentType, MouseEventHandler } from "react";

export interface IIconSpanProps {
    bgcolor?: string;
    icon?: ComponentType;
    borderRadius?: string;
    onClick?:  MouseEventHandler<HTMLButtonElement>; 
    height?: string;
    width?: string;
    borderBottomLeftRadius?: string;
    borderBottomRightRadius?: string;
    borderTopLeftRadius?: string;
    borderTopRightRadius?: string;
}

const IconSpan = ({
    bgcolor = 'background.paper',
    icon = EditeIconSvg,
    borderRadius = '50%',
    onClick,
    width = '32px',
    height = '32px',
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopLeftRadius,
    borderTopRightRadius
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
        borderBottomLeftRadius: borderBottomLeftRadius,
        borderBottomRightRadius: borderBottomRightRadius,
        borderTopLeftRadius: borderTopLeftRadius,
        borderTopRightRadius: borderTopRightRadius,
        cursor: 'pointer'
      }}
    >
      <IconSvg/>
    </Button>
  )
}

export default IconSpan