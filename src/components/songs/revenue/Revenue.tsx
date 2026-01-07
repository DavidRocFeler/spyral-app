'use client'
import {  RevenueIconBigSvg } from '@/assets/icons'
import TitleIcon from '@/components/ui/TitleIcon'
import { Box, Grid } from '@mui/material'
import { useState, useEffect } from 'react'
import CardSummaryRevenue from '@/components/songs/revenue/CardSummaryRevenue'
import { revenueCardsData } from '@/mock/sumaryRevenue.mock'
import TopRevenueCard from '@/components/songs/revenue/TopRevenueCard'
import { FlexCenter } from '@/components/ui/FlexCenter'
import CardStatistics from '@/components/songs/revenue/CardStatistics'
import SelectCustom from '@/components/ui/SelectCustom'
import CardStatisticsWeek from './CardStatisticsWeek'

const mockFileSelect = ['This week', 'Channel', 'Electric', 'Bass Line'];

const Revenue = () => {
    const [selectedChannel, setSelectedChannel] = useState(mockFileSelect[0]);

    return (
        <Box pt={1} pb={1} px={0}>

            <FlexCenter 
            sx={{
                width:'100%' 
            }}
            mt={0} mb={3}>
                <Box mr='auto'>
                    <TitleIcon
                        icon={RevenueIconBigSvg}
                        text='Revenue'
                    /> 
                </Box>
                <SelectCustom
                bgcolor='tramsparent'
                fullWidth={false}
                 options={mockFileSelect}
                 value={selectedChannel}
                 onChange={setSelectedChannel}
                />
            </FlexCenter>

            <Grid container spacing={3}> 
            {revenueCardsData.map((card, index) => (
                <Grid 
                size={{
                    xs: 12,
                    sm: 6,
                    md: 4,
                    lg: 2.4,
                    xl: 2.4
                }}
                key={index}
                >
                <CardSummaryRevenue
                    value={card.value}
                    subtitle={card.subtitle}
                    subvalue={card.subvalue}
                />
                </Grid>
            ))}
            </Grid>

            <FlexCenter 
            mt={3}
            gap={3}
            sx={{
                width: '100%'
            }}
            >
                <TopRevenueCard/>
                <TopRevenueCard/>
            </FlexCenter>

            <FlexCenter
             mt={3}
             gap={3}
             sx={{
                 width: '100%'
             }}
            >
                <CardStatistics/>
                <CardStatisticsWeek/>    
            </FlexCenter>
        </Box>
    )
}

export default Revenue