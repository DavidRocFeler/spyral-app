'use client'
import { Box, Grid } from '@mui/material'
import SearchBarDropDown from '@/components/ui/SearchBarDropDown'
import PrimaryButton from '@/components/ui/PrimaryButton'
import { PlusBlackSvg } from '@/assets/icons'
import SecondaryButton from '@/components/ui/SecondaryButton'
import { FlexCenter } from '@/components/ui/FlexCenter'
import { workInProgressList } from '@/mock/workInProgresList'
import CardArrayProgress from '@/components/home/user-panel/CardArrayProgress'

const WorkInProgressSection = () => {

  return (
    <Box px={4}>
      <FlexCenter sx={{
        width: '100%'
      }}>
      <SearchBarDropDown/>
        <FlexCenter ml='auto' gap={1}>
            <SecondaryButton
                width='fit-content'
                height='44px'
                bgcolor='transparent'
                text='Add new album'
                />
            <PrimaryButton
                text='Add new song'
                icon={PlusBlackSvg}
            />
        </FlexCenter>
      </FlexCenter>

      <Box>
      <Grid
        mt={3}
        container 
        spacing={3}
        >
        {workInProgressList.map((work, index) => (
            <Grid key={work.id} size={{ xs: 3 }} sx={{ flexShrink: 0 }}>
            <CardArrayProgress
                image={work.image}
                title={work.title}
                createdDate={work.createdDate}
                collaborators={work.collaborators}
                index={index}
            />
            </Grid>
        ))}
      </Grid>
      </Box>
    </Box>
  )
}

export default WorkInProgressSection;