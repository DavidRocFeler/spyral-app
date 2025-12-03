'use client'
import { Box, Card, Typography } from '@mui/material';
import Image from 'next/image';
import { ISummaryProps } from '@/types/home';
import { FlexCenter } from '../ui/FlexCenter';

const Summary = ({ value, subtitle, collaborators, subvalue }: ISummaryProps) => {
  return (
    <Card
      sx={{
        bgcolor: 'background.default',
        p: 3,
        borderRadius: '24px',
        height: '111px'
      }}
    >
      <Box
      >
      {collaborators && collaborators.length > 0 && (
          <Box sx={{ display: 'flex', mt: 1, gap: 1 }}>
            {collaborators.map((avatar, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  width: 32,
                  height: 32,
                  mt: -0.5,
                  mb: -0.5,
                  zIndex: collaborators.length - index,
                }}
              >
                <Image
                  src={avatar}
                  alt={`Collaborator ${index + 1}`}
                  width={32}
                  height={32}
                  style={{
                    borderRadius: '50%',
                  }}
                />
              </Box>
            ))}
          </Box>
        )}

        <FlexCenter
        sx={{
          justifyContent: 'start'
        }}
        >
          <Typography variant="h1" sx={{ mb: 1.5 }}>
            {value} 
          </Typography>
          <Typography ml={1} variant='h6'> {subvalue} </Typography>
        </FlexCenter>
        <Typography variant="h7">
          {subtitle}
        </Typography>
        
      </Box>
    </Card>
  );
};

export default Summary;