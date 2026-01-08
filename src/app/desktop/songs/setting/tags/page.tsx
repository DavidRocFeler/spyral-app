'use client'
import { PlusBlackSvg } from '@/assets/icons'
import AddUserSetting from '@/components/songs/setting/AddUserSetting'
import TagsSettingTable from '@/components/songs/setting/TagsSettingTable'
import CheckBoxCustom from '@/components/ui/CheckBoxCustom'
import CustomTextField from '@/components/ui/CustomTextField'
import { FlexCenter } from '@/components/ui/FlexCenter'
import { FlexColumn } from '@/components/ui/FlexColumn'
import PrimaryButton from '@/components/ui/PrimaryButton'
import SearchBarDropDown from '@/components/ui/SearchBarDropDown'
import SlideBarMenuLeft from '@/components/ui/SlideBarMenuLeft'
import { songSettingUserListTable } from '@/mock/settingUserTable.mock'
import { songsSettingTagsData, songsSettingTagsDataV2 } from '@/mock/setttingTagsListTable.mock'
import { songsSettingData } from '@/mock/sideBarLeft.mock'
import { Box, Typography } from '@mui/material'

const SongSettingTags = () => {

  return (
  
        <Box 
        >
            <FlexColumn mt={3}
            sx={{
                width: '100%',
                alignItems: 'flex-start',
                gap: 3
            }}
            >
                <Typography variant='h3'>Tags Track</Typography>
                <FlexCenter sx={{
                    width: '100%'
                }}>
                    <SearchBarDropDown
                    placeholder='Search track tag'
                    />
                    <Box ml='auto'>
                        <PrimaryButton
                        text='Add track tag'
                        icon={PlusBlackSvg}
                        />
                    </Box>
                </FlexCenter>
            </FlexColumn>

            <Box mt={3}>
                <TagsSettingTable
                songTagsSettingListTable={songsSettingTagsData}
                />
            </Box>

            <FlexColumn mt={5}
            sx={{
                width: '100%',
                alignItems: 'flex-start',
                gap: 3
            }}
            >
                <Typography variant='h3'>Playlist Tags</Typography>
                <FlexCenter sx={{
                    width: '100%'
                }}>
                    <SearchBarDropDown
                    placeholder='Search track tag'
                    />
                    <Box ml='auto'>
                        <PrimaryButton
                        text='Add playlist tag'
                        icon={PlusBlackSvg}
                        />
                    </Box>
                </FlexCenter>
            </FlexColumn>

            <Box mt={3}>
                <TagsSettingTable 
                songTagsSettingListTable={songsSettingTagsDataV2}
                />
            </Box>

        </Box>
  )
}

export default SongSettingTags;