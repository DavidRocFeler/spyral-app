import { Card, CardHeader, CardContent, Typography, Box } from '@mui/material';
import Image from 'next/image';
import { FlexCenter } from '@/components/ui/FlexCenter';
import { ICardCommentsComponentProps } from '@/types/song';

const CardHistory = ({ cardCommentsData }: ICardCommentsComponentProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {cardCommentsData.map((comment) => (
        <Card 
          key={comment.id}
          sx={{ 
            backgroundColor: 'primary.main',
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
            <FlexCenter gap={2} sx={{width: '100%'}}>
                <Typography variant="h8">
                    {comment.authorName}
                </Typography>
              <Typography pt={0.001} variant="h7">
                {comment.comment}
              </Typography>
            </FlexCenter>
            <Box my={1}>
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

export default CardHistory;