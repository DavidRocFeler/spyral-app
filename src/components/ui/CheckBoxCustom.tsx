import { CheckIconSvg } from "@/assets/icons"
import { Box, FormControlLabel, Radio, Typography } from "@mui/material"

export interface ICheckBoxProp {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  text?: string;
  bgcolorCheck?: string;
  borderColor?: string;
  bgcolorHover?: string;
}

const CheckBoxCustom = ({
  checked,
  onChange,
  text,
  bgcolorCheck,
  borderColor = 'secondary.main',
  bgcolorHover = 'transparent'
}: ICheckBoxProp) => {
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