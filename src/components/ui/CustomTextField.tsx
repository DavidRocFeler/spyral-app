// components/CustomTextField.tsx
import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';

interface CustomTextFieldProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  height?: string | number;
  placeholder?: string;
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  label?: string;
  type?: string;
  name?: string;
  id?: string;
  className?: string;
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
}

const CustomTextField = ({
  height = '44px',
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