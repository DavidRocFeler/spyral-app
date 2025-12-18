import { ISearchBarProps } from "@/types/ui";
import { Box, InputBase, Typography } from "@mui/material"

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
  placeholderColor
}: ISearchBarProps) => {
  const IconComponent = icon;
  const hasValue = typeof value === 'string' ? value.length > 0 : !!value;

  return (
    <Box width='100%' sx={{ position: 'relative' }}>
      <Box
        bgcolor={bgcolor}
        sx={{
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
          placeholder={placeholderWhite ? '' : placeholder}
          sx={{
            flex: 1,
            fontWeight: 400,
            color: 'text.primary',
            fontSize: '16px',
            '& input::placeholder': {
              color: '#808080',
              opacity: placeholderWhite ? 0 : 1,
            },
          }}
        />
        <IconComponent/>
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
  )
}

export default IconInput;