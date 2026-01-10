'use client'
import { Box, Grid, Typography } from "@mui/material"
import { useState } from "react"
import { FlexCenter } from "@/components/ui/FlexCenter"
import { FlexColumn } from "@/components/ui/FlexColumn"
import InputCalendar from "@/components/ui/InputCalendar"
import Summary from "@/components/home/Sumary"
import { catalogueClientsData } from "@/mock/catalogClient.mock"

const CatalogueStats = () => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  return (
    <Box pr={4}>
      <FlexColumn mb={4} gap={3.5}
        sx={{
          width: '100%',
          alignItems:'flex-start'
        }}
      >
        <Typography variant="h3">
          Stats
        </Typography>
      </FlexColumn>

      <FlexCenter mb={2} gap={3}>
        <FlexColumn
          sx={{
            alignItems: 'flex-start',
            gap: 1.5
          }}
        >
          <Typography variant="h8">
            Start Date 
          </Typography>
          <InputCalendar
            value={startDate}
            onChange={setStartDate}
          />
        </FlexColumn>
        <FlexColumn
          sx={{
            alignItems: 'flex-start',
            gap: 1.5
          }}
        >
          <Typography variant="h8">
            End Date 
          </Typography>
          <InputCalendar
            value={endDate}
            onChange={setEndDate}
          />
        </FlexColumn>
      </FlexCenter>

      <Typography variant="h7" color='text.secondary'>
        Here you will see detailed stats for how clients are using your Catalogs, stat on request access, plays, downloads and more.
      </Typography>

      {/* Row Header */}
      <Grid mt={8} container spacing={3}>
        {catalogueClientsData.map((item, index) => (
          <Grid size={{xs: 12, md: 3}} key={index}>
            <Summary
              value={item.value}
              subvalue={item.subvalue}
              subtitle={item.subtitle}
              collaborators={item.collaborators}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default CatalogueStats;