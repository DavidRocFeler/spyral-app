'use client'
import { Box, Grid } from "@mui/material"
import SearchBarDropDown from "@/components/ui/SearchBarDropDown"
import CardPlayList from "@/components/playlist/CardPlayList"
import { playListCards } from "@/mock/workInProgresList"

const PlayList = () => {

  return (
    <Box>
      {/* Header con Search y Botones */}
      <Box sx={{
        width: '100%',
        px: 4,
        mb: 2
      }}>
        <SearchBarDropDown/>

        <Box 
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
                lg: 'repeat(4, 1fr)',
                xl: 'repeat(4, 1fr)'
              },
              gap: 2,
              mt: 2,
              position: 'relative'
            }}
          >
            {playListCards.map((work) => (
              <Grid key={work.id} size={{ xs: 6 }} sx={{ flexShrink: 0 }}>
                <CardPlayList
                  key={work.id}
                  {...work}
                />
              </Grid>
            ))}
          </Box>   
      </Box>
    </Box>
  )
}

export default PlayList;