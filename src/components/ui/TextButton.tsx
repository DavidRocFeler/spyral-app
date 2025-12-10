import { Button, Typography } from '@mui/material'
import { ComponentType } from 'react';
import { FlexCenter } from './FlexCenter';

export interface ITextButtonProps {
    text: string;
    color?: string;
    icon?: ComponentType;
    gap?: number;
    onClick?: () => void;
    iconPb?: number;
    flexDirection?: string,
    disabled?: boolean;

}

const TextButton = ({
text, 
color = 'text.secondary',
icon: Icon,
gap = 0.5,
iconPb = 0,
flexDirection = 'row',
onClick,
disabled
}: ITextButtonProps) => {
  return (
    <Button 
    disableElevation
    disableRipple
    sx={{
        all: 'unset',
        display:'flex', 
        flexDirection: flexDirection,
        alignItems:'center',
        justifyItems:'center',
        gap: gap,
        cursor: 'pointer'
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
        variant='h8' 
        color={color}
        sx={{
            textTransform: 'none',
            margin: 0,
            padding: 0,
            display: 'inline-block',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
        }}
        > 
        {text} 
        </Typography>
    </Button>
  )
}

export default TextButton