// components/CardMenuPlayerMusic.tsx
import { Box, Typography, Popover, PopoverOrigin, SxProps, Theme } from '@mui/material';
import { ICardIconPlayerMusicProps, ICardMenuPlayerMusicProps } from '@/types/playerMusic';
import { menuItems } from '@/mock/musicPlayer.mock';

export interface ICardExtendMock {
  menuMock?: ICardIconPlayerMusicProps[];
  menuPlayer: ICardMenuPlayerMusicProps;
  // Nuevas props opcionales para control de posición y estilos
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
  paperSx?: SxProps<Theme>; 
}

const CardMenuPlayerMusic = ({ 
  menuPlayer, 
  menuMock = menuItems,
  // Valores por Default (Los que tenías originalmente)
  anchorOrigin = {
    vertical: 'top',
    horizontal: 'center',
  },
  transformOrigin = {
    vertical: 'bottom',
    horizontal: 'right',
  },
  paperSx = {} // Por si quieres sobrescribir estilos del contenedor (width, margin, etc.)
}: ICardExtendMock) => {

  const handleItemClick = (label: string) => {
    console.log(`${label} clicked`);
    menuPlayer.onClose();
  };

  return (
    <Popover
      open={menuPlayer.open}
      anchorEl={menuPlayer.anchorEl}
      onClose={menuPlayer.onClose}
      // Usamos las props dinámicas aquí
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      slotProps={{
        paper: {
          sx: {
            width: '180px',
            height: 'fit-content',
            bgcolor: 'grey.900',
            borderRadius: '16px',
            mt: -1,
            overflow: 'hidden',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)',
            ...paperSx // Esto permite sobrescribir los estilos de arriba si hace falta
          }
        }
      }}
    >
      <Box
        gap={0.7}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 0
        }}
      >
         {menuMock.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Box
              key={index} 
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                px: 2,
                py: 1.5,
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                borderColor: 'background.default',
                '&:hover': {
                  bgcolor: 'background.paper'
                }
              }}
              onClick={() => handleItemClick(item.label)}
            >
              <IconComponent />
              <Typography variant="h8">
                {item.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Popover>
  );
};

export default CardMenuPlayerMusic;