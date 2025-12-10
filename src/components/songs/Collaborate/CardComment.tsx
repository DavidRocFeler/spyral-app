import React from 'react';
import { Card, CardHeader, CardContent, Avatar, IconButton, Typography, Box } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image, { StaticImageData } from 'next/image';
import IconSpan from '@/components/ui/IconSpan';
import { LittleSpanSvg } from '@/assets/icons';
import { FlexCenter } from '@/components/ui/FlexCenter';
import { ICardCommentsComponentProps } from '@/types/song';

const CardComments = ({ cardCommentsData }: ICardCommentsComponentProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {cardCommentsData.map((comment) => (
        <Card 
          key={comment.id}
          sx={{ 
            backgroundColor: 'background.default',
            boxShadow: 'none',
            borderColor: 'background.dafault',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'start'
          }}
        >
          <CardHeader
            sx={{pt: 0.5, px: 0}}
            avatar={
              <Box sx={{ position: 'relative', width: 40, height: 40 }}>
                <Image
                  src={comment.authorImage}
                  alt={comment.authorName}
                  fill
                  style={{ 
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
            }
          />
          <CardContent sx={{
            p: 0,
            display: 'flex',
            flexDirection: 'column' 
            }}>
            <FlexCenter sx={{width: '100%'}}>
                <Typography variant="h8">
                    {comment.authorName}
                </Typography>
                <Box ml='auto'><IconSpan
                bgcolor='transparent'
                icon={LittleSpanSvg}
                /></Box>
            </FlexCenter>

            <Typography mb={2} width='90%' lineHeight='1.3rem' variant="h7">
              {comment.comment}
            </Typography>
            <Box mb={2} width='90%'>
                <Typography 
                variant="h8"
                color='text.secondary'
                py={0.5}
                px={1}
                bgcolor='grey.900'
                width= 'fit-content'
                borderRadius='9px'
                >
                {comment.version}
                </Typography>
            </Box>
            <Typography color='text.secondary' variant="h9">
              {comment.date}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default CardComments;