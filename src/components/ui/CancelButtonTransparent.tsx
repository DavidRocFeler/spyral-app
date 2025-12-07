import { Button, Typography } from '@mui/material'
import React from 'react'

const CancelButtonTransparent = () => {
  return (
    <>
        {/* Botón Cancel (izquierda) */}
        <Button
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