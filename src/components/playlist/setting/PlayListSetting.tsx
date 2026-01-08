'use client'
import { PlusSvg } from "@/assets/icons"
import CardPerformingArtist from "@/components/ui/CardPerformingArtist"
import CustomTextField from "@/components/ui/CustomTextField"
import { FlexColumn } from "@/components/ui/FlexColumn"
import IconSpan from "@/components/ui/IconSpan"
import PrimaryButton from "@/components/ui/PrimaryButton"
import SecondaryButton from "@/components/ui/SecondaryButton"
import SelectCustom from "@/components/ui/SelectCustom"
import SwitchAndLabel from "@/components/ui/SwitchAndLabel"
import { playListTags } from "@/mock/playListTags.mock"
import { ICardPerformingArtist } from "@/types/song"
import { Box, Typography } from "@mui/material"
import Link from "next/link"
import { useState } from "react"

const PlayListSetting = () => {
  const [tags, setTags] = useState<ICardPerformingArtist[]>(playListTags)
  
  const mockFileSelect = ['Select channel', 'Select channel', 'Select channel', 'Select channel'];
  const [selectedChannel, setSelectedChannel] = useState(mockFileSelect[0]);

  const handleAddArtist = () => {
    const newTags: ICardPerformingArtist = {
      text: `New Tag ${tags.length + 1}`,
    }
    setTags([...tags, newTags])
  }
  
  return (
    <Box 
      borderRadius='24px'
      p={3}
      pb={20}
      bgcolor='background.default'
    >
      <Typography variant="h3">
        Playlist settings
      </Typography>

      <FlexColumn
        my={4}
        gap={1.5}
        sx={{
          alignItems: 'flex-start',
          width: '50%'
        }}
      >
        <Typography variant="h8">
          Playlist name
        </Typography>
        <CustomTextField
          width="100%"
          placeholder="Playlist name"
          variant="h6"
        />
      </FlexColumn>

      <Box>
        <SwitchAndLabel/>
      </Box>

      <FlexColumn
        gap={1.5}
        my={2.5}
        sx={{
          alignItems: 'flex-start'
        }}
      >
        <Typography variant="h8"> Playlist tags </Typography>
        <Box 
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
            alignItems: 'center',
            width: '100%'
          }}
        >
          {tags.map((tag, index) => (
            <CardPerformingArtist
              key={`tag-${index}`}
              text={tag.text}
              image={tag.image}
              alt={tag.alt}
              bgcolor={tag.bgcolor}
            />
          ))}
          <IconSpan
            icon={PlusSvg} 
            onClick={handleAddArtist}
          />
        </Box>
      </FlexColumn>

      <FlexColumn 
        gap={1.5}
        sx={{
          width: '50%',
          alignItems: 'flex-start'
        }}
      >
        <Typography variant="h8"> Add to channel </Typography>
        <SelectCustom
          options={mockFileSelect}
          value={selectedChannel}
          onChange={setSelectedChannel}
          height="44px"
          heightOption="44px"
          borderRadius="12px"
          bgcolor="grey.900"
          width="100%"
          variant="h7"
          typographyOptions="h7"
        />
      </FlexColumn>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          mt: 5,
          gap: 1.5
        }}
      >
       <Link
       href='/desktop/playlist/presentation'
       style={{
        color: 'inherit',
        textDecoration: 'none'
       }}
       >
        <PrimaryButton
            text="Save setting"
          />
       </Link>
       <Link
       href='/desktop/playlist/addtrack'
       style={{
         color: 'inherit',
         textDecoration: 'none'
       }}
       >
        <SecondaryButton
            text="Cancel"
            bgcolor="transparent"
          />
       </Link>
      </Box>
    </Box>
  )
}

export default PlayListSetting