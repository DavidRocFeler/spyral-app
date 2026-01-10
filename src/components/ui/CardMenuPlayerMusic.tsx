// components/CardMenuPlayerMusic.tsx
import { Box, Typography, Popover } from '@mui/material';
import { menuItems } from '@/mock/musicPlayer.mock';
import { ICardExtendMock } from '@/types/ui';

const CardMenuPlayerMusic = ({ 
  menuPlayer, 
  menuMock = menuItems,
  anchorOrigin = {
    vertical: 'top',
    horizontal: 'center',
  },
  transformOrigin = {
    vertical: 'bottom',
    horizontal: 'right',
  },
  paperSx = {}
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
      // dynamic props 
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
            ...paperSx 
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