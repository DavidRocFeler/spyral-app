'use client'
import { EditeIconSvg, ListViewIconSvg, PlusBlackSvg, SquareIconList } from "@/assets/icons"
import CardCatalogueList from "@/components/catalogue/CardCatalogueList"
import { FlexCenter } from "@/components/ui/FlexCenter"
import IconSpan from "@/components/ui/IconSpan"
import SlideBarMenuLeft from "@/components/ui/SlideBarMenuLeft"
import { catalogueList } from "@/mock/catalogueListCard.mock"
import { catalogueListView, menuItemsRegister } from "@/mock/sideBarLeft.mock"
import { Box, Typography } from "@mui/material"
import { useState } from "react"

const ZoomedCatalogue = () => {
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  
  const handleFolderSelect = (id?: number) => {
    if (id !== undefined) {
      setSelectedFolderId(prevId => prevId === id ? null : id);
    }
  };

  return (
    <Box>

      <Box height='100%'
      width='15%'
      position='absolute'
      >
      <SlideBarMenuLeft
      menuItems={catalogueListView}
      />
      </Box>
      <Box 
      right={0}
      position='absolute'
      width='79%'
      height='100%'
      >
       <Box 
       pr={4}
       >
        <FlexCenter mb={2} mt={3} gap={1}>
          <Typography variant="h3">
            My Catalogue
          </Typography>
          <IconSpan
          icon={EditeIconSvg}
          />
        </FlexCenter>

        <CardCatalogueList
          catalogueListTable={catalogueList}
          />
       </Box>
      </Box>
    </Box>
  )
}

export default ZoomedCatalogue;