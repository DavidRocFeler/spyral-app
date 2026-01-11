'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useHeaderStore } from '@/store/useHeaderStore';

const HeaderRouterHandler = () => {
  const pathname = usePathname();
  const { setHeader, setBreadcrumb } = useHeaderStore();

  useEffect(() => {
    if (
      pathname === '/desktop/playlist/setting' ||
      pathname === '/desktop/playlist/presentation' ||
      pathname === '/desktop/playlist/metadata' ||
      pathname === '/desktop/playlist/writers'
    ) {
      setBreadcrumb([
        { label: 'Playlists', isActive: false },
        { label: 'Murmurs of Evening', isActive: true }
      ], 'transparent');
      return;
    }

    if (
      pathname?.startsWith('/desktop/songs/workin/workinprogress/workoptions/meta/') ||
      pathname?.startsWith('/desktop/songs/workin/workinprogress/workoptions/history') ||
      pathname?.startsWith('/desktop/songs/workin/workinprogress/workoptions/catalogue') ||
      pathname?.startsWith('/desktop/songs/workin/workinprogress/workoptions/work')
    ) {
      setBreadcrumb([
        { label: 'Songs', isActive: false },
        { label: 'Work In Progress', isActive: false },
        { label: 'Echoes of Twilight', isActive: true }
      ], 'transparent');
      return;
    }

    if (
      pathname === '/desktop/songs/workin/published' ||
      pathname === '/desktop/songs/workin/workinprogress' ||
      pathname === '/desktop/songs/workin/all'
    ) {
      setBreadcrumb([
        { label: 'Songs', isActive: false },
        { label: 'Work in Progress', isActive: true }
      ], 'transparent');
      return;
    }

    if (
      pathname === '/desktop/songs/collaborate' ||
      pathname === '/desktop/songs/register' ||
      pathname === '/desktop/songs/distribute' ||
      pathname === '/desktop/songs/revenue'
    ) {
      setBreadcrumb([
        { label: 'Songs', isActive: false },
        { label: 'WIP', isActive: false },
        { label: 'Say you won\'t let go', isActive: true }
      ], 'transparent');
      return;
    }

    const routeConfigs = [
      {
        test: (path: string) => path === '/desktop/catalogue/fullview',
        title: 'Catalogue name',
        bgColor: 'transparent'
      },
      {
        test: (path: string) => path.startsWith('/desktop/catalogue'),
        title: 'Catalogue',
        bgColor: 'transparent'
      },
      {
        test: (path: string) => path.startsWith('/desktop/playlist'),
        title: 'Play List',
        bgColor: 'transparent'
      },
      {
        test: (path: string) => path.startsWith('/desktop/userpanel'),
        title: 'Hello, David',
        bgColor: 'grey.900'
      },
      {
        test: (path: string) => path.includes('/desktop/songs/setting'),
        title: 'Settings',
        bgColor: 'grey.900'
      },
      {
        test: (path: string) => path.includes('/desktop/home/userpanel'),
        title: 'Hello, David',
        bgColor: 'grey.900'
      },
      {
        test: (path: string) => path.includes('/desktop/songs'),
        title: 'Hello, David',
        bgColor: 'grey.900'
      },
      {
        test: (path: string) => path.includes('/desktop/profile'),
        title: 'Your Artist Page',
        bgColor: 'transparent'
      },
      {
        test: (path: string) => path.includes('/desktop/files'),
        title: 'Files',
        bgColor: 'grey.900'
      },
      {
        test: (path: string) => path.includes('/desktop/contacts'),
        title: 'Contacts',
        bgColor: 'grey.900'
      },
      {
        test: (path: string) => path.includes('/desktop/starred'),
        title: 'Starred',
        bgColor: 'grey.900'
      },
    ];

    const matchedConfig = routeConfigs.find(config => config.test(pathname || ''));

    if (matchedConfig) {
      setHeader(matchedConfig.title, matchedConfig.bgColor);
    } else {
      setHeader('Home', 'grey.900');
    }
  }, [pathname, setHeader, setBreadcrumb]);

  return null;
};

export default HeaderRouterHandler;