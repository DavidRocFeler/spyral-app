import { BIconSvg, ItalicaIconSvg, LineDownSvg, PlusGreySvg, ShareIconSvg, ShareLinkIcon } from '@/assets/icons';
import CustomTextField from '@/components/ui/CustomTextField';
import { FlexCenter } from '@/components/ui/FlexCenter';
import IconSpan from '@/components/ui/IconSpan';
import { IBoxTextField } from '@/types/playlist';
import { Box } from '@mui/material'

const TextFieldMessage = ({
boxmt = 0.5,
}: IBoxTextField) => {
  return (
    <Box mt={boxmt} bgcolor='grey.900' borderRadius='16px' pb={2}>
        <CustomTextField
        placeholder='Add a message'
        />
        <FlexCenter
        sx={{
        mt: 1,
        width: 'fit-content',
        ml: 2
        }}
        >
        <IconSpan
        icon={BIconSvg}
        borderTopLeftRadius='5px'
        borderBottomLeftRadius='5px'
        borderTopRightRadius='0px'
        borderBottomRightRadius='0px'
        />
         <IconSpan
        icon={ItalicaIconSvg}
        borderTopLeftRadius='0px'
        borderBottomLeftRadius='0px'
        borderTopRightRadius='0px'
        borderBottomRightRadius='0px'
        borderLeft='1px solid'
        borderColor='grey.900'
        />
         <IconSpan
        icon={LineDownSvg}
        borderTopLeftRadius='0px'
        borderBottomLeftRadius='0px'
        borderTopRightRadius='0px'
        borderBottomRightRadius='0px'
        borderLeft='1px solid'
        borderRight='1px solid'
        borderColor='grey.900'
        />
         <IconSpan
        icon={ShareLinkIcon}
        borderTopLeftRadius='0px'
        borderBottomLeftRadius='0px'
        borderTopRightRadius='5px'
        borderBottomRightRadius='5px'
        />
        </FlexCenter>
    </Box>
  )
}

export default TextFieldMessage;