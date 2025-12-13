'use client'
import { ArrowDownSvg, ArrowUpSvg, PlusSvg } from "@/assets/icons";
import { FlexCenter } from "@/components/ui/FlexCenter"
import IconSpan from "@/components/ui/IconSpan"
import TextButton from "@/components/ui/TextButton";
import { Box, Collapse, Typography } from "@mui/material"
import { useState } from "react";

export interface ICardMetaListProps {
    title: string;
    placeholder: string;
    addElse: string;
}

const CardMetaListExpand = ({
    title,
    placeholder,
    addElse
}: ICardMetaListProps) => {
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
         {title}
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
           {placeholder}
         </Typography>
         <TextButton
         icon={PlusSvg}
         text={addElse}
         color='text.primary'
         flexDirection='row-reverse'
         />
       </FlexCenter>
     </Collapse>
    </Box>
  )
}

export default CardMetaListExpand