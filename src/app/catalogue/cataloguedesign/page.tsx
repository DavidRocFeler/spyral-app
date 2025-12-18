'use client'
import { ListViewIconSvg,PlusGreySvg, SquareIconList } from "@/assets/icons"
import { FlexCenter } from "@/components/ui/FlexCenter"
import IconSpan from "@/components/ui/IconSpan"
import SlideBarMenuLeft from "@/components/ui/SlideBarMenuLeft"
import { catalogueListView } from "@/mock/sideBarLeft.mock"
import { Box, Typography } from "@mui/material"
import { useState } from "react"
import SearchBarDropDown from "@/components/ui/SearchBarDropDown"
import SecondaryButton from "@/components/ui/SecondaryButton"
import { FlexColumn } from "@/components/ui/FlexColumn"
import UploadBoxMain from "@/components/ui/UploadBoxMain"
import CustomTextField from "@/components/ui/CustomTextField"
import PrimaryButton from "@/components/ui/PrimaryButton"

type ViewMode = 'square' | 'list';

const CatalogueDesign = () => {
  const [message, setMessage] = useState('');
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
        height='100%'
        >
        <SlideBarMenuLeft
        menuItems={catalogueListView}
        />
        </Box>

        <Box 
        pt={3.5}
        >
          <Box 
          pr={4}
          ml='auto'
          width='79%'
          pb={2}
          >
            <FlexColumn mb={0} gap={2}
            sx={{
              width: '100%',
              alignItems:'flex-start'
            }}
            >
              <Typography variant="h3">
                Catalogue Design
              </Typography>
            <UploadBoxMain
            width="100%"
            />
            </FlexColumn>

            <FlexColumn mb={3} gap={2}
            sx={{
            width: '67%',
            alignItems: 'flex-start'
            }}
            >
              <Typography variant="h8"> Catalogue name </Typography>
              <CustomTextField
              placeholder="Enter name"
              />
            </FlexColumn>

            <FlexColumn mb={3} gap={2}
            sx={{
            width: '67%',
            alignItems: 'flex-start'
            }}
            >
              <Typography variant="h8"> Description </Typography>
              <CustomTextField
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Say something about this catalogue"
                  height="120px"
                  alignItems="flex-start"
                  multiline
                  rows={3}
                />
            </FlexColumn>

            <FlexColumn mb={3} gap={2}
            sx={{
            width: '67%',
            alignItems: 'flex-start'
            }}
            >
              <Typography variant="h8"> Theme color </Typography>
              <FlexCenter
              mb={2}
              bgcolor='grey.900'
              height='44px'
              px={2}
              borderRadius='12px'
              sx={{
                width:'320px',
              }}
              >
                <Box
                width='24px'
                height='24px'
                borderRadius='50%'
                bgcolor='secondary.main'
                mr={2}
                />
                <Typography mr='auto' variant="h8"> #E2FC0B </Typography>
              </FlexCenter>
            </FlexColumn>

            <Box>
              <PrimaryButton
                text="Save"
                />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default CatalogueDesign;