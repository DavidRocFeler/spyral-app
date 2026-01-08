'use client'
import { ISongPlayerCardProps } from "@/types/song";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import IconSpan from "../ui/IconSpan";
import CollaboratorTrack from "./CollaboratorTrack";
import { ArrowDownSvg, PauseIconSvg, PlayIconSvg, RegisterIconBlackSvg } from "@/assets/icons";
import SecondaryButton from "../ui/SecondaryButton";
import PrimaryButton from "../ui/PrimaryButton";
import Link from "next/link";
import { FlexColumn } from "../ui/FlexColumn";

const MinimizeSongPlayer = ({
    coverImage,
    artistName,
    songTitle,
    lastUpdate,
    collaborators = [],
    onExpand,
    trackingStatus
  }: ISongPlayerCardProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
  
    const handlePlayPause = () => {
      setIsPlaying(!isPlaying);
    };

    const handleMinimizeClick = () => {
      if (onExpand) {
        onExpand();
      }
    };
  
    return (
      <Box
        position='relative'
        sx={{
          bgcolor: 'background.default',
          borderRadius: '40px',
          px: 4,
          width: '100',
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          height: '101px',
          gap: 3
        }}
      >
        {/* Cover Image */}
        <Box
          sx={{
            position: 'relative',
            width: 64,
            height: 64,
            flexShrink: 0,
            borderRadius: '12px',
            overflow: 'hidden'
          }}
        >
          <Image
            src={coverImage}
            alt={songTitle || ''}
            width={64}
            height={64}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          />
        </Box>
  
        {/* Content */}
        <Box 
        width='100%'
        alignItems='center'
        sx={{ display: 'flex',}}>

            <Box height='60px'>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
                <Typography variant="h3">
                  {songTitle}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Typography variant="h6">
                  {artistName}
                </Typography>
              </Box>
            </Box>

            <Box gap={5} ml='auto' sx={{ display: 'flex', alignItems: 'center', height:'fit-content'}}>
                <Box display='flex' gap={7}>
                {/* Collaborators */}
                <Box position='relative' sx={{ display: 'flex', flexDirection:'column', alignItems: 'start', gap: 1, height:'60px' }}>
                    <Typography variant="h8" color="text.secondary">
                    Collaborators
                    </Typography>
                    <Box position='absolute' bottom={0} display='flex' gap={1} alignItems='center'>
                    {collaborators.length > 0 ? (
                        <CollaboratorTrack 
                        collaborators={collaborators} 
                        width={24}
                        height={24}
                        />
                    ) : (
                        <Typography variant="body2" color="text.disabled">
                        No collaborators
                        </Typography>
                    )}
                    </Box>
                </Box>
    
                {/* Last update */}
               <FlexColumn
               sx={{
                height: '58px'
               }}
               >
                <Typography mb='auto' variant="h8" color="text.secondary">Last update</Typography>
                <Typography variant="h5"> {lastUpdate} </Typography>
               </FlexColumn>
                </Box>

                {/* Controls */}
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <SecondaryButton
                    icon={isPlaying ? <PauseIconSvg/> : <PlayIconSvg/>}
                    height='44px'
                    onClick={handlePlayPause}
                    />
        
                   <Link
                   href='/desktop/songs/register'
                   style={{
                    color: 'inherit',
                    textDecoration: 'none'
                   }}
                   >
                      <PrimaryButton
                      text='Register'
                      height='44px'
                      icon={RegisterIconBlackSvg}
                      trackingStatus={trackingStatus}
                      />
                   </Link>
                </Box>

                <IconSpan
                borderRadius='8px'
                icon={ArrowDownSvg}
                onClick={handleMinimizeClick}
                />    
            </Box>  
        </Box> 
      </Box>
    );
  };  

export default MinimizeSongPlayer;