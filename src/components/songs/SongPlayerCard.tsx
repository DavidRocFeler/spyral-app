'use client'
import { ISongPlayerCardProps } from "@/types/song";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import IconSpan from "../ui/IconSpan";
import CollaboratorTrack from "./CollaboratorTrack";
import { ArrowUpSvg, PauseIconSvg, PlayIconSvg, PlusSvg, RegisterIconBlackSvg } from "@/assets/icons";
import SecondaryButton from "../ui/SecondaryButton";
import PrimaryButton from "../ui/PrimaryButton";
import AudioWaveform from "./AudioWaveForm";
import Link from "next/link";

const SongPlayerCard = ({
    coverImage,
    artistName,
    songTitle,
    lastUpdate,
    duration = '4:15',
    currentTime = '0:00',
    collaborators = [],
    onMinimize
  }: ISongPlayerCardProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
  
    const handlePlayPause = () => {
      setIsPlaying(!isPlaying);
    };

    const handleMinimizeClick = () => {
      if (onMinimize) {
        onMinimize();
      }
    };
  
    return (
      <Box
        position='relative'
        sx={{
          bgcolor: 'background.default',
          borderRadius: '40px',
          p: 3,
          width: '100',
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          height: '445px',
          gap: 3
        }}
      >
        {/* Cover Image */}
        <Box
          sx={{
            position: 'relative',
            width: 400,
            height: 400,
            flexShrink: 0,
            borderRadius: '12px',
            overflow: 'hidden'
          }}
        >
          <Image
            src={coverImage}
            alt={songTitle}
            width={400}
            height={400}
            priority
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          />
          {/* Edit button */}
          <Box
          position='absolute'
          right={15}
          bottom={15}
          >
            <IconSpan
            bgcolor='grey.900'
            />
          </Box>
        </Box>
  
        {/* Content */}
        <Box 
        alignItems='flex-start'
        height= '400px'
        sx={{ display: 'flex', flexDirection: 'column'}}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 3.5 }}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
                <Typography variant="h1">
                  {songTitle}
                </Typography>
                <IconSpan/>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Typography variant="h6">
                  {artistName}
                </Typography>
                <Box sx={{ color: '#808080' }}>
                  <IconSpan
                  bgcolor='grey.900'
                  />
                </Box>
              </Box>
  
              {/* Collaborators */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Typography variant="h8" color="text.secondary">
                  Collaborators
                </Typography>
                <Box display='flex' gap={0.5} alignItems='center'>
                  {collaborators.length > 0 ? (
                    <CollaboratorTrack collaborators={collaborators} />
                  ) : (
                    <Typography variant="body2" color="text.disabled">
                      No collaborators
                    </Typography>
                  )}
                  <IconSpan
                    icon={PlusSvg}
                    bgcolor='grey.900'
                  />
                </Box>
              </Box>
  
              {/* Last update */}
              <Typography variant="h8" color="text.secondary">
                Last update <Box component='span' color='text.primary' ml={0.5}>{lastUpdate}</Box>
              </Typography>
            </Box>
          </Box>
  
          {/* Controls */}
          <Box sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center' }}>
            <SecondaryButton
            icon={isPlaying ? <PauseIconSvg/> : <PlayIconSvg/>}
            height='44px'
            onClick={handlePlayPause}
            />
  
            <Link
            href='/songs/register'
            style={{
              color: 'inherit',
              textDecoration: 'none'
            }}
            >
              <PrimaryButton
              text='Register'
              height='44px'
              icon={RegisterIconBlackSvg}
              />
            </Link>
          </Box>
  
          {/* Waveform */}
          <Box sx={{ position: 'relative', mb: 1, width: '100%'}}>
                <AudioWaveform 
                isPlaying={isPlaying} 
                currentTime={currentTime} 
                duration={duration}      
                />
          </Box>
        </Box>
  
         {/* Up arrow button */}
         <Box
          position='absolute'
          right='1.7rem'
          top='1.7rem'
          >
            <IconSpan
            borderRadius='8px'
            icon={ArrowUpSvg}
            onClick={handleMinimizeClick}
            />     
          </Box>    
      </Box>
    );
  };  

export default SongPlayerCard