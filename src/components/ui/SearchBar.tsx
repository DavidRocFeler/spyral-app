import { SearchIconSvg } from "@/assets/icons"
import { Box, InputBase } from "@mui/material"
import { ComponentType } from "react"

interface ISearchBarProps {
    icon: ComponentType;
    placeholder?: string;
    width?: string;
    height?: string;
    bgcolor?: string;
    borderRadius?: string;
}

const SearchBar = ({
    icon,
    placeholder,
    width = '330px',
    height = '44px',
    bgcolor = 'background.default',
    borderRadius = '15px'
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
            alignItems: 'center',
            borderRadius: borderRadius,
            height: height,
            gap: 1,
            py: 0.6,
            px: 2.5
        }}
        >
        <IconComponent/>
        <InputBase
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
        </Box>
     </Box>
   )
}

export default SearchBar