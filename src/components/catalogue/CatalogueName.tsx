'use client'
import { SettingIconSvg } from "@/assets/icons"
import CardPerformingArtist from "@/components/ui/CardPerformingArtist"
import { FlexCenter } from "@/components/ui/FlexCenter"
import { FlexColumn } from "@/components/ui/FlexColumn"
import FolderComponent from "@/components/ui/Folder"
import IconSpan from "@/components/ui/IconSpan"
import SecondaryButton from "@/components/ui/SecondaryButton"
import { Box, Typography } from "@mui/material"
import { useState } from "react"
import { performingArtists } from "@/mock/performingArtis.mock"
import PersonalTracks from "@/components/catalogue/PersonalTracks"
import ShowMetadata from "@/components/catalogue/ShowMetadata"
import { secondaryButtonsArray } from "@/mock/secondaryButtons.mock"
import CardShareProgress from "@/components/home/user-panel/CardShareProgress"

const CatalogueName = () => {
  const [open, setOpen] = useState(false); 

  return (
    <Box 
    px={4}
    pb={4}
    >
      <FlexCenter sx={{
        gap: 4,
        width: '100%',
        alignItems: 'flex-start',
      }}>
        <Box 
        mr='auto'
        width='385px'
        >
          <FolderComponent
          title="My Personal Tracks"
          tracks="4 tracks"
          isSelected
          menuButton
          />
        </Box>
        <FlexColumn gap={2}
        sx={{
          alignItems: 'flex-start',
          width: '100%'
        }}
        >
          <FlexCenter
          sx={{
            width: '100%',
            ml:'auto' 
          }}
          >
            <Typography mr='auto' variant="h1"> Catalogue Name </Typography>
            <IconSpan
            icon={SettingIconSvg}
            />
          </FlexCenter>
          <Typography lineHeight='1rem' width= '80%' variant='h9'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Typography>
        </FlexColumn>
      </FlexCenter>

      <FlexColumn
      mt={3}
      gap={0.7}
      sx={{
        width: '100%',
        alignItems: 'flex-start'
      }}
      >
        <FlexCenter sx={{
          width: '100%'
        }}>
          <Typography mr='auto'>
            Visibility
          </Typography>
          <SecondaryButton 
              text={secondaryButtonsArray[1].text} 
              icon={secondaryButtonsArray[1].icon} 
              onClick={() => setOpen(true)}
          />
      
          <CardShareProgress
            open={open} 
            onClose={() => setOpen(false)} 
            variant = 'withDownloads'
          />
        </FlexCenter>
        <FlexCenter
        >
          <SecondaryButton
            text='Public'
            px={3}
            pl={3}
            borderRadius='6px'
            height='40px'
            color="text.primary"
            bgcolor="background.default"
            borderBottomRightRadius='0px'
            borderTopRightRadius='0px'
          />
          {/* List View Button */}
          <SecondaryButton
            text='Private'
            borderRadius='6px'
            height='40px'
            px={3}
            pl={3}
            color="text.primary"
            borderBottomLeftRadius='0px'
            borderTopLeftRadius='0px'
            bgcolor='background.paper'
        />
        </FlexCenter>

        <FlexColumn 
        mt={2}
        gap={1.5}
        sx={{
          alignItems: 'flex-start'
        }}
        >
          <Typography variant="h8"> Performing artist </Typography>
          <FlexCenter gap={1}>
            {performingArtists.map((artist, index) => (
            <CardPerformingArtist
                key={`artist-${index}`}
                text={artist.text}
                image={artist.image}
                alt={artist.alt}
                bgcolor={artist.bgcolor}
            />
            ))}
          </FlexCenter>
        </FlexColumn>

        <FlexColumn 
        gap={3.5}
        mt={2}
        sx={{
          width: '100%',
          alignItems: 'flex-start'
        }}
        >
        <PersonalTracks
        width="100%"
        height="fit-content"
        mr={0}
        pb={3}
        />  
          <ShowMetadata/>
        </FlexColumn>
      </FlexColumn>
    </Box>
  )
}

export default CatalogueName;