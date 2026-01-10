'use client'
import { ArrowDownSvg, ArrowUpSvg } from "@/assets/icons";
import { FlexCenter } from "@/components/ui/FlexCenter"
import { FlexColumn } from "@/components/ui/FlexColumn";
import IconSpan from "@/components/ui/IconSpan"
import SecondaryButton from "@/components/ui/SecondaryButton";
import { Box, Collapse, Typography } from "@mui/material"
import { useState } from "react";

const CardCopyRight = () => {
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
        Copyrights
       </Typography>
       <IconSpan
         borderRadius='8px'
         icon={tracklistOpen ? ArrowUpSvg : ArrowDownSvg}
         onClick={() => setTracklistOpen(!tracklistOpen)}
       />    
     </FlexCenter>

     <Collapse in={tracklistOpen}>
        <FlexCenter gap={1.5} sx={{ mt: 2 }}>
          <Typography variant='h7' color='text.secondary'>
            CopyRight year
          </Typography>
          <Typography variant='h8'>
            2025
          </Typography>
        </FlexCenter>

        <FlexColumn gap={1.5} mt={3} sx={{ 
            alignItems: 'start'
        }}
        >
          <Typography variant='h8'>
          CopyRight Text
          </Typography>
            <SecondaryButton
            text='QZA8HSA3'
            height="44px"
            width="320px"
            borderRadius="12px"
            bgcolor="grey.900"
            justifyContent="flex-start"
            varitant="h7"
            />
        </FlexColumn>
     </Collapse>
    </Box>
  )
}

export default CardCopyRight