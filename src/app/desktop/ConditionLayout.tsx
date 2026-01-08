// app/ConditionalLayout.tsx
'use client';
import { usePathname } from 'next/navigation';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/Header";
import HeaderRouterHandler from "@/components/HeaderRouterHandler";
import AddNewItem from "@/components/modals/AddNewItem";
import ModalWrapper from "./ModalWrapper";
import MusicPlayer from '@/components/ui/MusicPlayer';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.style.scrollbarGutter = 'stable';
    return () => {
      document.documentElement.style.scrollbarGutter = 'auto';
    };
  }, []);

  // Rutas que NO deben mostrar el layout principal (todas las de auth)
  const isAuthRoute = pathname?.includes('/access') || 
                      pathname?.includes('/login') || 
                      pathname?.includes('/signup');

  if (isAuthRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <HeaderRouterHandler/>
      <Box 
        className="custom-scrollbar"
        sx={{ 
          display: 'flex', 
          height: '100vh', 
          overflow: 'hidden' 
        }}
      >
        <Sidebar />
        <Box 
          sx={{ 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          <Header />
          <ModalWrapper>
            <AddNewItem/>
            {children}
          </ModalWrapper>
          <MusicPlayer/>
        </Box>
      </Box>
    </>
  );
}