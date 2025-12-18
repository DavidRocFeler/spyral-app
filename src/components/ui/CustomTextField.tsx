// components/CustomTextField.tsx
import { CustomTextFieldProps } from '@/types/ui';
import { TextField, Typography, Box } from '@mui/material';

const CustomTextField = ({
  height = '44px',
  width,
  placeholder = "Enter email address",
  alignItems = 'center',
  fullWidth = true,
  multiline = false,
  rows,
  variant = 'h8',
  placeholderWhite,
  value,
  placeholderColor,
  variantPlaceholder = 'h7',
  ...props
}: CustomTextFieldProps) => {
  const hasValue = typeof value === 'string' ? value.length > 0 : !!value;

  return (
    <Box sx={{ position: 'relative', width: fullWidth ? '100%' : width }}>
      <TextField
        fullWidth={fullWidth}
        placeholder={multiline && placeholderWhite ? '' : placeholder}
        multiline={multiline}
        rows={rows}
        value={value}
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
              typography: variant,
              padding: 0,
            },
            '& input::placeholder': {
              opacity: placeholderWhite ? 0 : 1,
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
      
      {placeholderWhite && !hasValue && (
        <Typography
          sx={{
            typography: variantPlaceholder,
            position: 'absolute',
            left: '16px',
            top: multiline ? '16px' : '50%',
            transform: multiline ? 'none' : 'translateY(-50%)',
            color: placeholderColor,
            pointerEvents: 'none',
            zIndex: 1,
          }}
        >
          {placeholderWhite}
        </Typography>
      )}
    </Box>
  );
};

export default CustomTextField;