import { ImageUploadBrandSvg, UploadImageBrandIconSvg } from '@/assets/icons'
import { IUploadImageMetadata } from '@/types/playlist';
import { Box, Typography } from '@mui/material'

const UploadImageMetadata = ({
  height = '230px',
  width = '100%',
  borderRadius = '16px',
  mainText = 'Drag and drop image here or',
  secondaryText = 'Browser',
  icon = ImageUploadBrandSvg,
  bgcolor = 'background.paper'
}: IUploadImageMetadata) => {
  const IconSvg = icon
  return (
    <>
    {/* Upload Box */}
    <Box
       sx={{
         height: height,
         bgcolor: bgcolor,
         borderRadius: borderRadius,
         p: 6,
         px: 2,
         width: width,
         border: '2px dashed',
         borderColor: 'grey.900',
         cursor: 'pointer',
         transition: 'all 0.2s ease',
         '&:hover': {
           borderColor: 'secondary.main',
           bgcolor: 'primary.main',
         },
       }}
     >
       <Box
         sx={{
           display: 'flex',
           justifyContent: 'center',
           mb: 2,
         }}
       >
         <Box
           sx={{
             width: 48,
             height: 48,
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
           }}
         >
           <IconSvg/>
         </Box>
       </Box>

       <Box
       display='flex'
       flexDirection='column'
       sx={{
        width: 'fit-content',
        mx: 'auto'
       }}
       >
         <Typography
          textAlign='center'
           variant="h10"
           color= 'text.secondary'
         >
           {mainText}{' '}
           <Box
             component="span"
             sx={{
               color: 'secondary.main',
               fontWeight: 450,
             }}
           >
             {secondaryText}
           </Box>
         </Typography>
       </Box>
     </Box>
    </>
  )
}

export default UploadImageMetadata;