// components/Sidebar/Sidebar.tsx
'use client';
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import { LogoSvg } from '@/assets/icons';
import SidebarMenuItem from './SidebarMenuItem';
import SidebarSection from './SidebarSection';
import { sidebarMenuItems, sidebarSections } from '@/mock/sidebar.mock';
import { useNavigationStore } from '@/store/navigationStore';
import { ISidebarMenuItem } from '@/types/sidebar';

const Sidebar = () => {
  const pathname = usePathname();
  const { openModal } = useNavigationStore();

  const handleMenuClick = (item: ISidebarMenuItem) => {
    if (item.isSpecial) {
      openModal();
    }
    // Para los items normales, la navegación se maneja con Link
  };

  // Determinar qué item está activo basado en la ruta
  const isItemActive = (item: ISidebarMenuItem): boolean => {
    if (item.isSpecial) return false;
    if (item.id === 'home') {
      // Home se activa en '/' y en cualquier ruta que empiece con '/home'
      return pathname === '/' || pathname.startsWith('/home');
    }
    // Para los demás items, verificar si la ruta comienza con el path del item
    return pathname.startsWith(`/${item.id}`);
  };

  return (
    <Box
      sx={{
        position: 'relative', 
        zIndex: 5,
        width: '240px',
        px: 2,
        pb: 5,
        height: '100vh',
        bgcolor: 'primary.main',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Logo */}
      <Box
        sx={{
          padding: '24px 16px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <LogoSvg />
      </Box>

      {/* Menu Items */}
      <Box 
        sx={{ 
          pt: 0,
          px: 1,
          flex: 1, 
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
        }}
      >
        <Box
          pt={2}
          pb={3}
          pr={2}
          borderBottom='solid 1px'
          borderColor='background.default'
        >
          {sidebarMenuItems.map((item: ISidebarMenuItem) => (
            <SidebarMenuItem
              key={item.id}
              item={item}
              isActive={isItemActive(item)}
              onClick={() => handleMenuClick(item)}
            />
          ))}
        </Box>

        {/* Sections */}
        <Box>
          {sidebarSections.map((section) => (
            <SidebarSection key={section.id} section={section} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;