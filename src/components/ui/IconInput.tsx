import { ISearchBarProps } from "@/types/ui";
import { Box, InputBase } from "@mui/material"

const IconInput = ({
    icon,
    placeholder,
    width = '330px',
    height = '44px',
    bgcolor = 'background.default',
    borderRadius = '15px',
    flexDirection = 'row',
    value,
    onChange
}: ISearchBarProps) => {
    const IconComponent = icon;
   return (
     <Box>
        {/* Search */}
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
            placeholder={placeholder}
            sx={{
            flex: 1,
            fontWeight: 400,
            color: 'text.primary',
            fontSize: '16px',
            '& input::placeholder': {
                color: '#808080',
                opacity: 1,
            },
            }}
        />
        <IconComponent/>
        </Box>
     </Box>
   )
}

export default IconInput;