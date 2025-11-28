// components/Sidebar/SidebarMenuItem.tsx
import { Box, Typography } from '@mui/material';
import { ISidebarMenuItemProps } from '@/types/sidebar';

const SidebarMenuItem = ({ item, isActive, onClick }: ISidebarMenuItemProps) => {
  const Icon = item.icon;

  // Estilo especial para "Add new Item" - SIEMPRE tiene el mismo color
  if (item.isSpecial) {
    return (
      <Box
        onClick={onClick}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 2,
          py: 1.5,
          px: 2,
          borderRadius: 15,
          mb: 1.1,
          bgcolor: 'background.default',
          color: 'text.primary',
          textTransform: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          '&:hover': {
            opacity: 0.8,
          },
        }}
      >
        <Icon/>
        <Typography
          variant="h8"
        >
          {item.label}
        </Typography>
      </Box>
    );
  }

  // Estilo para los botones normales - solo el activo tiene gradiente
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        py: 1.5,
        px: 2,
        mb: 1.1,
        borderRadius: 15,
        cursor: 'pointer',
        background: isActive 
          ? 'linear-gradient(135deg, #CFCDFF 0%, #E2FC0B 100%)'
          : 'transparent',
        transition: 'all 0.2s ease',
        '&:hover': {
          bgcolor: isActive ? 'transparent' : 'rgba(255, 255, 255, 0.05)',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& svg': {
            fill: isActive ? '#000' : '#FFF',
            color: isActive ? '#000' : '#FFF',
            transition: 'all 0.2s ease',
          },
          '& svg path': {
            fill: isActive ? '#000' : '#FFF',
          },
          '& svg circle': {
            fill: isActive ? '#000' : '#FFF',
          },
          '& svg rect': {
            fill: isActive ? '#000' : '#FFF',
          },
        }}
      >
        <Icon />
      </Box>
      <Typography
        variant='h8'
        pt={0.2}
        sx={{
          color: isActive ? '#000' : '#FFF',
        }}
      >
        {item.label}
      </Typography>
    </Box>
  );
};

export default SidebarMenuItem;