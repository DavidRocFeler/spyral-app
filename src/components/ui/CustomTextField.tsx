// components/CustomTextField.tsx
import { CustomTextFieldProps } from '@/types/ui';
import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';

const CustomTextField = ({
  height = '44px',
  width,
  placeholder = "Enter email address",
  alignItems = 'center',
  fullWidth = true,
  multiline = false,
  rows,
  ...props
}: CustomTextFieldProps) => {
  return (
    <TextField
      fullWidth={fullWidth}
      placeholder={placeholder}
      multiline={multiline}
      rows={rows}
      sx={{
        '& .MuiOutlinedInput-root': {
          width: width,
          height: multiline ? 'auto' : height,
          minHeight: multiline ? height : 'auto',
          borderRadius: '12px',
          bgcolor: 'grey.900',
          pl: 2,
          pr: 2,
          pt: multiline ? 2 : 0,
          pb: multiline ? 2 : 0,
          alignItems: alignItems,
          '& fieldset': { 
            border: 'none' 
          },
          '& input': {
            typography: 'h8',
            padding: 0,
            height: '100%',
            display: 'flex',
            alignItems: alignItems,
            alignSelf: 'center',
          },
          '& textarea': {
            typography: 'h8',
            padding: 0,
          },
          '& input::placeholder': {
            opacity: 1,
            color: 'text.secondary',
            display: 'flex',
            alignItems: alignItems,
          },
          '& textarea::placeholder': {
            opacity: 1,
            color: 'text.secondary',
          },
        },
      }}
      {...props}
    />
  );
};

export default CustomTextField;