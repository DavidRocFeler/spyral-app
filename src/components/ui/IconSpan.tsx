import { EditeIconSvg } from "@/assets/icons"
import { Button } from "@mui/material"
import { ComponentType } from "react";

export interface IIconSpanProps {
    bgcolor?: string;
    icon?: ComponentType;
    borderRadius?: string;
    onClick?: () => void;
}

const IconSpan = ({
    bgcolor = 'background.paper',
    icon = EditeIconSvg,
    borderRadius = '50%',
    onClick
}: IIconSpanProps) => {
  const IconSvg = icon
  return (
    <Button
      onClick={onClick}
      disableRipple
      sx={{
        bgcolor: bgcolor,
        width: '32px',
        height: '32px',
        minWidth: '32px',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: borderRadius, 
      }}
    >
      <IconSvg/>
    </Button>
  )
}

export default IconSpan