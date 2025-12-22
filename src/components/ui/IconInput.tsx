'use client'
import { ISearchBarProps } from "@/types/ui";
import { Box, InputBase, Typography } from "@mui/material";
import { useState } from "react";

const IconInput = ({
  icon,
  placeholder,
  width = '330px',
  height = '44px',
  bgcolor = 'background.default',
  borderRadius = '15px',
  flexDirection = 'row',
  value,
  onChange,
  placeholderWhite,
  placeholderColor,
  type,
  border = '0px solid',
  borderColor = 'transparent',
}: ISearchBarProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const IconComponent = icon;
  const hasValue = typeof value === 'string' ? value.length > 0 : !!value;

  const isPasswordType = type === 'password';
  const inputType = isPasswordType && !showPassword ? 'password' : 'text';

  const handleIconClick = () => {
    if (isPasswordType) {
      setShowPassword(!showPassword);
    }
  };

  return (
    <Box width='fit-content'  sx={{ position: 'relative' }}>
      <Box
        bgcolor={bgcolor}
        sx={{
          border: border,
          borderColor: borderColor,
          width: width,
          display: 'flex',
          flexDirection: flexDirection,
          alignItems: 'center',
          borderRadius: borderRadius,
          height: height,
          gap: 0.5,
          py: 0.6,
          px: 2
        }}
      >
        <InputBase
          value={value}
          onChange={onChange}
          type={inputType}
          placeholder={placeholderWhite ? '' : placeholder}
          sx={{
            flex: 1,
            fontWeight: 400,
            typography: 'h7',
            '& input::placeholder': {
              typography: 'h7',
              color: 'text.secondary',
              opacity: placeholderWhite ? 0 : 1,
            },
          }}
        />
        {IconComponent && (
          <Box
            onClick={handleIconClick}
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: isPasswordType ? 'pointer' : 'default',
              ...(isPasswordType && showPassword && {
                '& svg': {
                  color: '#FFF',
                  fill: '#FFF',
                  '& path': {
                    fill: '#FFF',
                  }
                }
              })
            }}
          >
            <IconComponent />
          </Box>
        )}
      </Box>
      {placeholderWhite && !hasValue && (
        <Typography
          variant="h7"
          sx={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
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

export default IconInput;