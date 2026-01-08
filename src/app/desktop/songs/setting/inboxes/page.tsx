import { PlusBlackSvg } from '@/assets/icons'
import CustomTextField from '@/components/ui/CustomTextField'
import { FlexCenter } from '@/components/ui/FlexCenter'
import { FlexColumn } from '@/components/ui/FlexColumn'
import PrimaryButton from '@/components/ui/PrimaryButton'
import SearchBarDropDown from '@/components/ui/SearchBarDropDown'
import { Box, Typography } from '@mui/material'

const SongSettingInboxes = () => {

  return (
        <Box 
        pb={5}
        pt={3}
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
  )
}

export default SongSettingInboxes;