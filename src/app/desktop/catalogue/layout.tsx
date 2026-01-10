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

const CatalogueLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const pathname = usePathname();
  
  // Determine which button is active based on the route
  const isSquareView = pathname === '/desktop/catalogue';
  const isListView = pathname !== '/desktop/catalogue';

  // Do not render header in fullview
  const isFullView = pathname === '/desktop/catalogue/fullview';

  // Routes with PrimaryButton (mycatalogue and main catalogue)
  const isPrimaryButton = pathname === '/desktop/catalogue' || pathname === '/desktop/catalogue/mycatalogue';

  // Routes where sidebar is NOT shown (fullview and main page)
  const hideSidebar = pathname === '/desktop/catalogue/fullview' || pathname === '/desktop/catalogue';

  // If it's fullview, only render children
  if (isFullView) {
    return <>{children}</>;
  }

  return (
    <Box>
      {/* Header with Search and Buttons */}
      <FlexCenter sx={{
        width: '100%',
        px: 4,
        mb: 2
      }}>
        <SearchBarDropDown/>
        <FlexCenter ml='auto' gap={2.5}>
          
          {/* Conditional button */}
          {isPrimaryButton ? (
            <Link
            href='/desktop/catalogue/fullview'
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
            href='/desktop/catalogue/fullview'
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
            <Link href="/desktop/catalogue">
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
            <Link href="/desktop/catalogue/mycatalogue">
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

      {/* Content with or without Sidebar */}
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

          {/* Content */}
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

export default CatalogueLayout;