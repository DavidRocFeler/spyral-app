import { menuPlayControl } from "@/mock/playControl.mock";
import { Box, Typography } from "@mui/material";
import CardTracks from "./CardTracks";

const RelatedTracks = () => {
    return (
      <Box
        width='49.67%'
        height='730px'
        borderRadius='24px'
        pt={3.5}
        px={4}
        bgcolor='background.default'
      >
        <Typography
          variant="h3"
          sx={{
            color: '#fff',
            fontSize: '22px',
            fontWeight: 600,
            mb: 3.5
          }}
        >
          Related Tracks
        </Typography>
        <Box
        display='flex'
        flexDirection='column'
        gap={2}
        >
          {menuPlayControl.map((track) => (
            <CardTracks key={track.id} track={track} />
          ))}
        </Box>
      </Box>
    );
  };

export default RelatedTracks;