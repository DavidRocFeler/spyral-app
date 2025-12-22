import { FlexCenter } from '@/components/ui/FlexCenter'
import { Box, Typography } from '@mui/material'
import CardPublished from './CardPublished'
import { FlexColumn } from '@/components/ui/FlexColumn'
import SelectionButton from '@/components/ui/SelectionButton'
import SearchBarDropDown from '@/components/ui/SearchBarDropDown'

// Data para el mapeo
const publishedCards = [
  { id: 1, trackingStatus: 4 },
  { id: 2, trackingStatus: 5 },
  { id: 3, trackingStatus: 5 },
  { id: 4, trackingStatus: 2 },
  { id: 5, trackingStatus: 3 },
];

const PublishedSection = () => {

  return (
    <Box px={4}>
        <SearchBarDropDown/>

        <FlexColumn gap={2} mt={3}>
            {publishedCards.map((card) => (
              <CardPublished
                key={card.id}
                bgcolor='background.default'  // 👈 Igual para todos
                trackingStatus={card.trackingStatus}
              />
            ))}
        </FlexColumn>

        <FlexCenter mt={6} px={2} height='44px' borderRadius='12px' bgcolor='background.default' gap={3}>
            <Typography variant='h7'>
                You have one song which has been distributed but not registered. What do you want to do?
            </Typography>
            <SelectionButton
              text='Fix it now'
              bgcolor='transparent'
              color='secondary.main'
              px={0}
            />
            <SelectionButton
              text='Dismiss'
              bgcolor='transparent'
              px={0}
            />
        </FlexCenter>
    </Box>
  )
}

export default PublishedSection