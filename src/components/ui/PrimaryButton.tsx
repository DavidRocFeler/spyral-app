import { Button, Typography } from "@mui/material"
import { FlexCenter } from "./FlexCenter"
import { IPrimaryButtonProps } from "@/types/ui";
import { createElement } from "react";

const PrimaryButton = ({
    text = "Add",
    icon,
    height,
    onClick,
    trackingStatus
}: IPrimaryButtonProps) => {
  return (
    <>
        <Button
            disableRipple
            variant="primaryButton"
            onClick={onClick}
            sx={{
              display: trackingStatus,
              height: height
            }}
          >
            <Typography 
              variant='h8'
              color='primary.main'
              sx={{
                textTransform: 'none'
              }}
            > 
            {text}
            </Typography>
            {icon && ( // Solo mostrar icon si existe
              <FlexCenter>
                {createElement(icon)}
              </FlexCenter>
            )}
        </Button>
    </>
  )
}

export default PrimaryButton