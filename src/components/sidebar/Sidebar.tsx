// components/Sidebar/Sidebar.tsx
'use client';

import { Box } from '@mui/material';
import { LogoSvg } from '@/assets/icons';
import SidebarMenuItem from './SidebarMenuItem';
import SidebarSection from './SidebarSection';
import { sidebarMenuItems, sidebarSections } from '@/mock/sidebar.mock';
import { useNavigationStore } from '@/store/navigationStore';

const Sidebar = () => {
  const { activeView, setActiveView, openModal } = useNavigationStore();

  const handleMenuClick = (item: any) => {
    if (item.isSpecial) {
      // Si es "Add new Item", abre el modal
      openModal();
    } else {
      // Si es un botón normal, cambia la vista
      setActiveView(item.id);
    }
  };

  return (
    <Box
      sx={{
        width: '240px',
        px: 2,
        height: '100vh',
        bgcolor: 'primary.main',
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
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
        pt: 3,
        px: 1,
        flex: 1, 
        overflow: 'auto' 
        }}
        >
        <Box
        pb={3}
        pr={3}
        borderBottom='solid 1px'
        borderColor='background.default'
        >
          {sidebarMenuItems.map((item) => (
            <SidebarMenuItem
              key={item.id}
              item={item}
              isActive={!item.isSpecial && activeView === item.id}
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