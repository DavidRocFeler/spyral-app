'use client'
import { SearchWhiteIconSvg, SmallPlusBrandSvg } from "@/assets/icons"
import { FlexCenter } from "@/components/ui/FlexCenter"
import { FlexColumn } from "@/components/ui/FlexColumn"
import SearchBar from "@/components/ui/SearchBar"
import TextButton from "@/components/ui/TextButton"
import { Box, Typography } from "@mui/material"

const Client = () => {
  return (
    <Box pr={4}>
      <FlexColumn 
        mb={0} 
        gap={3.5}
        sx={{
          width: '100%',
          alignItems: 'flex-start'
        }}
      >
        <Typography variant="h3">
          Clients
        </Typography>
        
        <SearchBar
          icon={SearchWhiteIconSvg}
          placeholder="Search"
          width="320px"
        />
        
        <FlexCenter gap={1.5}>
          <Typography variant="h8" color='text.secondary'>
            No Clients here yet! Invite people to your Catalogue
          </Typography>
          <TextButton
            gap={1}
            color="secondary.main"
            text='Invite client'
            icon={SmallPlusBrandSvg}
            flexDirection="row-reverse"
          />
        </FlexCenter>
      </FlexColumn>
    </Box>
  )
}

export default Client