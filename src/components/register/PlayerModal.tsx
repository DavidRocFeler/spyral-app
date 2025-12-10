'use client'
import { ISongPlayerCardProps } from "@/types/song";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import IconSpan from "../ui/IconSpan";
import { ArrowUpSvg, PauseIconSvg, PlayIconSvg, PlusSvg, RegisterIconBlackSvg } from "@/assets/icons";
import SecondaryButton from "../ui/SecondaryButton";
import PrimaryButton from "../ui/PrimaryButton";
import CollaboratorTrack from "../songs/CollaboratorTrack";
import AudioWaveform from "../songs/AudioWaveForm";
import SelectCustom from "../ui/SelectCustom";
import { FlexCenter } from "../ui/FlexCenter";

const PlayerModal = ({
    coverImage,
    artistName,
    songTitle,
    collaborators = [],
    onMinimize
  }: ISongPlayerCardProps) => {
    const mockFileSelect = ['Third Mixdown', 'Second Mixdown', 'FirstMixdown'];
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedChannel, setSelectedChannel] = useState(mockFileSelect[0]);


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
          p: 0,
          width: '100',
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: 3
        }}
      >
        {/* Cover Image */}
        <Box
          sx={{
            position: 'relative',
            width: 240,
            height: 240,
            flexShrink: 0,
            borderRadius: '24px',
            overflow: 'hidden'
          }}
        >
          <Image
            src={coverImage}
            alt={songTitle}
            width={240}
            height={240}
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
        sx={{ display: 'flex', flexDirection: 'column'}}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 3.5 }}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5 }}>
                <Typography variant="h4">
                  {songTitle}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Typography variant="h8">
                  Author
                </Typography>
                <Typography variant="h7" pb={0.1}>
                  {artistName}
                </Typography>
              </Box>
  
              {/* Collaborators */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Typography variant="h8">
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
                </Box>
              </Box>
  
              <FlexCenter gap={1.5} mt={2}>
                 {/* Last update */}
              <Typography variant="h8">
                Versiom Shared
              </Typography>
                <SelectCustom
                    options={mockFileSelect}
                    value={selectedChannel}
                    onChange={setSelectedChannel}
                    fullWidth={false}
                    height="31px"
                    heightOption="31px"
                    borderRadius="50px"
                    bgcolor="background.paper"
                    />
                <Typography variant="h9" color="text.secondary"> shared by Jasper Lin • 11 Jan 2025, 14:30 </Typography>
              </FlexCenter>
            </Box>
          </Box>
        </Box>
  
      </Box>
    );
  };  

export default PlayerModal