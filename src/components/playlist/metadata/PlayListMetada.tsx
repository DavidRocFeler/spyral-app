'use client'
import { PlusBrandIconSvg } from "@/assets/icons"
import { FlexCenter } from "@/components/ui/FlexCenter"
import { FlexColumn } from "@/components/ui/FlexColumn"
import PrimaryButton from "@/components/ui/PrimaryButton"
import SecondaryButton from "@/components/ui/SecondaryButton"
import SelectCustom from "@/components/ui/SelectCustom"
import { playListTags } from "@/mock/playListTags.mock"
import { ICardPerformingArtist } from "@/types/song"
import { Box, Link, Typography } from "@mui/material"
import { useState } from "react"
import CustomTextField from "@/components/ui/CustomTextField"
import UploadImageMetadata from "./UploadImageMetadata"
import CheckBoxCustom from "@/components/ui/CheckBoxCustom"
import CalendarMetadata from "./CalendarMetadata"

const PlayListMetadata = () => {
  const [tags, setTags] = useState<ICardPerformingArtist[]>(playListTags)
  const [preorderRateDate, setPreorderRateDate] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [artist, setArtist] = useState<string>('');
  const [composer, setComposer] = useState<string>('');
  const [bpm, setBpm] = useState<string>('');
  const [isrc, setIsrc] = useState<string>('');
  const [order, setOrder] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  
  const mockFileSelect = ['Select channel', 'Select channel', 'Select channel', 'Select channel'];
  const [selectedChannel, setSelectedChannel] = useState(mockFileSelect[0]);

  return (
    <Box 
      borderRadius='24px'
      p={3}
      pb={20}
      bgcolor='background.default'
    >
      <FlexCenter
        sx={{
          width: '100%',
          alignItems: 'flex-start'
        }}
      >
        <FlexColumn
          mr='auto'
          gap={2}
          sx={{
            alignItems: 'flex-start',
            width: {
              xs: '70%',
              lg: '80%'
            }
          }}
        >
          <Typography variant="h3">
            Batch edit
          </Typography>
          <Typography variant="h7"
            color="text.secondary"
          >
            Here you can turn off metadata so your recipients won't see what they contain, or you can add metadata just for this playlist
          </Typography>
        </FlexColumn>
        <SecondaryButton
          height="48px"
          icon={PlusBrandIconSvg}
          text="Auto-fill with AI"
        />
      </FlexCenter>

      <FlexCenter
        mt={2}
        gap={3}
        sx={{
          width: '100%',
          alignItems: 'flex-start'
        }}
      >
        <FlexColumn
          mr='auto'
          gap={1.5}
          sx={{
            width: '20%',
            alignItems: 'flex-start'
          }}
        >
          <CheckBoxCustom
            text="Track Artwork"
          />
          <UploadImageMetadata/>
        </FlexColumn>

        <FlexColumn
          sx={{
            width: '40%',
            alignItems: 'flex-start'
          }}
        >
          <Box
            width='100%'
            display='flex'
            flexDirection='column'
            gap={1.5}
            mb={2.1}
          >
            <CheckBoxCustom
              text="Title"
            />
            <CustomTextField
              placeholderWhite="Murmurs of Evening"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Box>

          <Box
            display='flex'
            flexDirection='column'
            gap={1.5}
            width='100%'
            mb={2.1}
          >
            <CheckBoxCustom
              text="Album"
            />
            <SelectCustom
              options={mockFileSelect}
              value={selectedChannel}
              onChange={setSelectedChannel}
              variant="h7"
              typographyOptions="h7"   
            />
          </Box>

          <Box
            width='100%'
            display='flex'
            flexDirection='column'
            gap={1.5}
          >
            <CheckBoxCustom
              text="Grouping"
            />
            <SelectCustom
              options={mockFileSelect}
              value={selectedChannel}
              onChange={setSelectedChannel}
              variant="h7"
              typographyOptions="h7"   
            />
          </Box>
        </FlexColumn>

        <FlexColumn
          sx={{
            width: '40%',
            alignItems: 'flex-start'
          }}
        >
          <Box
            display='flex'
            flexDirection='column'
            gap={1.5}
            width='100%'
            mb={2.1}
          >
            <CheckBoxCustom
              text="Artist"
            />
            <CustomTextField
              placeholderWhite="James Arthur"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
            />
          </Box>

          <Box
            display='flex'
            flexDirection='column'
            gap={1.5}
            width='100%'
            mb={2.1}
          >
            <CheckBoxCustom
              text="Composer"
            />
            <CustomTextField
              placeholderWhite="Lily Collins"
              value={composer}
              onChange={(e) => setComposer(e.target.value)}
            />
          </Box>

          <Box
            display='flex'
            flexDirection='column'
            gap={1.5}
            width='100%'
          >
            <CheckBoxCustom
              text="Genre"
            />
            <SelectCustom
              options={mockFileSelect}
              value={selectedChannel}
              onChange={setSelectedChannel}
              variant="h7"
              typographyOptions="h7"   
            />
          </Box>
        </FlexColumn>
      </FlexCenter>

      <FlexCenter mt={2}
        sx={{
          gap: 2,
          width: '100%'
        }}
      >
        <FlexColumn
          sx={{
            alignItems: 'flex-start',
            gap: 1.5,
            width: '20%'
          }}
        >
          <CheckBoxCustom
            text="Year"
          />
          <SelectCustom
            options={mockFileSelect}
            value={selectedChannel}
            onChange={setSelectedChannel}
            variant="h7"
            typographyOptions="h7"
          />
        </FlexColumn>

        <FlexColumn
          sx={{
            alignItems: 'flex-start',
            gap: 1.5,
            width: '20%'
          }}
        >
          <CheckBoxCustom
            text="Release date"
          />
          <CalendarMetadata
            value={preorderRateDate}
            onChange={setPreorderRateDate}
            placeholder="DD/MM/YYYY"
          />
        </FlexColumn>

        <FlexColumn
          sx={{
            alignItems: 'flex-start',
            gap: 1.5,
            width: '20%'
          }}
        >
          <CheckBoxCustom
            text="BPM"
          />
          <CustomTextField
            placeholderWhite="60"
            value={bpm}
            onChange={(e) => setBpm(e.target.value)}
          />
        </FlexColumn>

        <FlexColumn
          sx={{
            alignItems: 'flex-start',
            gap: 1.5,
            width: '20%'
          }}
        >
          <CheckBoxCustom
            text="ISRC"
          />
          <CustomTextField
            placeholderWhite="ISRC content"
            value={isrc}
            onChange={(e) => setIsrc(e.target.value)}
          />
        </FlexColumn>

        <FlexColumn
          sx={{
            alignItems: 'flex-start',
            gap: 1.5,
            width: '20%'
          }}
        >
          <CheckBoxCustom
            text="Order"
          />
          <CustomTextField
            placeholderWhite="Order content"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />
        </FlexColumn>
      </FlexCenter>

      <FlexColumn
        mt={2}
        sx={{
          gap: 1,
          width: '50%',
          alignItems: 'flex-start'
        }}
      >
        <CheckBoxCustom
          text="Comment"
        />
        <CustomTextField
          placeholderWhite="Add a message"
          placeholderColor="text.secondary"
          height='110px'
          rows={6}
          alignItems="flex-start"
          multiline={true}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
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
        href='/playlist/writers'
        style={{
          color: 'inherit',
          textDecoration: 'none'
        }}
        >
          <PrimaryButton
              text="Save setting"
            />
       </Link>
        <SecondaryButton
          text="Cancel"
          bgcolor="transparent"
        />
      </Box>
    </Box>
  )
}

export default PlayListMetadata;