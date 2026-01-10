import { ICancelButtonTransparent } from '@/types/ui'
import { Button, Typography } from '@mui/material'

const CancelButtonTransparent = ({
  onClick
}: ICancelButtonTransparent) => {
  return (
    <>
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