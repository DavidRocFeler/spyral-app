'use client'
import SongNavigationTabs from "@/components/songs/published/SongNavigationTabs"
import { Box, Typography } from "@mui/material"
import { usePathname } from 'next/navigation'

const SongsWorkLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  const hideLayoutRoutes = [
    '/desktop/songs/workin/workinprogress/workoptions/meta',
    '/desktop/songs/workin/workinprogress/workoptions/history',
    '/desktop/songs/workin/workinprogress/workoptions/catalogue',
    '/desktop/songs/workin/workinprogress/workoptions/work',
  ]

  const shouldShowLayout = !hideLayoutRoutes.some(route => pathname?.startsWith(route))

  if (!shouldShowLayout) {
    return <>{children}</>
  }

  return (
    <Box py={2} px={0}>
      <Typography ml={4} variant="h4" fontSize='24px'>
        Songs
      </Typography>
      <Box mt={5}>
        <SongNavigationTabs />
      </Box>
      <Box mt={3}>
        {children}
      </Box>
    </Box>
  )
}

export default SongsWorkLayout