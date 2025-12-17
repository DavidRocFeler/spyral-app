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
import Summary from "@/components/home/Sumary"
import { catalogueClientsData } from "@/mock/catalogClient.mock"
import PrimaryButton from "@/components/ui/PrimaryButton"
import CheckRadius from "@/components/ui/CheckRadius"

type ViewMode = 'square' | 'list';

const Notifications = () => {
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
            <FlexColumn mb={3} gap={3.5}
            sx={{
              width: '100%',
              alignItems:'flex-start'
            }}
            >
              <Typography variant="h3">
              Notifications
              </Typography>
            </FlexColumn>

            <Typography variant="h7"
            color='text.secondary'
            >
                Choose your notification
            </Typography>
            
            <FlexCenter gap={1} mt={2}>
              <CheckRadius
              text="In App"
              />
              <CheckRadius
              text="In App and Email"
              />
              <CheckRadius
              text="I don’t want any notifications"
              />
            </FlexCenter>

            <Box mt={4}>
              <PrimaryButton
              text="Save setting"
              />
            </Box>
            
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Notifications;