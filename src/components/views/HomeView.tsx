// components/Views/HomeView.tsx

export const HomeView = () => {
  return <EmptyState />;
};

// components/Views/SongsView.tsx
import { Box, Typography } from '@mui/material';
import EmptyState from '../home/EmptyState';

export const SongsView = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h1" sx={{ fontSize: '24px' }}>
        Este es el componente Songs
      </Typography>
    </Box>
  );
};

// components/Views/CatalogueView.tsx
export const CatalogueView = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h1" sx={{ fontSize: '24px' }}>
        Este es el componente Catalogue
      </Typography>
    </Box>
  );
};

// components/Views/PlaylistsView.tsx
export const PlaylistsView = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h1" sx={{ fontSize: '24px' }}>
        Este es el componente Playlists
      </Typography>
    </Box>
  );
};

// components/Views/FilesView.tsx
export const FilesView = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h1" sx={{ fontSize: '24px' }}>
        Este es el componente Files
      </Typography>
    </Box>
  );
};

// components/Views/ContactsView.tsx
export const ContactsView = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h1" sx={{ fontSize: '24px' }}>
        Este es el componente Contacts
      </Typography>
    </Box>
  );
};

// components/Views/StarredView.tsx
export const StarredView = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h1" sx={{ fontSize: '24px' }}>
        Este es el componente Starred
      </Typography>
    </Box>
  );
};