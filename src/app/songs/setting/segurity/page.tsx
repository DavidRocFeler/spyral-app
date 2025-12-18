'use client'
import { EditeIconSvg, ListViewIconSvg, PadLockIcon, PlusBlackSvg, PlusSvg, PorcentSvg, SquareIconList, UploadImageBrandIconSvg } from "@/assets/icons"
import CardCatalogueList from "@/components/catalogue/CardCatalogueList"
import UploadImageMetadata from "@/components/playlist/metadata/UploadImageMetadata"
import CustomTextField from "@/components/ui/CustomTextField"
import { FlexCenter } from "@/components/ui/FlexCenter"
import { FlexColumn } from "@/components/ui/FlexColumn"
import IconInput from "@/components/ui/IconInput"
import IconSpan from "@/components/ui/IconSpan"
import PrimaryButton from "@/components/ui/PrimaryButton"
import SearchBarDropDown from "@/components/ui/SearchBarDropDown"
import SecondaryButton from "@/components/ui/SecondaryButton"
import SelectCustom from "@/components/ui/SelectCustom"
import SlideBarMenuLeft from "@/components/ui/SlideBarMenuLeft"
import { catalogueList } from "@/mock/catalogueListCard.mock"
import { catalogueListView, menuItemsRegister, songsSettingData } from "@/mock/sideBarLeft.mock"
import { Box, Typography } from "@mui/material"
import { useState } from "react"

const SongsSegurity = () => {
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const mockFileSelect = ['English', 'Nederland', 'Germany', 'Spanish'];
  const [selectedChannel, setSelectedChannel] = useState(mockFileSelect[0]);

  return (
    <Box
    position='relative'
    minHeight='100%'
    >

      <Box 
      position='fixed'
      height='100%'
      width='15%'
      >
        <SlideBarMenuLeft
        menuItems={songsSettingData}
        />
      </Box>

      <Box 
      right={0}
      position='absolute'
      width='79%'
      pb={5}
      >
       <Box 
       pr={4}
       >
        <Box mb={4} mt={3}>
          <Typography variant="h3">
            Segurity
          </Typography>
        </Box>

        <FlexColumn
        sx={{
            width: '70%',
            alignItems: 'flex-start',
            gap: 3
        }}
        >
            <FlexColumn
            sx={{
                width: '100%',
                alignItems: 'flex-start',
                gap: 1
            }}
            >
              <Typography variant="h8">Current password</Typography>
              <CustomTextField
              placeholderWhite="***********"
              />
            </FlexColumn>
            <FlexColumn
            sx={{
                width: '100%',
                alignItems: 'flex-start',
                gap: 1
            }}
            >
              <Typography variant="h8">Change password</Typography>
              <CustomTextField
              placeholderWhite="Enter new password"
              placeholderColor="text.secondary"
              />
            </FlexColumn>
            <FlexColumn
            sx={{
                width: '100%',
                alignItems: 'flex-start',
                gap: 1
            }}
            >
              <Typography variant="h8">Confirm new password</Typography>
              <CustomTextField
              placeholderWhite="Enter new password again"
              placeholderColor="text.secondary"
              />
            </FlexColumn>

        </FlexColumn>

        <Box
        my={6}
        >
          <PrimaryButton
          text="Save Setting"
          height="43px"
          />
        </Box>

        <FlexColumn
        gap={3}
        sx={{
          alignItems: 'flex-start'
        }}
        >
          <Typography variant="h3"> Authentication 2FA </Typography>
          <SecondaryButton
          flexDirection="row-reverse"
          icon={PadLockIcon}
          text="Add 2FA Authentication"
          height="48px"
          bgcolor='grey.900'
          />
        </FlexColumn>
       </Box>
      </Box>
    </Box>
  )
}

export default SongsSegurity;