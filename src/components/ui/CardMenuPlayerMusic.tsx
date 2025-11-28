// components/CardMenuPlayerMusic.tsx
import { Box, Typography, Popover } from '@mui/material';
import { ICardMenuPlayerMusicProps } from '@/types/playerMusic';
import { menuItems } from '@/mock/musicPlayer.mock';


const CardMenuPlayerMusic = ({ open, anchorEl, onClose }: ICardMenuPlayerMusicProps) => {

  const handleItemClick = (label: string) => {
    console.log(`${label} clicked`);
    onClose();
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      slotProps={{
        paper: {
          sx: {
            width: '180px',
            height: '258px',
            bgcolor: 'grey.900',
            borderRadius: '16px',
            mt: -1,
            overflow: 'hidden',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.5)'
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
        {menuItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <Box
              key={item.id}
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