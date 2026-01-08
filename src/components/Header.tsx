'use client';
import { Box, Typography } from '@mui/material';
import { SearchIconSvg, BellIconSvg, SettingIconSvg, ChevronRightIcon } from '@/assets/icons';
import Image from 'next/image';
import { headerData } from '@/mock/header.mock';
import { IHeaderProps } from '@/types/header';
import SearchBar from './ui/SearchBar';
import { useHeaderStore } from '@/store/useHeaderStore';
import Link from 'next/link';
import { FlexCenter } from './ui/FlexCenter';

const Header = () => {
  const { titleHeader, borderColor, showBreadcrumb, breadcrumbs } = useHeaderStore();
  const profileData: IHeaderProps = headerData;

  return (
    <Box
      sx={{
        height: '90px',
        position: 'relative',
        zIndex: 2,
        bgcolor: 'primary.main',
        borderBottom: '1px solid',
        borderColor: borderColor,
        display: 'flex',
        alignItems: 'center',
        px: 4,
        py: 6
      }}
    >
      {/* Left - Navigation */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        {/* Primary Headline */}
        {!showBreadcrumb && titleHeader && (
          <Typography variant='h2'>
            {titleHeader}
          </Typography>
        )}

        {/* Secondary Headline (Breadcrumb) */}
        {showBreadcrumb && breadcrumbs.length > 0 && (
          <FlexCenter gap={2}>
            {breadcrumbs.map((step, index) => (
              <FlexCenter key={index} gap={2}>
                <Typography
                  color={step.isActive ? 'text.primary' : 'text.secondary'}
                  variant='h8'
                >
                  {step.label}
                </Typography>
                {index < breadcrumbs.length - 1 && <ChevronRightIcon />}
              </FlexCenter>
            ))}
          </FlexCenter>
        )}
      </Box>

      <Box display='flex' flexDirection='row' ml='auto'>
        {/* Search */}
        <SearchBar
          icon={SearchIconSvg}
          placeholder='Search song, album, artist...'
        />

        {/* Actions */}
        <Box ml={2.5} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Link href='/desktop/songs/setting/general'>
            <Box
              sx={{
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                cursor: 'pointer',
                bgcolor: 'background.default'
              }}
            >
              <SettingIconSvg style={{ width: 20, height: 20, color: '#FFF' }} />
            </Box>
          </Link>

          <Box
            sx={{
              position: 'relative',
              width: 44,
              height: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              cursor: 'pointer',
              bgcolor: 'background.default'
            }}
          >
            <Box
              bgcolor='secondary.main'
              width='6px'
              height='6px'
              borderRadius='50px'
              position='absolute'
              top={9}
              right={9}
            />
            <BellIconSvg style={{ width: 20, height: 20, color: '#FFF' }} />
          </Box>

          <Link href='/desktop/profile'>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              <Image
                width={40}
                height={40}
                src={profileData.image}
                alt={profileData.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </Box>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;