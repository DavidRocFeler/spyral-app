'use client'
import { ArrowDownSvg, ArrowUpSvg, PlusSvg } from "@/assets/icons";
import { FlexCenter } from "@/components/ui/FlexCenter"
import { FlexColumn } from "@/components/ui/FlexColumn";
import IconSpan from "@/components/ui/IconSpan"
import PrimaryButton from "@/components/ui/PrimaryButton";
import { Box, Collapse, Typography } from "@mui/material"
import { useState } from "react";

const CardIdentifier = ({

}) => {
    const [tracklistOpen, setTracklistOpen] = useState(true);

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
       Identifier
       </Typography>
       <FlexCenter gap={1.5}>
          <PrimaryButton
            text='Save'
            height="31px"
          />
          <IconSpan
            borderRadius='8px'
            icon={tracklistOpen ? ArrowUpSvg : ArrowDownSvg}
            onClick={() => setTracklistOpen(!tracklistOpen)}
          />    
       </FlexCenter>   
     </FlexCenter>

     <Collapse in={tracklistOpen}>
       <FlexCenter gap={9}>
         <FlexColumn gap={2.5} 
         sx={{
            alignItems: 'flex-start'
         }}
         >
            <Typography variant="h8">Barcode</Typography>
            <Typography variant="h8" fontSize='32px'>QZA8HSA3</Typography>
         </FlexColumn>
         <FlexColumn gap={2.5}
         sx={{
            alignItems: 'flex-start'
         }}
         >
            <Typography variant="h8"> Cat.nr. </Typography>
            <Typography variant="h8" fontSize='32px' > 14092023 </Typography>
         </FlexColumn>
       </FlexCenter>
     </Collapse>
    </Box>
  )
}

export default CardIdentifier;