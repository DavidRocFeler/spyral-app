'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useHeaderStore } from '@/store/useHeaderStore';

const HeaderRouterHandler = () => {
  const pathname = usePathname();
  const setHeader = useHeaderStore((state) => state.setHeader);

  useEffect(() => {
    // AQUÍ PONES TUS CONDICIONALES
    if (pathname.startsWith('/catalogue')) {
      setHeader('Catalogue', 'transparent');
    } else if (pathname.startsWith('/settings')) {
      setHeader('Settings', 'grey.900');
    } else {
      setHeader('Home', 'grey.900');
    }
  }, [pathname, setHeader]);

  return null;
};

export default HeaderRouterHandler;