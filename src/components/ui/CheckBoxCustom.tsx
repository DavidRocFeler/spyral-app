import { CheckIconSvg } from "@/assets/icons"
import { Box, FormControlLabel, Radio, Typography } from "@mui/material"

export interface ICheckBoxProp {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    text?: string;
  }

  const CheckBoxCustom = ({
    checked,
    onChange,
    text
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
              '&:hover': {
                bgcolor: 'transparent'
              }
            }}
            icon={
              <Box sx={{ 
                width: 20, 
                height: 20, 
                borderRadius: '6px',
                border: '1px solid',
                borderColor: 'secondary.main',
              }} />
            }
            checkedIcon={
              <Box
                sx={{ 
                  width: 20, 
                  height: 20,
                  borderRadius: '6px',
                  bgcolor: 'secondary.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
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