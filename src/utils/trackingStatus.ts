// utils/trackingStatus.ts
export const getTrackingStatus = (pathname: string | null): number => {
    if (pathname === '/songs') return 1;
    if (pathname === '/songs/collaborate') return 2;
    if (pathname === '/songs/register') return 3;
    if (pathname === '/songs/distribute') return 4;
    if (pathname === '/songs/revenue') return 5;
    
    if (pathname?.startsWith('/songs/revenue')) return 5;
    if (pathname?.startsWith('/songs/distribute')) return 4;
    if (pathname?.startsWith('/songs/register')) return 3;
    if (pathname?.startsWith('/songs/collaborate')) return 2;
    if (pathname?.startsWith('/songs')) return 1;
    
    return 1;
  };