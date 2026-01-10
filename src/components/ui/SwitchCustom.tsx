import { Box, Switch } from '@mui/material'

const SwitchCustom = () => {
  return (
    <Box>
        <Switch
            sx={{
            ml:'auto',
            width: 42,
            height: 24,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            '& .MuiSwitch-switchBase': {
                padding: 0,
                margin: '1px',
                transitionDuration: '300ms',
                color: 'background.default',
                '&.Mui-checked': {
                transform: 'translateX(18px)',
                color: 'background.default',
                '& + .MuiSwitch-track': {
                    backgroundColor: 'secondary.main',
                    opacity: 1,
                    border: '1px solid',
                    borderColor: 'secondary.main',
                },
                '& .MuiSwitch-thumb': {
                    border: '1px solid',
                    borderColor: 'secondary.main',
                },
                },
            },
            '& .MuiSwitch-thumb': {
                boxSizing: 'border-box',
                width: 22,
                height: 22,
                border: '1px solid',
                borderColor: 'secondary.main',
            },
            '& .MuiSwitch-track': {
                borderRadius: '100px',
                backgroundColor: 'grey.900',
                opacity: 1,
                height: 24,
                border: '1px solid',
                borderColor: 'secondary.main',
            },
            }}
        />
    </Box>
  )
}

export default SwitchCustom