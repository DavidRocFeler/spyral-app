import { Button, Typography } from '@mui/material'

export interface ICancelButtonTransparent {
  onClick?: () => void
}
const CancelButtonTransparent = ({
  onClick
}: ICancelButtonTransparent) => {
  return (
    <>
        {/* Botón Cancel (izquierda) */}
        <Button
          onClick={onClick}
            disableRipple
            variant="primaryButton"
            sx={{
            bgcolor: 'transparent',
            '&:hover': {
                bgcolor: 'transparent'
            },
            }}
        >
            <Typography variant='h8'>Cancel</Typography>
        </Button>
    </>
  )
}

export default CancelButtonTransparent