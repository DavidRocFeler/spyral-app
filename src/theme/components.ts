// theme/components.ts
import { Components, Theme } from '@mui/material/styles';

export const components: Components<Theme> = {
  MuiButton: {
    variants: [
      {
        props: { variant: 'primaryButton' },
        style: ({ theme }) => ({
          borderRadius: '50px',
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
          paddingTop: theme.spacing(1.5),
          paddingBottom: theme.spacing(1.5),
          backgroundColor: theme.palette.secondary.main,
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing(1),
          '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
          },
          textTransform: 'none',
          color: theme.palette.text.primary,
          fontWeight: 'normal',
        }),
      },
      {
        props: { variant: 'secondaryButton' },
        style: ({ theme }) => ({
          boxShadow: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: theme.spacing(1),
          paddingLeft: theme.spacing(2.5),
          paddingRight: theme.spacing(2),
          paddingTop: theme.spacing(1.5),
          paddingBottom: theme.spacing(1.5),
          backgroundColor: theme.palette.grey[900],
          color: 'white',
          borderRadius: '50px',
          '&:hover': {
            boxShadow: 'none',
          },
          textTransform: 'none',
        }),
      }
    ],
  },
  
  MuiTextField: {
    styleOverrides: {
      root: {
        '&.dark-rounded': {
          '& .MuiOutlinedInput-root': {
            backgroundColor: "#272626",
            borderRadius: '15px',
            height: '48px',
            '& fieldset': {
              borderColor: "#272626",
            },
            '&:hover fieldset': {
              borderColor: "#272626",
            },
            '&.Mui-focused fieldset': {
              borderColor: "#272626",
            },
          },
          '& .MuiInputBase-input': {
            color: 'white',
          },
          '& .MuiInputBase-input::placeholder': {
            color: "#272626",
          },
        },
      },
    },
  },

  MuiCssBaseline: {
    styleOverrides: {
      // Estilos globales de scrollbar
      '.custom-scrollbar': {
        overflow: 'auto',
        
        // Scrollbar personalizado para navegadores WebKit (Chrome, Safari, Edge)
        '&::-webkit-scrollbar': {
          width: '8px',
          position: 'absolute',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'transparent',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'transparent',
          borderRadius: '4px',
          border: '1px solid transparent',
        },
        
        // Mostrar scrollbar al hacer hover
        '&:hover::-webkit-scrollbar-track': {
          backgroundColor: '#000',
        },
        '&:hover::-webkit-scrollbar-thumb': {
          backgroundColor: '#000',
          border: '1px solid #262626',
        },
        '&:hover::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#000',
          border: '1px solid #262626',
        },
        
        // Scrollbar personalizado para Firefox
        scrollbarWidth: 'thin',
        scrollbarColor: 'transparent transparent',
        '&:hover': {
          scrollbarColor: '#000 #000',
        },
      },
    },
  },
}