import { ICheckRadius } from '@/types/ui'
import { Box, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'

const CheckRadius = ({
    text = ''
}: ICheckRadius) => {
  return (
    <Box>
      <RadioGroup row>
        <FormControlLabel
          value="yes" 
          control={
            <Radio
            icon={<Box sx={{ width: 20, height: 20, borderRadius: '50%', border: '1px solid white' }} />}
            checkedIcon={
                <Box sx={{ 
                width: 20, 
                height: 20, 
                borderRadius: '50%', 
                border: '1px solid white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
                }}>
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'secondary.main' }} />
                </Box>
            }
            />
          } 
          label={<Typography variant='h8'>{text}</Typography>}
        />
      </RadioGroup>
    </Box>
  )
}

export default CheckRadius