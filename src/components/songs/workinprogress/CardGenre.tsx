'use client'
import { ArrowDownSvg, ArrowUpSvg  } from "@/assets/icons";
import { FlexCenter } from "@/components/ui/FlexCenter"
import { FlexColumn } from "@/components/ui/FlexColumn";
import IconSpan from "@/components/ui/IconSpan"
import SelectCustom from "@/components/ui/SelectCustom";
import { Box, Collapse, Typography } from "@mui/material"
import { useState } from "react";

const CardHenre = () => {
    const mockFileSelect = ['Pop', 'Clasic', 'Rock', 'Indie'];
    const [selectedChannel, setSelectedChannel] = useState(mockFileSelect[0]);
    const [tracklistOpen, setTracklistOpen] = useState(true);

  return (

    <Box
     borderRadius='24px'
     bgcolor='background.default'
     p={3}
    >
     <FlexCenter
     sx={{
         width: '100%'
     }}
     >
       <Typography mr='auto' variant="h3">
        Genre
       </Typography>
       <IconSpan
         borderRadius='8px'
         icon={tracklistOpen ? ArrowUpSvg : ArrowDownSvg}
         onClick={() => setTracklistOpen(!tracklistOpen)}
       />    
     </FlexCenter>

     <Collapse in={tracklistOpen}>
        <FlexColumn gap={3} sx={{ mt: 3, alignItems: 'flex-start' }}>

         <FlexCenter gap={2}>
            <Typography variant='h7' color='text.secondary'>
                Genre
            </Typography>
            <SelectCustom
                options={mockFileSelect}
                value={selectedChannel}
                onChange={setSelectedChannel}
                fullWidth={false}
                height="31px"
                heightOption="31px"
                borderRadius="50px"
                bgcolor="background.paper"
                width="120px"
            />
         </FlexCenter>
         <FlexCenter gap={2}>
            <Typography variant='h7' color='text.secondary'>
                Subgenre
            </Typography>
            <SelectCustom
                options={mockFileSelect}
                value={selectedChannel}
                onChange={setSelectedChannel}
                fullWidth={false}
                height="31px"
                heightOption="31px"
                borderRadius="50px"
                bgcolor="background.paper"
                width="120px"
            />
         </FlexCenter>
         <FlexCenter gap={2}>
            <Typography variant='h7' color='text.secondary'>
            Alternative genre
            </Typography>
            <SelectCustom
                options={mockFileSelect}
                value={selectedChannel}
                onChange={setSelectedChannel}
                fullWidth={false}
                height="31px"
                heightOption="31px"
                borderRadius="50px"
                bgcolor="background.paper"
                width="120px"
            />
         </FlexCenter>
         <FlexCenter gap={2}>
            <Typography variant='h7' color='text.secondary'>
            Alternative subgenre
            </Typography>
            <SelectCustom
                options={mockFileSelect}
                value={selectedChannel}
                onChange={setSelectedChannel}
                fullWidth={false}
                height="31px"
                heightOption="31px"
                borderRadius="50px"
                bgcolor="background.paper"
                width="120px"
            />
         </FlexCenter>

        </FlexColumn>
     </Collapse>
    </Box>
  )
}

export default CardHenre;