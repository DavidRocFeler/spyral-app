'use client';

import Link from 'next/link';
import { Box, Button } from '@mui/material';
import { usePathname } from 'next/navigation';
import { ISongNavigationTabsProps } from '@/types/song';
import { tabsSong } from '@/mock/tabsSong.mock';

 const SongNavigationTabs = ({ 
  tabs = tabsSong 
}: ISongNavigationTabsProps) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        pb: 1,
        pl: 4,
        position: 'relative',
        // Contenedor para el border bottom absoluto
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          // Usar viewport width para ignorar cualquier padding del padre
          left: '50%',
          right: '50%',
          width: '100%', // Siempre el 100% del viewport
          transform: 'translateX(-50%)',
          height: '1px',
          zIndex: -1,
          backgroundColor: 'grey.900',
        }
      }}
    >
      {tabs.map((tab) => {
        const active = isActive(tab.href);
        
        return (
          <Button
            key={tab.href}
            component={Link}
            href={tab.href}
            disableFocusRipple
            disableRipple
            sx={{
              position: 'relative',
              zIndex: 1,
              all: 'unset',
              px: 1,
              pb: 2,
              mb: -1,
              borderBottom: active ? '1px solid white' : '1px solid transparent',
              color: active ? 'text.primary' : 'text.secondary',
              textTransform: 'none',
              typography: 'h8',
              transition: 'all 0.3s ease',
            //   '&:hover': {
            //     border: '1px solid rgba(255, 255, 255, 0.3)',
            //   },
            }}
          >
            {tab.label}
          </Button>
        );
      })}
    </Box>
  );
}

export default SongNavigationTabs