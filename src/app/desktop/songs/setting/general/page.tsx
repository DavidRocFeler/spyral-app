'use client'
import { UploadImageBrandIconSvg } from "@/assets/icons"
import UploadImageMetadata from "@/components/playlist/metadata/UploadImageMetadata"
import CustomTextField from "@/components/ui/CustomTextField"
import { FlexCenter } from "@/components/ui/FlexCenter"
import { FlexColumn } from "@/components/ui/FlexColumn"
import PrimaryButton from "@/components/ui/PrimaryButton"
import SecondaryButton from "@/components/ui/SecondaryButton"
import SelectCustom from "@/components/ui/SelectCustom"
import { Box, Typography } from "@mui/material"
import { useState } from "react"

const GeneralSettingPage = () => {
  const mockFileSelect = ['English', 'Nederland', 'Germany', 'Spanish'];
  const [selectedChannel, setSelectedChannel] = useState(mockFileSelect[0]);

  return (
    <>
      <Box mb={2} mt={3}>
        <Typography variant="h3">
          General
        </Typography>
      </Box>

      <FlexCenter
        sx={{
          alignItems: 'flex-end',
          gap: 2
        }}
      >
        <FlexColumn
          sx={{
            alignItems: 'flex-start',
            gap: 2
          }}
        >
          <Typography variant="h8">Profile image (optional)</Typography>
          <UploadImageMetadata
            height="160px"
            width="160px"
            borderRadius="12px"
            mainText=""
            secondaryText=""
            icon={UploadImageBrandIconSvg}
            bgcolor="background.default"
          />
        </FlexColumn>
        <FlexColumn
          sx={{
            alignItems: 'flex-start',
            gap: 2
          }}
        >
          <Typography variant="h9" color="text.secondary">
            Supported formats include PNG, JPG and JPEG. Recommended resolution of 1080x1080 pixels.
          </Typography>
          <SecondaryButton
            text="Upload photo"
            height="43px"
            bgcolor="background.default"
          />
        </FlexColumn>
      </FlexCenter>

      <Box mt={3} mb={7}>
        <FlexCenter 
          sx={{
            width:'100%',
            gap: 3,
            mb: 3
          }}
        >
          <FlexColumn
            sx={{
              width:'50%',
              gap: 1,
              alignItems: 'flex-start'
            }}
          >
            <Typography variant="h8">Name</Typography>
            <CustomTextField
              placeholderWhite="James Arthur"
              placeholderColor="text.secondary"
            />
          </FlexColumn>
          
          <FlexColumn
            sx={{
              width:'50%',
              gap: 1,
              alignItems: 'flex-start'
            }}
          >
            <Typography variant="h8">Relation number</Typography>
            <CustomTextField
              placeholderWhite="14092023"
            />
          </FlexColumn>
        </FlexCenter>

        <FlexCenter
          sx={{
            width:'100%',
            gap: 3,
            mb: 3
          }}
        >
          <FlexColumn
            sx={{
              width:'50%',
              gap: 1,
              alignItems: 'flex-start'
            }}
          >
            <Typography variant="h8">Address</Typography>
            <CustomTextField
              placeholderWhite="24 J Street AB , New York City, U.S."
            />
          </FlexColumn>
          
          <FlexColumn
            sx={{
              width:'50%',
              gap: 1,
              alignItems: 'flex-start'
            }}
          >
            <Typography variant="h8">Phone number</Typography>
            <CustomTextField
              placeholderWhite="+123 456 7890"
            />
          </FlexColumn>
        </FlexCenter>

        <FlexCenter
          sx={{
            width:'100%',
            gap: 3,
            mb: 3
          }}
        >
          <FlexColumn
            sx={{
              width:'50%',
              gap: 1,
              alignItems: 'flex-start'
            }}
          >
            <Typography variant="h8">Email address</Typography>
            <CustomTextField
              placeholderWhite="james.arthur@gmail.com"
            />
          </FlexColumn>
          
          <FlexColumn
            sx={{
              width:'50%',
              gap: 1,
              alignItems: 'flex-start'
            }}
          >
            <Typography variant="h8">Citizen service number (BSN)</Typography>
            <CustomTextField
              placeholderWhite="123456789"
            />
          </FlexColumn>
        </FlexCenter>
        
        <FlexCenter
          sx={{
            width:'100%',
            gap: 3,
            mb: 3
          }}
        >
          <FlexColumn
            sx={{
              width:'50%',
              gap: 1,
              alignItems: 'flex-start'
            }}
          >
            <Typography variant="h8">IPI</Typography>
            <CustomTextField
              placeholderWhite="IPI"
              placeholderColor="text.secondary"
            />
          </FlexColumn>
          
          <FlexColumn
            sx={{
              width:'50%',
              gap: 1,
              alignItems: 'flex-start'
            }}
          >
            <Typography variant="h8">Citizen service number (BSN)</Typography>
            <SelectCustom
              options={mockFileSelect}
              value={selectedChannel}
              onChange={setSelectedChannel}
              variant="h7"
              typographyOptions="h7"   
            />
          </FlexColumn>
        </FlexCenter>
      </Box>

      <Box>
        <PrimaryButton
          text="Save Setting"
          height="43px"
        />
      </Box>
    </>
  )
}

export default GeneralSettingPage;

