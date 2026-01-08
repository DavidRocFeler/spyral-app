'use client'
import { EditeIconSvg } from "@/assets/icons"
import CardCatalogueList from "@/components/catalogue/CardCatalogueList"
import { FlexCenter } from "@/components/ui/FlexCenter"
import IconSpan from "@/components/ui/IconSpan"
import { catalogueList } from "@/mock/catalogueListCard.mock"
import { Box, Typography } from "@mui/material"

const MyCatalogue = () => {

  return (
    <Box pr={4}>
      <FlexCenter mt={-1} mb={2} gap={1}>
        <Typography variant="h3">
          My Catalogue
        </Typography>
        <IconSpan icon={EditeIconSvg} />
      </FlexCenter>

      <CardCatalogueList catalogueListTable={catalogueList} />
    </Box>
  )
}

export default MyCatalogue;