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
  };

  const isItemActive = (item: ISidebarMenuItem): boolean => {
    if (item.isSpecial) return false;
    
    if (item.id === 'home') {
      return pathname === '/desktop/home' || pathname.startsWith('/desktop/home');
    }
    
    return pathname.startsWith(`/desktop/${item.id}`);
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

      <Box 
        className="custom-scrollbar"
        sx={{ 
          pt: 0,
          px: 1,
          flex: 1,
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