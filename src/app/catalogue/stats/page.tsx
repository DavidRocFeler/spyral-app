'use client'
import { ListViewIconSvg, PlusGreySvg, SquareIconList } from "@/assets/icons"
import { FlexCenter } from "@/components/ui/FlexCenter"
import IconSpan from "@/components/ui/IconSpan"
import SlideBarMenuLeft from "@/components/ui/SlideBarMenuLeft"
import { catalogueListView } from "@/mock/sideBarLeft.mock"
import { Box, Grid, Typography } from "@mui/material"
import { useState } from "react"
import SearchBarDropDown from "@/components/ui/SearchBarDropDown"
import SecondaryButton from "@/components/ui/SecondaryButton"
import { FlexColumn } from "@/components/ui/FlexColumn"
import InputCalendar from "@/components/ui/InputCalendar"
import { summaryData } from "@/mock/sumary.mock"
import Summary from "@/components/home/Sumary"
import { catalogueClientsData } from "@/mock/catalogClient.mock"

type ViewMode = 'square' | 'list';

const Stats = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('square');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  return (
    <Box>
      {/* Header con Search y Botones */}
      <FlexCenter sx={{
        width: '100%',
        px: 4,
        mb: 2
      }}>
        <SearchBarDropDown/>
        <FlexCenter ml='auto' gap={2.5}>
          <SecondaryButton
            text='Add new'
            height="44px"
            color="text.secondary"
            icon={PlusGreySvg}
            bgcolor="background.default"
          />
          <FlexCenter>
            {/* Square List Button */}
            <IconSpan
              borderRadius='6px'
              width='40px'
              height='40px'
              icon={SquareIconList}
              bgcolor={viewMode === 'square' ? 'background.paper' : 'background.default'}
              borderBottomRightRadius='0px'
              borderTopRightRadius='0px'
              onClick={() => setViewMode('square')}
            />
            {/* List View Button */}
            <IconSpan
              borderRadius='6px'
              width='40px'
              height='40px'
              icon={ListViewIconSvg}
              bgcolor={viewMode === 'list' ? 'background.paper' : 'background.default'}
              borderBottomLeftRadius='0px'
              borderTopLeftRadius='0px'
              onClick={() => setViewMode('list')}
            />
          </FlexCenter>
        </FlexCenter>
      </FlexCenter>

      <Box
      sx={{
        position: 'relative'
      }}
      >
        <Box
        position='absolute'
        height='100vh'
        >
        <SlideBarMenuLeft
        menuItems={catalogueListView}
        />
        </Box>

        <Box 
        pt={3.5}
        ml='auto'
        height='100%'
        width='79%'
        pb={2}
        >
          <Box 
          pr={4}
          >
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
                    <Typography
                    variant="h8"
                    >
                        End Date 
                    </Typography>
                    <InputCalendar
                    value={endDate}
                    onChange={setEndDate}
                    />
                </FlexColumn>
            </FlexCenter>

            <Typography variant="h7"
            color='text.secondary'
            >
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
        </Box>
      </Box>
    </Box>
  )
}

export default Stats;