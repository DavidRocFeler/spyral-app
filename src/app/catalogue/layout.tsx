'use client'
import { ListViewIconSvg, PlusBlackSvg, PlusGreySvg, SquareIconList } from "@/assets/icons"
import { FlexCenter } from "@/components/ui/FlexCenter"
import IconSpan from "@/components/ui/IconSpan"
import PrimaryButton from "@/components/ui/PrimaryButton"
import SecondaryButton from "@/components/ui/SecondaryButton"
import SearchBarDropDown from "@/components/ui/SearchBarDropDown"
import SlideBarMenuLeft from "@/components/ui/SlideBarMenuLeft"
import { catalogueListView } from "@/mock/sideBarLeft.mock"
import { Box } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function CatalogueLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  
  // Determinar qué botón está activo según la ruta
  const isSquareView = pathname === '/catalogue';
  const isListView = pathname !== '/catalogue';

  // No renderizar el header en fullview
  const isFullView = pathname === '/catalogue/fullview';

  // Rutas con PrimaryButton (mycatalogue y catalogue principal)
  const isPrimaryButton = pathname === '/catalogue' || pathname === '/catalogue/mycatalogue';

  // Rutas donde NO se muestra el sidebar (fullview y page principal)
  const hideSidebar = pathname === '/catalogue/fullview' || pathname === '/catalogue';

  // Si es fullview, solo renderizar children
  if (isFullView) {
    return <>{children}</>;
  }

  return (
    <Box>
      {/* Header con Search y Botones */}
      <FlexCenter sx={{
        width: '100%',
        px: 4,
        mb: 2
      }}>
        <SearchBarDropDown/>
        <FlexCenter ml='auto' gap={2.5}>
          
          {/* Botón condicional */}
          {isPrimaryButton ? (
            <Link
            href='/catalogue/fullview'
            style={{
              color: 'inherit',
              textDecoration: 'none'
            }}
            >
              <PrimaryButton
                text='Add new'
                icon={PlusBlackSvg}
              />
            </Link>
          ) : (
            <Link
            href='/catalogue/fullview'
            style={{
              color: 'inherit',
              textDecoration: 'none'
            }}
            >
              <SecondaryButton
                text='Add new'
                height="44px"
                color="text.secondary"
                icon={PlusGreySvg}
                bgcolor="background.default"
                />
            </Link>
          )}

          <FlexCenter>
            {/* Square List Button */}
            <Link href="/catalogue">
              <IconSpan
                borderRadius='6px'
                width='40px'
                height='40px'
                icon={SquareIconList}
                bgcolor={isSquareView ? 'background.paper' : 'background.default'}
                borderBottomRightRadius='0px'
                borderTopRightRadius='0px'
              />
            </Link>
            {/* List View Button */}
            <Link href="/catalogue/mycatalogue">
              <IconSpan
                borderRadius='6px'
                width='40px'
                height='40px'
                icon={ListViewIconSvg}
                bgcolor={isListView ? 'background.paper' : 'background.default'}
                borderBottomLeftRadius='0px'
                borderTopLeftRadius='0px'
              />
            </Link>
          </FlexCenter>
        </FlexCenter>
      </FlexCenter>

      {/* Contenido con o sin Sidebar */}
      {hideSidebar ? (
        <>{children}</>
      ) : (
        <Box 
          sx={{ 
            display: 'flex',
            minHeight: '100vh',
          }}
        >
          {/* Sidebar */}
          <Box
            width='15%'
            flexShrink={0}
          >
            <SlideBarMenuLeft menuItems={catalogueListView} />
          </Box>

          {/* Contenido */}
          <Box 
            pt={3.6}
            ml='auto'
            width='79%'
            pb={2}
          >
            {children}
          </Box>
        </Box>
      )}
    </Box>
  )
}