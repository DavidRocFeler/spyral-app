import { FlexCenter } from "@/components/ui/FlexCenter"
import { ICardAuthThirdProps } from "@/types/auth";
import { Typography } from "@mui/material"

const CardAuthThird = ({
  icon,
  text = 'Continue with Google'
}: ICardAuthThirdProps) => {
  const IconSvg = icon;
  
  return (
    <FlexCenter 
      height='44px' 
      gap={1.7} 
      bgcolor='grey.900'
      sx={{
        width:'320px',
        borderRadius: '8px',
        cursor:'pointer'
      }}
    >
      {IconSvg && <IconSvg/>}
      <Typography variant="h7"> {text} </Typography>
    </FlexCenter>
  )
}

export default CardAuthThird