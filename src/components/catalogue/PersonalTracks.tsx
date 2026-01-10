import { Box, Typography } from "@mui/material";
import SecondaryButton from "../ui/SecondaryButton";
import { PlusSvg } from "@/assets/icons";
import { FlexCenter } from "../ui/FlexCenter";
import { personalTrack } from "@/mock/catatalogueZoomed.mock";
import CardTrackPersonal from "./CardTrackPersonal";
import { ICardPersonalTrackProps } from "@/types/catalogue";

const PersonalTracks = ({
  width = '590px',
  height = '100vh',
  mr = 4,
  pb = 0
}: ICardPersonalTrackProps) => {
    return (
      <Box
        width={width}
        height={height}
        borderRadius='24px'
        pt={3.5}
        pb= {pb}
        px={4}
        mr={mr}
        bgcolor='background.default'
      >
        <FlexCenter
        sx={{width: '100%'}}
        mb={3}
        >
            <Typography
            variant="h3"
            sx={{
                mr: 'auto',
                color: '#fff',
                fontSize: '22px',
                fontWeight: 600,
            }}
            >
            My Personal Tracks
            </Typography>
            <SecondaryButton
            text="Add new track"
            icon={PlusSvg}
            />
        </FlexCenter>
        <Box
        display='flex'
        flexDirection='column'
        gap={2}
        >
          {personalTrack.map((track) => (
            <CardTrackPersonal
            key={track.id} 
            track={{
                ...track,          
                display: 'none'   
            }} 
            />
          ))}
        </Box>
      </Box>
    );
  };

export default PersonalTracks;