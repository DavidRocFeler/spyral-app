import Summary from '@/components/home/Sumary'
import CardYourCatalogues from '@/components/home/user-panel/CardCatolgues'
import CardLatestReleases from '@/components/home/user-panel/CardLatestReleases'
import CardWorkInProgress from '@/components/home/user-panel/CardWorInProgress'
import CardYourPlaylists from '@/components/home/user-panel/CardYourPlaylist'
import { summaryData } from '@/mock/sumary.mock'
import { Box, Grid } from '@mui/material'

const UserPanel = () => {
  return (
    <Box 
      sx={{ 
        px: 5,
        py: 5,
        pb: 3,
      }}
    >
      {/* Row Header */}
      <Grid mb={3} container spacing={3}>
        {summaryData.map((item, index) => (
          <Grid size={{xs: 12, md: 3}} key={index}>
            <Summary
              value={item.value}
              subvalue={item.subvalue}
              subtitle={item.subtitle}
              collaborators={item.collaborators}
            />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Columna Izquierda */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
            <CardLatestReleases />
            <CardYourCatalogues />
          </Box>
        </Grid>

        {/* Columna Derecha */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
            <CardWorkInProgress />
            <CardYourPlaylists />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserPanel