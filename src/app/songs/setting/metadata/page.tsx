'use client'
import CheckBoxCustom from '@/components/ui/CheckBoxCustom'
import CustomTextField from '@/components/ui/CustomTextField'
import { FlexCenter } from '@/components/ui/FlexCenter'
import { FlexColumn } from '@/components/ui/FlexColumn'
import PrimaryButton from '@/components/ui/PrimaryButton'
import SlideBarMenuLeft from '@/components/ui/SlideBarMenuLeft'
import { songsSettingData } from '@/mock/sideBarLeft.mock'
import { Box, Typography } from '@mui/material'

const SongSettingMetada = () => {
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
        >
             <Typography variant='h3'> Metadata </Typography>

        <Box 
        my={4}
        sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 2,
            width: '100%'
        }}  
        >
        {checkboxOptions.map((option) => (
            <CheckBoxCustom
            key={option}
            text={option}
            />
        ))}
        </Box>

        <FlexColumn
        sx={{
            alignItems: 'flex-start',
            width: '70%',
            gap: 2
        }}
        >
            <Typography variant='h8'> Custom message metadata </Typography>
            <CustomTextField
            placeholderWhite="Say something about this catalogue"
            placeholderColor="text.secondary"
            height='110px'
            rows={6}
            alignItems="flex-start"
            multiline={true}
            // value={comment}
            // onChange={(e) => setComment(e.target.value)}
            />
        </FlexColumn>

        <Box
        mt={5}
        >
            <PrimaryButton
            text='Save settings'
            />
        </Box>
        </Box>
      </Box>
  )
}

export default SongSettingMetada