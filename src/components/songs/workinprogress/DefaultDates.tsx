'use client'
import { ArrowDownSvg, ArrowUpSvg } from "@/assets/icons";
import { FlexCenter } from "@/components/ui/FlexCenter"
import { FlexColumn } from "@/components/ui/FlexColumn";
import IconSpan from "@/components/ui/IconSpan"
import InputCalendar from "@/components/ui/InputCalendar";
import { IDefaultDatesProps } from "@/types/song";
import { Box, Collapse, Typography } from "@mui/material"
import { useState } from "react";

const DefaultDates = ({
  title = 'Default Dates',
  calendarTitle1 = 'Consumer Release Date',
  consumerReleaseTime,
  calendarTitle2,
  recordingYear,
  recordingLocation,
}: IDefaultDatesProps) => {
    const [tracklistOpen, setTracklistOpen] = useState(true);
    const [consumerReleaseDate, setConsumerReleaseDate] = useState<string>('');
    const [preorderRateDate, setPreorderRateDate] = useState<string>('');
    
    return (
        <Box
            borderRadius='24px'
            bgcolor='background.default'
            p={3}
        >
            <FlexCenter
                sx={{
                    mb: 3,
                    width: '100%'
                }}
            >
                <Typography mr='auto' variant="h3">
                    {title}
                </Typography>
                <IconSpan
                    borderRadius='8px'
                    icon={tracklistOpen ? ArrowUpSvg : ArrowDownSvg}
                    onClick={() => setTracklistOpen(!tracklistOpen)}
                />    
            </FlexCenter>

            <Collapse in={tracklistOpen}>
                {/* Calendar 1 - Siempre se muestra porque tiene valor por defecto */}
                <FlexColumn gap={1} 
                    sx={{
                        alignItems: 'flex-start'
                    }}
                >
                    <Typography variant="h8">{calendarTitle1}</Typography>
                    <Box>
                        <InputCalendar
                            value={consumerReleaseDate}
                            onChange={setConsumerReleaseDate}
                            placeholder="DD/MM/YYYY"
                        />
                    </Box>
                    {!consumerReleaseDate && (
                        <Typography variant="h9" color="error.main">
                            *Example text for any edge case
                        </Typography>
                    )}
                </FlexColumn>

                {/* Consumer Release Time - Solo si se pasa la prop */}
                {consumerReleaseTime && (
                    <FlexCenter gap={1.5} sx={{ mt: 2 }}>
                        <Typography variant='h7' color='text.secondary'>
                            Consumer Release Time
                        </Typography>
                        <Typography variant='h8'>
                            {consumerReleaseTime}
                        </Typography>
                    </FlexCenter>
                )}

                {/* Calendar 2 - Solo si se pasa la prop calendarTitle2 */}
                {calendarTitle2 && (
                    <FlexColumn mt={3} gap={1} 
                        sx={{
                            alignItems: 'flex-start'
                        }}
                    >
                        <Typography variant="h8">{calendarTitle2}</Typography>
                        <Box>
                            <InputCalendar
                                value={preorderRateDate}
                                onChange={setPreorderRateDate}
                                placeholder="DD/MM/YYYY"
                            />
                        </Box>
                        {!preorderRateDate && (
                            <Typography variant="h9" color="error.main">
                                *Example text for any edge case
                            </Typography>
                        )}
                    </FlexColumn>
                )}

                {/* Recording Year - Solo si se pasa la prop */}
                {recordingYear !== undefined && (
                    <FlexCenter gap={1.5} sx={{ mt: 3 }}>
                        <Typography variant='h7' color='text.secondary'>
                            Recording year
                        </Typography>
                        <Typography variant='h8'>
                            {recordingYear}
                        </Typography>
                    </FlexCenter>
                )}

                {/* Recording Location - Solo si se pasa la prop */}
                {recordingLocation && (
                    <FlexCenter gap={1.5} sx={{ mt: 2 }}>
                        <Typography variant='h7' color='text.secondary'>
                            Recording location
                        </Typography>
                        <Typography variant='h8'>
                            {recordingLocation}
                        </Typography>
                    </FlexCenter>
                )}
            </Collapse>
        </Box>
    )
}

export default DefaultDates;