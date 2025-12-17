'use client'
import { ChangeIconSvg, LittleSpanSvg, SpeciaFolderIconSvg } from '@/assets/icons';
import CardMenuPlayerMusic from '@/components/ui/CardMenuPlayerMusic';
import { FlexCenter } from '@/components/ui/FlexCenter';
import { FlexColumn } from '@/components/ui/FlexColumn';
import IconSpan from '@/components/ui/IconSpan';
import SecondaryButton from '@/components/ui/SecondaryButton';
import { catalogueMenuItems } from '@/mock/catalogueMenuItems.mock';
import { Box, Typography } from '@mui/material'
import { useState } from 'react';

export interface IFolderComponentProps {
    id?: number;
    tracks: string;
    title: string
    changeButton?: boolean;
    menuButton?: boolean; 
    isSelected?: boolean;
    onSelect?: (id?: number) => void;
    selectionFolder?: boolean;
    showRelatedTracks?: boolean; // Nueva prop para controlar si muestra RelatedTracks
}

const FolderComponent = ({
tracks,
title,
changeButton,
menuButton,
isSelected = false,
onSelect,
id,
selectionFolder,
}: IFolderComponentProps) => {

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation(); 
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleCardClick = () => {
    if (onSelect && selectionFolder) {
        onSelect(id);
    }
  };


  return (
    <Box
    pt={2} 
    bgcolor='background.default'
    width='100%'
    height='280px'
    borderRadius='12px'
    position='relative'
    display='flex'
    flexDirection='column'
    alignItems='center'
    border= '1px solid'
    borderColor={isSelected ? 'secondary.main' : 'transparent'}
    onClick={handleCardClick}
    >
        <FlexCenter mb={1} ml='auto' mr={2} width='fit-content'>
            {changeButton && (
              <SecondaryButton
              text='Change'
              icon={ChangeIconSvg}
              width='fit-content'
              height='31px'
              />
            )}
            {menuButton && (
              <IconSpan
              onClick={handleMenuOpen}
              icon={LittleSpanSvg}
              bgcolor='grey.900'
              />
            )}
        </FlexCenter>

        <Box   
        py={2}
        mx='auto'
        width={{xs: '80%', lg: '185px'}}
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

        {/* SVG Clip Path Definition */}
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <clipPath id="folderClip" clipPathUnits="objectBoundingBox">
              <path d="M 0.3325 0 H 0.0297 C 0.0133 0 0 0.0242 0 0.054 V 0.946 C 0 0.9758 0.0133 1 0.0297 1 H 0.9703 C 0.9867 1 1 0.9758 1 0.946 V 0.264 C 1 0.234 0.9867 0.21 0.9703 0.21 H 0.4714 C 0.463 0.21 0.4557 0.2043 0.4501 0.1943 L 0.3537 0.0161 C 0.3481 0.0058 0.3406 0 0.3325 0 Z" />
            </clipPath>
          </defs>
        </svg>

        <Box
        position='absolute'
        display='flex'
        alignItems='flex-end'
        pb={1.5}
        zIndex={4}
        width='93%'
        height='148px'
        bottom='0.5rem'
        borderRadius='8px'
        px={1.5}
        sx={{ 
            transform: 'rotate(0deg)',
            bgcolor: 'rgba(23, 23, 23, 0.3)',
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            clipPath: 'url(#folderClip)',
            WebkitClipPath: 'url(#folderClip)',
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

        <CardMenuPlayerMusic
        menuPlayer={{
            open: Boolean(anchorEl),
            anchorEl: anchorEl,
            onClose: handleMenuClose
        }}
        menuMock={catalogueMenuItems}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        paperSx={{
            mt: 1 
        }}
      />
    </Box>
  )
}

export default FolderComponent;