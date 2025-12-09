import { Button, Typography } from "@mui/material"
import { FlexCenter } from "./FlexCenter"
import { ArrowRightSvg } from "@/assets/icons"
import { IPrimaryButtonProps } from "@/types/ui";
import { createElement } from "react";

const PrimaryButton = ({
    text = "Add",
    icon,
    height,
}: IPrimaryButtonProps) => {
    const handleSubmit = () => {
        // Lógica para enviar
        console.log('Submitting...');
    };

  return (
    <>
        <Button
            disableRipple
            variant="primaryButton"
            onClick={handleSubmit}
            sx={{
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