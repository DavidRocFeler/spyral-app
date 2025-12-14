import { ChangeIconSvg, SpeciaFolderIconSvg } from '@/assets/icons';
import { FlexColumn } from '@/components/ui/FlexColumn';
import SecondaryButton from '@/components/ui/SecondaryButton';
import { Box, Typography } from '@mui/material'

export interface IFolderComponentProps {
    tracks: string;
    title: string
}

const FolderComponent = ({
tracks,
title
}: IFolderComponentProps) => {
  return (
    <Box
    pt={2} 
    bgcolor='background.default'
    // width='285px'
    width='100%'
    height='280px'
    borderRadius='12px'
    position='relative'
    >
        <Box mb={1} ml='auto' mr={2} width='fit-content'>
            <SecondaryButton
            text='Change'
            icon={ChangeIconSvg}
            width='fit-content'
            height='31px'
            />
        </Box>

        <Box   
        bgcolor='blue'
        py={2}
        px={5}
        >   
            <Box
            width='full'
            position='relative'
            >
                {/* Large */}
                <Box
                position='absolute'
                zIndex={3}
                right={0}
                width='150px'
                pt={4}
                height='177px'
                borderRadius='17px'
                bgcolor='secondary.main'
                display='flex'
                alignItems='flex-start'
                justifyContent='center'
                sx={{ transform: 'rotate(10deg)' }}
                >
                <SpeciaFolderIconSvg/>
                </Box>

                {/* Medium */}
                <Box
                position='absolute'
                zIndex={2}
                width='123px'
                height='156px'
                borderRadius='17px'
                bgcolor='#A6C000'
                left='1rem'
                top='0rem'
                sx={{ transform: 'rotate(0deg)' }}
                />

                {/* Small */}
                <Box
                position='absolute'
                zIndex={1}
                width='104px'
                height='132px'
                borderRadius='17px'
                bgcolor='#7E9800'
                top='0.7rem'
                sx={{ transform: 'rotate(-10deg)' }}
                />
            </Box>
        </Box>

        {/* <Box 
        position='absolute'
        zIndex={5}
        left='50%'
        bottom='0rem'
        sx={{transform: 'translate(-50%) rotate(0deg)',}}
        >
            <FolderBlurSvg/>
        </Box> */}

        <Box
        position='absolute'
        display='flex'
        alignItems='flex-end'
        pb={1.5}
        zIndex={4}
        width='92%'
        // width='269px'
        height='148px'
        left='50%'
        bottom='0.5rem'
        borderRadius='8px'
        px={1.5}
        sx={{ 
            transform: 'translate(-50%) rotate(0deg)',
            bgcolor: 'rgba(23, 23, 23, 0.3)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            clipPath: `path('M89.4569 0H8C3.58172 0 0 3.58173 0 8V140C0 144.418 3.58173 148 8 148H261C265.418 148 269 144.418 269 140V39.08C269 34.6617 265.418 31.08 261 31.08H126.787C124.645 31.08 122.593 30.2212 121.089 28.6959L95.1544 2.38409C93.6509 0.858769 91.5986 0 89.4569 0Z')`,
            boxShadow: 'inset 0px 0px 20px 0px rgba(23, 23, 23, 1)',
        }}
        >
        <FlexColumn
            gap={1}
            sx={{alignItems: 'flex-start'}}
        >
            <Typography variant='h9' fontWeight={500}> {tracks} </Typography>
            <Typography variant='h4'> {title} </Typography>
        </FlexColumn>
        </Box>
    </Box>
  )
}

export default FolderComponent;