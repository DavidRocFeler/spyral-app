'use client'
import { PorcentSvg } from "@/assets/icons"
import { FlexCenter } from "@/components/ui/FlexCenter"
import { FlexColumn } from "@/components/ui/FlexColumn"
import PrimaryButton from "@/components/ui/PrimaryButton"
import SecondaryButton from "@/components/ui/SecondaryButton"
import SelectCustom from "@/components/ui/SelectCustom"
import { Box, Typography } from "@mui/material"
import { useState } from "react"
import CustomTextField from "@/components/ui/CustomTextField"
import IconInput from "@/components/ui/IconInput"

const ManageWriters = () => {
  const [proNumber, setProNumber] = useState<string>('');
  const [porsentages, setPorsentages] = useState<string>('');
  
  const mockFileSelect = ['Select channel', 'Select channel', 'Select channel', 'Select channel'];
  const [selectedChannel, setSelectedChannel] = useState(mockFileSelect[0]);

  return (
    <Box 
      borderRadius='24px'
      p={3}
      pb={20}
      bgcolor='background.default'
    >
      <Box
      mb={4}
      >
        <Typography variant="h3">
          Manage writers
        </Typography>
      </Box>

      <FlexCenter 
      sx={{
        width:'100%',
        gap: 2,
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
            <Typography variant="h8">Writer*</Typography>
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
              width:'50%',
              gap: 1,
              alignItems: 'flex-start'
            }}
        >
          <Typography variant="h8">Split</Typography>
          <IconInput
          icon={PorcentSvg}
          bgcolor='grey.900'
          width='100%'
          placeholderWhite='Enter Porcentanges'
          placeholderColor='text.secondary'
          value={porsentages}
          onChange={(e) => setPorsentages(e.target.value)}
          />
        </FlexColumn>
      </FlexCenter>

      <FlexCenter
      sx={{
        width:'100%',
        gap: 2,
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
            <Typography variant="h8">Publisher</Typography>
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
              width:'50%',
              gap: 1,
              alignItems: 'flex-start'
            }}
        >
          <Typography variant="h8">PRO</Typography>
          <SelectCustom
            options={mockFileSelect}
            value={selectedChannel}
            onChange={setSelectedChannel}
            variant="h7"
            typographyOptions="h7"   
          />
        </FlexColumn>
      </FlexCenter>

      <FlexColumn
         sx={{
          width:'50%',
          gap: 1,
          alignItems: 'flex-start'
      }}
        >
        <Typography variant="h8">PRO number</Typography>
          <CustomTextField
          width="320px"
          placeholderWhite="Enter PRO number"
          placeholderColor="text.secondary"
          value={proNumber}
          onChange={(e) => setProNumber(e.target.value)}
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
        <PrimaryButton
          text="Save setting"
        />
        <SecondaryButton
          text="Cancel"
          bgcolor="transparent"
        />
      </Box>
    </Box>
  )
}

export default ManageWriters;