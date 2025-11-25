// theme/components.ts
import { Components, Theme } from '@mui/material/styles';

export const components: Components<Theme> = {
  MuiButton: {
    variants: [
      {
        props: { variant: 'primaryButton' },
        style: {
          backgroundColor: '#E2FC0B',
          color: '#000',
          textTransform: 'none',
          borderRadius: '8px',
          padding: '12px 24px',
          fontSize: '14px',
          fontWeight: 600,
          border: 'none',
          '&:hover': {
            backgroundColor: '#d4ed0a',
          },
          '&:active': {
            backgroundColor: '#c5de09',
          },
        },
      },
    ],
  },
};