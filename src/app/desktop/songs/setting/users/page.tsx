import { PlusBlackSvg } from "@/assets/icons"
import AddUserSetting from "@/components/songs/setting/AddUserSetting"
import { FlexCenter } from "@/components/ui/FlexCenter"
import PrimaryButton from "@/components/ui/PrimaryButton"
import SearchBarDropDown from "@/components/ui/SearchBarDropDown"
import { songSettingUserListTable } from "@/mock/settingUserTable.mock"
import { Box, Typography } from "@mui/material"

const SongsSettingUsers = () => {


  return (
       <Box 
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
  )
}

export default SongsSettingUsers;