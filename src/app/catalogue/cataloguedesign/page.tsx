'use client'
import { Box, Typography } from "@mui/material"
import { useState } from "react"
import { FlexCenter } from "@/components/ui/FlexCenter"
import { FlexColumn } from "@/components/ui/FlexColumn"
import UploadBoxMain from "@/components/ui/UploadBoxMain"
import CustomTextField from "@/components/ui/CustomTextField"
import PrimaryButton from "@/components/ui/PrimaryButton"

const CatalogueDesign = () => {
  const [message, setMessage] = useState('');

  return (
    <Box pr={4}>
      <FlexColumn mb={0} gap={2}
        sx={{
          width: '100%',
          alignItems:'flex-start'
        }}
      >
        <Typography variant="h3">
          Catalogue Design
        </Typography>
        <UploadBoxMain width="100%" />
      </FlexColumn>

      <FlexColumn mb={3} gap={2}
        sx={{
          width: '67%',
          alignItems: 'flex-start'
        }}
      >
        <Typography variant="h8"> Catalogue name </Typography>
        <CustomTextField placeholder="Enter name" />
      </FlexColumn>

      <FlexColumn mb={3} gap={2}
        sx={{
          width: '67%',
          alignItems: 'flex-start'
        }}
      >
        <Typography variant="h8"> Description </Typography>
        <CustomTextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Say something about this catalogue"
          height="120px"
          alignItems="flex-start"
          multiline
          rows={3}
        />
      </FlexColumn>

      <FlexColumn mb={3} gap={2}
        sx={{
          width: '67%',
          alignItems: 'flex-start'
        }}
      >
        <Typography variant="h8"> Theme color </Typography>
        <FlexCenter
          mb={2}
          bgcolor='grey.900'
          height='44px'
          px={2}
          borderRadius='12px'
          sx={{
            width:'320px',
          }}
        >
          <Box
            width='24px'
            height='24px'
            borderRadius='50%'
            bgcolor='secondary.main'
            mr={2}
          />
          <Typography mr='auto' variant="h8"> #E2FC0B </Typography>
        </FlexCenter>
      </FlexColumn>

      <Box>
        <PrimaryButton text="Save" />
      </Box>
    </Box>
  )
}

export default CatalogueDesign;