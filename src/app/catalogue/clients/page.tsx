'use client'
import { ListViewIconSvg,PlusBrandIconSvg,PlusGreySvg, SearchWhiteIconSvg, SmallPlusBrandSvg, SquareIconList } from "@/assets/icons"
import { FlexCenter } from "@/components/ui/FlexCenter"
import IconSpan from "@/components/ui/IconSpan"
import SlideBarMenuLeft from "@/components/ui/SlideBarMenuLeft"
import { catalogueListView } from "@/mock/sideBarLeft.mock"
import { Box, Typography } from "@mui/material"
import { useState } from "react"
import SearchBarDropDown from "@/components/ui/SearchBarDropDown"
import SecondaryButton from "@/components/ui/SecondaryButton"
import { FlexColumn } from "@/components/ui/FlexColumn"
import SearchBar from "@/components/ui/SearchBar"
import TextButton from "@/components/ui/TextButton"

type ViewMode = 'square' | 'list';

const Client = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('square');

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
          <SecondaryButton
            text='Add new'
            height="44px"
            color="text.secondary"
            icon={PlusGreySvg}
            bgcolor="background.default"
          />
          <FlexCenter>
            {/* Square List Button */}
            <IconSpan
              borderRadius='6px'
              width='40px'
              height='40px'
              icon={SquareIconList}
              bgcolor={viewMode === 'square' ? 'background.paper' : 'background.default'}
              borderBottomRightRadius='0px'
              borderTopRightRadius='0px'
              onClick={() => setViewMode('square')}
            />
            {/* List View Button */}
            <IconSpan
              borderRadius='6px'
              width='40px'
              height='40px'
              icon={ListViewIconSvg}
              bgcolor={viewMode === 'list' ? 'background.paper' : 'background.default'}
              borderBottomLeftRadius='0px'
              borderTopLeftRadius='0px'
              onClick={() => setViewMode('list')}
            />
          </FlexCenter>
        </FlexCenter>
      </FlexCenter>

      <Box
      sx={{
        position: 'relative'
      }}
      >
        <Box
        position='absolute'
        height='100vh'
        >
        <SlideBarMenuLeft
        menuItems={catalogueListView}
        />
        </Box>

        <Box 
        pt={3.5}
        ml='auto'
        height='100%'
        width='79%'
        pb={2}
        >
          <Box 
          pr={4}
          >
            <FlexColumn mb={0} gap={3.5}
            sx={{
              width: '100%',
              alignItems:'flex-start'
            }}
            >
              <Typography variant="h3">
              Clients
              </Typography>
              <SearchBar
              icon={SearchWhiteIconSvg}
              placeholder="Search"
              width="320px"
              />
             <FlexCenter gap={1.5}>
                <Typography variant="h8" color='text.secondary'> No Clients here yet! Invite people to your Catalogue </Typography>
                <TextButton
                gap={1}
                color="secondary.main"
                text='Invite client'
                icon={SmallPlusBrandSvg}
                flexDirection="row-reverse"
                />
             </FlexCenter>
            </FlexColumn>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Client;