'use client'
import { Box, Typography } from '@mui/material'
import UploadBoxMain from '@/components/ui/UploadBoxMain'
import PrimaryButton from '@/components/ui/PrimaryButton'
import { FlexColumn } from '@/components/ui/FlexColumn'

const AddTrackUpload = () => {
  return (
    <Box
    bgcolor='background.default'
    borderRadius='24px'
    p={2}
    sx={{
      width: '50%',
    }}
   >
      <Box mb={4}
      sx={{
        width: '100%',
      }}
      >
        <Typography
          width='fit-content'
          variant='h3'
          >
              Add Track
        </Typography>
      </Box>

      <FlexColumn
      sx={{
        alignItems: 'flex-end',
        width: '100%'
      }}
      >
        <UploadBoxMain
        width='100%'
        />
        <PrimaryButton
        text='Add track'
        />
      </FlexColumn>
   </Box>
  )
}

export default AddTrackUpload;