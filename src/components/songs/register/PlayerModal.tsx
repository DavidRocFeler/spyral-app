'use client'
import { ISongPlayerCardProps } from "@/types/song";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import SecondaryButton from "@/components/ui/SecondaryButton";
import CollaboratorTrack from "@/components/songs/CollaboratorTrack";
import SelectCustom from "@/components/ui/SelectCustom";
import { FlexCenter } from "@/components/ui/FlexCenter";
import TextButton from "@/components/ui/TextButton";

const PlayerModal = ({
    coverImage,
    artistName,
    songTitle,
    collaborators = [],
    onBumaClick,
  }: ISongPlayerCardProps) => {
    const mockFileSelect = ['Third Mixdown', 'Second Mixdown', 'FirstMixdown'];
    const [selectedChannel, setSelectedChannel] = useState(mockFileSelect[0]);
    const [isMinimized, setIsMinimized] = useState(false);

    const handleBumaClick = () => {
      setIsMinimized(!isMinimized);
    };
  
    return (
      <Box
        position='relative'
        sx={{
          borderRadius: '40px',
          p: 0,
          width: '100',
          mx: 'auto',
          display: 'flex',
          alignItems:  isMinimized ? 'start' : 'center',
          gap: 5
        }}
      >
        {/* Cover Image */}
        <Box
          sx={{
            position: 'relative',
            width: isMinimized ? 120 : 240,
            height: isMinimized ? 120 : 240,
            flexShrink: 0,
            borderRadius: isMinimized ? '12px' : '24px',
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
        </Box>
  
        {/* Content */}
        <Box 
        alignItems='flex-start'
        sx={{
          pt: isMinimized ? 0.5 : 3, 
          display: 'flex', 
          flexDirection: 'column'
          }}>
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
  
              <FlexCenter
              sx={{display: isMinimized ? 'none' : 'flex'}}
              gap={1.5} mt={2}>
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

             <FlexCenter 
             sx={{display: isMinimized ? 'none' : 'flex'}}
             mt={3} gap={2}> 
              <SecondaryButton
                height="43px"
                text="Register with BUMA"
                width="fit-content"
                bgcolor="grey.900"
                onClick={() => {
                  handleBumaClick();
                  onBumaClick?.();
                }}
                />
                <SecondaryButton
                height="43px"
                text="Register with SENA"
                width="fit-content"
                bgcolor="grey.900"
                />

              <TextButton
                color="text.primary"
                variant="h9"
                text={{
                  normalText: "Can’t find your ",
                  boldText: "PRO?",
                }}
              />
             </FlexCenter>
            </Box>
          </Box>
        </Box>

      </Box>
    );
  };  

export default PlayerModal