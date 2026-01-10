import { CheckIconSvg } from "@/assets/icons"
import { ICheckBoxProps } from "@/types/ui"
import { Box, FormControlLabel, Radio, Typography } from "@mui/material"

const CheckBoxCustom = ({
  checked,
  onChange,
  text,
  bgcolorCheck,
  borderColor = 'secondary.main',
  bgcolorHover = 'transparent'
}: ICheckBoxProps) => {
  return (
    <FormControlLabel
      value="downloads"
      sx={{
        m: 0,
        p: 0,
        '& .MuiFormControlLabel-label': {
          p: 0,
          m: 0
        }
      }}
      control={
        <Radio
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          sx={{
            p: 0,
            m: 0,
            bgcolor: bgcolorCheck,
            '&:hover': {
              bgcolor: bgcolorHover
            }
          }}
          icon={
            <Box sx={{ 
              width: 20, 
              height: 20, 
              borderRadius: '6px !important',
              border: borderColor === 'transparent' ? 'none' : '1px solid',
              borderColor: borderColor,
              bgcolor: bgcolorCheck,
              overflow: 'hidden'
            }} />
          }
          checkedIcon={
            <Box
              sx={{ 
                width: 20, 
                height: 20,
                borderRadius: '6px !important',
                bgcolor: 'secondary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
            >
              <CheckIconSvg />
            </Box>
          }
        />
      }
      label={<Typography ml={1} variant="h8">{text}</Typography>}
    />
  )
}

export default CheckBoxCustom