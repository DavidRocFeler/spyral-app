'use client'
import { DistributeIconBigBrandSvg, RegisterIconGoldSvg, RevenueIconBigSvg } from '@/assets/icons'
import PlayerModal from '@/components/songs/register/PlayerModal'
import RegisterSong from '@/components/songs/register/RegisterSong'
import Demo from '@/components/songs/Demo'
import ListButtonsTracking from '@/components/songs/ListButtonsTracking'
import MinimizeDemo from '@/components/songs/MinimizeDemo'
import TitleIcon from '@/components/ui/TitleIcon'
import { Box, Grid, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import FormDistribute from '@/components/songs/distribute/FormDistribute'
import ModalDistribute from '@/components/songs/distribute/ModalDistribute'
import CardSummaryRevenue from '@/components/songs/revenue/CardSummaryRevenue'
import { revenueCardsData } from '@/mock/sumaryRevenue.mock'
import TopRevenueCard from '@/components/songs/revenue/TopRevenueCard'
import { FlexCenter } from '@/components/ui/FlexCenter'
import CardStatistics from '@/components/songs/revenue/CardStatistics'
import SelectCustom from '@/components/ui/SelectCustom'

const mockFileSelect = ['This week', 'Channel', 'Electric', 'Bass Line'];

const Revenue = () => {
    const [isDemoMinimized, setIsDemoMinimized] = useState(false)
    const [buttonNone, setButtonNone] = useState<string>('')
    const [selectedChannel, setSelectedChannel] = useState(mockFileSelect[0]);

    
    // Si ListButtonsTracking solo acepta un número como prop trackingStatus
    // y no tiene onStatusChange, entonces:
    const currentTrackingStatus = 5 // Este valor debe venir de alguna fuente (API, estado global, etc.)

    // Efecto que se ejecuta cuando currentTrackingStatus cambia
    useEffect(() => {
        if (currentTrackingStatus >= 4) {
            setButtonNone('none')
        } else {
            setButtonNone('')
        }
    }, [currentTrackingStatus]) // Se ejecuta cada vez que currentTrackingStatus cambia

    const handleToggleDemo = () => {
        setIsDemoMinimized(!isDemoMinimized)
    }

    return (
        <Box py={2} px={4}>
            <Box display="flex" gap={2} mb={1}>
                {/* ListButtonsTracking solo acepta trackingStatus como prop */}
                <ListButtonsTracking trackingStatus={currentTrackingStatus} />
            </Box>
            {isDemoMinimized ? (
                <Demo onMinimize={handleToggleDemo} />
            ) : (
                /* Si MinimizeDemo no acepta trackingStatus como prop, 
                   entonces pasamos solo las props que sí acepta */
                <MinimizeDemo onExpand={handleToggleDemo}
                trackingStatus={buttonNone} 
                />
            )}
            <FlexCenter 
            sx={{
                width:'100%' 
            }}
            mt={5} mb={3}>
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

            <Grid container spacing={3}> {/* spacing ajusta el espacio entre cards */}
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
                <CardStatistics/>    
            </FlexCenter>
        </Box>
    )
}

export default Revenue