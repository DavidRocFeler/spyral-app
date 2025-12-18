'use client'
import { PadLockIcon, PlusBlackSvg, PlusSvg } from "@/assets/icons"
import CardCatalogueList from "@/components/catalogue/CardCatalogueList"
import AddUserSetting from "@/components/songs/setting/AddUserSetting"
import CustomTextField from "@/components/ui/CustomTextField"
import { FlexCenter } from "@/components/ui/FlexCenter"
import { FlexColumn } from "@/components/ui/FlexColumn"
import PrimaryButton from "@/components/ui/PrimaryButton"
import SearchBarDropDown from "@/components/ui/SearchBarDropDown"
import SecondaryButton from "@/components/ui/SecondaryButton"
import SlideBarMenuLeft from "@/components/ui/SlideBarMenuLeft"
import { catalogueList } from "@/mock/catalogueListCard.mock"
import { songSettingUserListTable } from "@/mock/settingUserTable.mock"
import { songsSettingData } from "@/mock/sideBarLeft.mock"
import { Box, Typography } from "@mui/material"
import { useState } from "react"

const SongsSettingUsers = () => {
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
            Users
          </Typography>
        </Box>

        <FlexCenter
        sx={{
            width: '100%'
        }}
        >
            <SearchBarDropDown/>
            <Box
            ml='auto'
            >
                <PrimaryButton
                text="Add user"
                icon={PlusBlackSvg}
                />
            </Box>
        </FlexCenter>

        <Box mt={3}>
        <AddUserSetting
          songUserSettingListTable={songSettingUserListTable}
          />
       </Box>

        <Box mt={6}>
          <PrimaryButton
          text="Add user"
          />
        </Box>

       </Box>
      </Box>
    </Box>
  )
}

export default SongsSettingUsers;