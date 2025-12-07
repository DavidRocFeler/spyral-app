import { Button, Typography } from "@mui/material"
import { FlexCenter } from "./FlexCenter"
import { ArrowRightSvg } from "@/assets/icons"

export interface IPrimaryButtonProps {
    text?: string;
}

const PrimaryButton = ({
    text= "Add",
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
            <FlexCenter>
              <ArrowRightSvg/>
            </FlexCenter>
        </Button>
    </>
  )
}

export default PrimaryButton