'use client'
import { SmallPlusBrandSvg } from "@/assets/icons"
import { FlexCenter } from "@/components/ui/FlexCenter"
import IconSpan from "@/components/ui/IconSpan"
import { Box, Grid, Typography } from "@mui/material"
import { useState } from "react"
import { FlexColumn } from "@/components/ui/FlexColumn"
import CustomTextField from "@/components/ui/CustomTextField"
import PrimaryButton from "@/components/ui/PrimaryButton"
import CardFileCollaborate from "@/components/songs/Collaborate/CardFileCollaborate"
import { mockFilesCatalogue } from "@/mock/catalogClient.mock"

const CatalogueDesignV2 = () => {
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
      </FlexColumn>

      {/* Grid container con 3 columnas */}
      <Grid container spacing={2} sx={{ my: 2.5 }}>
        {/* Renderizar los archivos */}
        {mockFilesCatalogue.map((file) => (
          <Grid size={4} key={file.id}>
            <CardFileCollaborate 
              file={file} 
              width="40px"
              height="40px"
              px={0}
              py={0}
            />
          </Grid>
        ))}
        
        {/* Box Add - SIEMPRE al final */}
        <Grid size={4}>
          <Box
            height='56px'
            bgcolor='grey.900'
            display='flex'
            alignItems='center'
            width='100%'
            px={1}
            borderRadius='16px'
            sx={{ cursor: 'pointer', '&:hover': { bgcolor: 'grey.800' } }}
          >
            <FlexCenter gap={1.8}>
              <IconSpan
                icon={SmallPlusBrandSvg}
                width="40px"
                height="40px"
                borderRadius="12px"
              />
              <Typography variant="h8">
                Add file
              </Typography>
            </FlexCenter>
          </Box>
        </Grid>
      </Grid>

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

export default CatalogueDesignV2;