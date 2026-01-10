import { Button, Typography } from '@mui/material'
import { FlexCenter } from './FlexCenter';
import { ITextButtonProps } from '@/types/ui';

const TextButton = ({
text, 
color = 'text.secondary',
icon: Icon,
gap = 0.5,
iconPb = 0,
flexDirection = 'row',
onClick,
disabled,
variant='h8',
unset= 'unset',
bgcolor= 'transparent',
height = '',
borderRadius = ''
}: ITextButtonProps) => {
  
  // Función para renderizar el texto según el tipo
  const renderText = () => {
    if (typeof text === 'string') {
      return text;
    }
    
    // Si es un objeto IFormatWordProps
    const { normalText, boldText, afterText = '' } = text;
    return (
      <>
        {normalText}
        <span style={{ fontWeight: 800 }}>{boldText}</span>
        {afterText}
      </>
    );
  };

  return (
    <Button 
    disableElevation
    disableRipple
    sx={{
        all: unset,
        height: height,
        display:'flex', 
        bgcolor: bgcolor,
        flexDirection: flexDirection,
        alignItems:'center',
        justifyItems:'center',
        gap: gap,
        cursor: 'pointer',
        borderRadius: borderRadius
    }}>
        <FlexCenter 
        sx={{
            pb: iconPb
        }}
        >
            {Icon && <Icon />}
        </FlexCenter>
        <Typography 
        onClick={disabled ? undefined : onClick}
        color={color}
        sx={{
            typography: variant,
            textTransform: 'none',
            margin: 0,
            padding: 0,
            display: 'inline', // Cambia a 'inline' para que funcione con span
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
        }}
        component="span" // Importante: usa component="span"
        > 
        {renderText()}
        </Typography>
    </Button>
  )
}

export default TextButton