'use client'
import { PlusSvg, SmallPlusBrandSvg } from "@/assets/icons"
import CheckRadius from "@/components/ui/CheckRadius"
import { FlexCenter } from "@/components/ui/FlexCenter"
import { FlexColumn } from "@/components/ui/FlexColumn"
import PrimaryButton from "@/components/ui/PrimaryButton"
import SecondaryButton from "@/components/ui/SecondaryButton"
import SelectCustom from "@/components/ui/SelectCustom"
import SwitchAndLabel from "@/components/ui/SwitchAndLabel"
import { Box, Typography } from "@mui/material"
import { useState } from "react"
import TextFieldMessage from "./TextFieldMessage"
import TextButton from "@/components/ui/TextButton"
import { settingPresentationPlaylist } from "@/mock/switchAndLabel.mock"
import Link from "next/link"

const PlayListPresentation = () => {
    const mockFileSelect = ['Select channel', 'Select channel', 'Select channel', 'Select channel'];
  const [selectedChannel, setSelectedChannel] = useState(mockFileSelect[0]);
  
  return (
    <Box 
      borderRadius='24px'
      p={3}
      pb={20}
      bgcolor='background.default'
    >
      <Typography variant="h3">
        Design
      </Typography>

      <FlexCenter
      my={2.5}
      gap={3}
      >
        <Typography variant="h8">
          Design
        </Typography>
        <FlexCenter gap={0}>
            <CheckRadius
            text="Default"
            />
            <CheckRadius
            text="Artist Page"
            />
            <CheckRadius
            text="Album Page"
            />
        </FlexCenter>
      </FlexCenter>

      <Box width='50%'>
        <Typography mb={1} variant="h8">
            Message
        </Typography>
        <TextFieldMessage
            IconSvg={PlusSvg}
        />
      </Box>

      <FlexCenter
      my={4}
      sx={{
        width: '50%',
        alignItems: 'flex-end'
      }}
      >
        <Typography mr='auto' variant="h3"> Playlist themes </Typography>
        <TextButton
        text='Add new theme'
        color="secondary.main"
        gap={1}
        icon={SmallPlusBrandSvg}
        />
      </FlexCenter>

      <FlexColumn 
        my={3}
        gap={1.5}
        sx={{
          width: '50%',
          alignItems: 'flex-start'
        }}
      >
        <Typography variant="h8"> Sekect Theme </Typography>
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

      <Box>
        <Typography variant="h3"
        mb={3.5}
        >
          Settings
        </Typography>

        <Box>
        <SwitchAndLabel
        switchItems={settingPresentationPlaylist}
        gap={10}
        />
        </Box>
      </Box>

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
        href='/desktop/playlist/metadata'
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
       href='/desktop/playlist/setting'
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

export default PlayListPresentation;