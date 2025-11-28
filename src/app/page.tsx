// app/page.tsx
'use client'
import AddNewModal from '@/components/modals/AddNewModal';
import MusicPlayer from '@/components/ui/MusicPlayer';
import { CatalogueView, ContactsView, FilesView, HomeView, PlaylistsView, SongsView, StarredView } from '@/components/views/HomeView';
import { useNavigationStore } from '@/store/navigationStore';

const Home = () => {
  const { activeView } = useNavigationStore();

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <HomeView />;
      case 'songs':
        return <SongsView />;
      case 'catalogue':
        return <CatalogueView />;
      case 'playlists':
        return <PlaylistsView />;
      case 'files':
        return <FilesView />;
      case 'contacts':
        return <ContactsView />;
      case 'starred':
        return <StarredView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <>
      {renderView()}
      <AddNewModal/>
    </>
  );
}

export default Home;