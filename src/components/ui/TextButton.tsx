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

}

const TextButton = ({
text, 
color = 'text.secondary',
icon: Icon,
gap = 0.5,
iconPb = 0,
flexDirection = 'row',
onClick,
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
        onClick={onClick}
        variant='h8' 
        color={color}
        sx={{
            textTransform: 'none',
            margin: 0,
            padding: 0,
            display: 'inline-block',
            cursor: 'pointer',
        }}
        > 
        {text} 
        </Typography>
    </Button>
  )
}

export default TextButton