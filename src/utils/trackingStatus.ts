// utils/trackingStatus.ts
export const getTrackingStatus = (pathname: string | null): number => {
    if (pathname === '/desktop/songs') return 1;
    if (pathname === '/desktop/songs/collaborate') return 2;
    if (pathname === '/desktop/songs/register') return 3;
    if (pathname === '/desktop/songs/distribute') return 4;
    if (pathname === '/desktop/songs/revenue') return 5;
    
    if (pathname?.startsWith('/desktop/songs/revenue')) return 5;
    if (pathname?.startsWith('/desktop/songs/distribute')) return 4;
    if (pathname?.startsWith('/desktop/songs/register')) return 3;
    if (pathname?.startsWith('/desktop/songs/collaborate')) return 2;
    if (pathname?.startsWith('/desktop/songs')) return 1;
    
    return 1;
  };