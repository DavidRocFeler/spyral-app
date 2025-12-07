// components/Header/Header.tsx
import { Box, InputBase, Avatar, Typography } from '@mui/material';
import { SearchIconSvg, BellIconSvg, SettingIconSvg } from '@/assets/icons';
import Image from 'next/image';
import { headerData } from '@/mock/header.mock';
import { IHeaderProps } from '@/types/header';
import SearchBar from './ui/SearchBar';

const Header = () => {
  // Como headerData es un objeto, lo usamos directamente
  const profileData: IHeaderProps = headerData;

  return (
    <Box
      sx={{
        height: '90px',
        bgcolor: 'primary.main',
        borderBottom: '1px solid',
        borderColor: 'grey.900',
        display: 'flex',
        alignItems: 'end',
        px: 4,
        pb: 2.95
      }}
    >
      {/* Left - Navigation */}
      <Box sx={{ display: 'flex', gap: 3 }}>
        <Typography
        pb={0.5}
        variant='h2'
        >
          Home
        </Typography>
      </Box>

      <Box 
        display='flex'
        flexDirection='row'
        ml='auto'
      >
        {/* Search */}
        <SearchBar
        icon={SearchIconSvg}
        placeholder='Search song, album, artist...'
        />

        {/* Actions */}
        <Box 
          ml={2.5}
          sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
        >
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
            <BellIconSvg style={{ width: 20, height: 20, color: '#FFF' }} />
          </Box>

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
          
          {/* Avatar/Profile Image */}
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
        </Box>
      </Box>
    </Box>
  );
};

export default Header;