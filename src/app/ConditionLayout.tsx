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
  
  // Reservar espacio para el scrollbar siempre
  useEffect(() => {
    // scrollbarGutter reserva el espacio sin mostrar scrollbar vacío
    document.documentElement.style.scrollbarGutter = 'stable';
    
    // Alternativa: si scrollbarGutter no funciona en tu navegador
    // document.documentElement.style.overflowY = 'scroll';
    
    return () => {
      // Cleanup al desmontar (opcional)
      document.documentElement.style.scrollbarGutter = 'auto';
    };
  }, []);

  // Rutas que NO deben mostrar el layout principal
  const isAuthRoute = pathname?.startsWith('/access');

  // Si es ruta de autenticación, solo renderiza children
  if (isAuthRoute) {
    return <>{children}</>;
  }

  // Si no es ruta de autenticación, renderiza el layout completo
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