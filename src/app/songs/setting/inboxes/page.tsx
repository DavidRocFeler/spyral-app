'use client'
import { PlusBlackSvg } from '@/assets/icons'
import CheckBoxCustom from '@/components/ui/CheckBoxCustom'
import CustomTextField from '@/components/ui/CustomTextField'
import { FlexCenter } from '@/components/ui/FlexCenter'
import { FlexColumn } from '@/components/ui/FlexColumn'
import PrimaryButton from '@/components/ui/PrimaryButton'
import SearchBarDropDown from '@/components/ui/SearchBarDropDown'
import SlideBarMenuLeft from '@/components/ui/SlideBarMenuLeft'
import { songsSettingData } from '@/mock/sideBarLeft.mock'
import { Box, Typography } from '@mui/material'

const SongSettingInboxes = () => {
    const checkboxOptions = ['Artist', 'Album', 'Genre', 'Grouping', 'Comments'];

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
        pt={3}
        pr={4}
        >
             <Typography variant='h3'> Inboxes </Typography>

            <Box mt={3}>
                <SearchBarDropDown
                placeholder='Search Inbox'
                />
            </Box>

            <FlexColumn mt={3}
            sx={{
                width: '100%',
                alignItems: 'flex-start',
                gap: 3
            }}
            >
                <Typography variant='h3'>My inboxes</Typography>
                <CustomTextField
                placeholderWhite='Http//:-.........'
                />
            </FlexColumn>

            <FlexColumn mt={3}
            sx={{
                width: '100%',
                alignItems: 'flex-start',
                gap: 3
            }}
            >
                <Typography variant='h3'>Tean inboxes</Typography>
                <CustomTextField
                placeholderWhite='Http//:-.........'
                />
            </FlexColumn>

            <FlexColumn mt={3}
            sx={{
                width: '100%',
                alignItems: 'flex-start',
                gap: 3
            }}
            >
                <Typography variant='h3'>Channel</Typography>
                <FlexCenter sx={{
                    width: '100%'
                }}>
                    <SearchBarDropDown
                    placeholder='Search channel'
                    />
                    <Box ml='auto'>
                        <PrimaryButton
                        text='Add channel'
                        icon={PlusBlackSvg}
                        />
                    </Box>
                </FlexCenter>
            </FlexColumn>
        </Box>
      </Box>
  )
}

export default SongSettingInboxes;