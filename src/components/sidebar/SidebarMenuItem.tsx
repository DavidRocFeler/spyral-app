import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { ISidebarMenuItemProps } from '@/types/sidebar';

const SidebarMenuItem = ({ item, isActive, onClick }: ISidebarMenuItemProps) => {
  const Icon = item.icon;

  if (item.isSpecial) {
    return (
      <Box
        onClick={onClick}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 2,
          py: 1.5,
          px: 2,
          borderRadius: 15,
          mb: 1.1,
          bgcolor: 'background.default',
          color: 'text.primary',
          textTransform: 'none',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          '&:hover': {
            opacity: 0.8,
          },
        }}
      >
        <Icon/>
        <Typography variant="h8">
          {item.label}
        </Typography>
      </Box>
    );
  }

  const href = item.id === 'home' ? '/desktop/home' : `/desktop/${item.id}`;

  return (
    <Link href={href} passHref style={{ textDecoration: 'none' }}>
      <Box
        className={isActive ? 'gradient-active' : 'hover-overlay'}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          borderRadius: 15,
          py: 1.5,
          px: 2,
          mb: 1.1,
          cursor: 'pointer',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& svg': {
              fill: isActive ? '#000' : '#FFF',
              color: isActive ? '#000' : '#FFF',
              transition: 'all 0.2s ease',
            },
            '& svg path': {
              fill: isActive ? '#000' : '#FFF',
            },
            '& svg circle': {
              fill: isActive ? '#000' : '#FFF',
            },
            '& svg rect': {
              fill: isActive ? '#000' : '#FFF',
            },
          }}
        >
          <Icon />
        </Box>
        <Typography
          variant='h8'
          pt={0.2}
          sx={{
            color: isActive ? '#000' : '#FFF',
          }}
        >
          {item.label}
        </Typography>
      </Box>
    </Link>
  );
};

export default SidebarMenuItem;