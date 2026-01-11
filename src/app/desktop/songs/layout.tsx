'use client'
import { Box } from '@mui/material'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import ListButtonsTracking from '@/components/songs/ListButtonsTracking'
import Demo from '@/components/songs/Demo'
import MinimizeDemo from '@/components/songs/MinimizeDemo'
import { getTrackingStatus } from '@/utils/trackingStatus'

const SongsLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const pathname = usePathname()
  const trackingStatus = getTrackingStatus(pathname)
  
  const [pageStates, setPageStates] = useState<Record<string, boolean>>({})
  
  const isDemoMinimized = pageStates[pathname || ''] || false
  
  const registerButtonDisplay = trackingStatus === 4 || trackingStatus === 5 ? 'none' : 'flex'
  
  const hideLayoutRoutes = [
    '/desktop/songs/workin/workinprogress',
    '/desktop/songs/workin/published',
    '/desktop/songs/workin/setting',
    '/desktop/songs/workin/all',

    '/desktop/songs/workin/workinprogress/workoptions/meta',
    '/desktop/songs/workin/workinprogress/workoptions/history',
    '/desktop/songs/workin/workinprogress/workoptions/catalogue',

    '/desktop/songs/setting',
  ]
  
  const hideDemoRoutes = [
    '/desktop/songs/collaborate/withstate'
  ]

  const shouldShowLayout = !hideLayoutRoutes.some(route => pathname?.startsWith(route))
  
  const shouldShowDemo = trackingStatus !== 1 && !hideDemoRoutes.some(route => pathname?.startsWith(route))
  
  const handleToggleDemo = () => {
    setPageStates(prev => ({
      ...prev,
      [pathname || '']: !isDemoMinimized
    }))
  }

  return (
    <Box display="flex" flexDirection='column' gap={2} pt={0} px={shouldShowLayout ? 4 : 0}>
      {shouldShowLayout && (
        <ListButtonsTracking/>
      )}
      
      {shouldShowLayout && shouldShowDemo && (
        <>
          {trackingStatus === 2 ? (
            <>
              {isDemoMinimized ? (
                <MinimizeDemo 
                  onMinimize={handleToggleDemo} 
                  trackingStatus={registerButtonDisplay}
                />
              ) : (
                <Demo 
                  onExpand={handleToggleDemo} 
                  trackingStatus={registerButtonDisplay} 
                />
              )}
            </>
          ) : (
            <>
              {isDemoMinimized ? (
                <Demo 
                  onExpand={handleToggleDemo} 
                  trackingStatus={registerButtonDisplay} 
                />
              ) : (
                <MinimizeDemo 
                  onMinimize={handleToggleDemo} 
                  trackingStatus={registerButtonDisplay}
                />
              )}
            </>
          )}
        </>
      )}
      
      {children}
    </Box>
  )
}

export default SongsLayout;