'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useHeaderStore } from '@/store/useHeaderStore';

const HeaderRouterHandler = () => {
  const pathname = usePathname();
  const setHeader = useHeaderStore((state) => state.setHeader);

  useEffect(() => {
    // Configuraciones por ruta
    const routeConfigs = [
      {
        test: (path: string) => path === '/catalogue/fullview',
        title: 'Catalogue name',
        bgColor: 'transparent'
      },
      {
        test: (path: string) => path.startsWith('/catalogue'),
        title: 'Catalogue',
        bgColor: 'transparent'
      },
      {
        test: (path : string ) => path.startsWith('/playlist'),
        title: 'Play List',
        bgColor: 'transparent'
      },
    ];

    // Encontrar la primera configuración que coincida
    const matchedConfig = routeConfigs.find(config => config.test(pathname));
    
    if (matchedConfig) {
      setHeader(matchedConfig.title, matchedConfig.bgColor);
    } else {
      // Ruta por defecto
      setHeader('Home', 'grey.900');
    }
  }, [pathname, setHeader]);

  return null;
};

export default HeaderRouterHandler;