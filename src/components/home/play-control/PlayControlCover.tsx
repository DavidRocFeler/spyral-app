import { playControl } from "@/mock/playControl.mock";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const PlayControlCover = () => {
    return (
      <Box
        sx={{
          position: 'relative',
          width: '50.62%',
          height: '691px',
          overflow: 'hidden'
        }}
      >
        <Image
          src={playControl.image}
          alt={playControl.title}
          style={{
            width: '100%',
            height: '600px',
            borderRadius: '24px',
            objectFit: 'cover'
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          <Typography
            variant="h3"
            mx='auto'
          >
            {playControl.title}
          </Typography>
          <Box mx='auto' sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Image
              src={playControl.artistImage}
              alt={playControl.artist}
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                objectFit: 'cover'
              }}
            />
            <Typography
              variant="h8"
            >
              {playControl.artist}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

export default PlayControlCover;