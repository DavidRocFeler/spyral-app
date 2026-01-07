'use client'
import { ISongPlayerCardProps } from "@/types/song";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import SecondaryButton from "@/components/ui/SecondaryButton";
import CollaboratorTrack from "@/components/songs/CollaboratorTrack";
import SelectCustom from "@/components/ui/SelectCustom";
import { FlexCenter } from "@/components/ui/FlexCenter";
import TextButton from "@/components/ui/TextButton";
import Link from "next/link";
import { useState } from "react";

const PlayerRegister = ({
  coverImage,
  artistName,
  songTitle = 'Artist',
  collaborators = [],
  onBumaClick,
  href,
}: ISongPlayerCardProps) => {
  const mockFileSelect = ['Third Mixdown', 'Second Mixdown', 'FirstMixdown'];
  const [selectedChannel, setSelectedChannel] = useState(mockFileSelect[0]);

  return (
    <Box
      position='relative'
      sx={{
        borderRadius: '40px',
        p: 0,
        width: '100',
        mx: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: 5
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
      </Box>

      {/* Content */}
      <Box 
        alignItems='flex-start'
        sx={{
          pt: 3, 
          display: 'flex', 
          flexDirection: 'column'
        }}
      >
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
                Version Shared
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
              <Typography variant="h9" color="text.secondary">
                shared by Jasper Lin • 11 Jan 2025, 14:30
              </Typography>
            </FlexCenter>

            <FlexCenter mt={3} gap={2}> 
              {href ? (
                <Link
                  href={href}
                  style={{
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  <SecondaryButton
                    height="43px"
                    text="Register with BUMA"
                    width="fit-content"
                    bgcolor="grey.900"
                    onClick={onBumaClick}
                  />
                </Link>
              ) : (
                <SecondaryButton
                  height="43px"
                  text="Register with BUMA"
                  width="fit-content"
                  bgcolor="grey.900"
                  onClick={onBumaClick}
                />
              )}
              
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
                  normalText: "Can't find your ",
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

export default PlayerRegister;