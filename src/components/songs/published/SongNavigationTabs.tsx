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

  type GroupedTab = {
    label: string;
    href: string;
    relatedHrefs: string[];
  };

  const uniqueTabs = tabs.reduce((acc: GroupedTab[], tab) => {
    const existing = acc.find((t: GroupedTab) => t.label === tab.label);
    if (!existing) {
      acc.push({
        label: tab.label,
        href: tab.href,
        relatedHrefs: [tab.href]
      });
    } else {
      existing.relatedHrefs.push(tab.href);
    }
    return acc;
  }, []);

  const isActive = (relatedHrefs: string[]) => {
    return relatedHrefs.some(href => pathname === href);
  };

  console.log('uniqueTabs:', uniqueTabs);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        pb: 1,
        pl: 4,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: '50%',
          right: '50%',
          width: '100%', 
          transform: 'translateX(-50%)',
          height: '1px',
          zIndex: -1,
          backgroundColor: 'grey.900',
        }
      }}
    >
      {uniqueTabs.map((tab: GroupedTab) => {
        const active = isActive(tab.relatedHrefs);
        return (
          <Button
            key={tab.label}
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
            }}
          >
            {tab.label}
          </Button>
        );
      })}
    </Box>
  );
}

export default SongNavigationTabs;