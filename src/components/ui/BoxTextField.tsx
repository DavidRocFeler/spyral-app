import { Box } from '@mui/material'
import CustomTextField from './CustomTextField'
import { FlexCenter } from './FlexCenter'
import TextButton from './TextButton'
import { ArrowLineGreySvg } from '@/assets/icons'
import SecondaryButtonGrey from './SecondaryButtonGrey'
import { IBoxTextField } from '@/types/ui'

const BoxTextField = ({
boxmt = 0.5,
flexDirection,
IconSvg
}: IBoxTextField) => {
  return (
    <Box mt={boxmt} bgcolor='grey.900' borderRadius='16px' pb={2}>
        <CustomTextField
        placeholder='Add a comment'
        />
        <FlexCenter
        sx={{
        mt: 1,
        width: '100%',
        pl: 1.5,
        pr: 2
        }}
        >
        <Box mr='auto'>
            <TextButton
            text='Select version'
            color='text.primary'
            icon={IconSvg}
            flexDirection={flexDirection}
            />
        </Box>
        <SecondaryButtonGrey
        borderRadius='50px'
        text='Post'
        icon={ArrowLineGreySvg}
        height='31px'
        bgcolor='background.paper'
        />
        </FlexCenter>
    </Box>
  )
}

export default BoxTextField