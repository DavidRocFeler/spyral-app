'use client'
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import SecondaryButton from '@/components/ui/SecondaryButton';
import { ICardArrayProgressProps } from '@/types/home';
import { secondaryButtonsArray } from '@/mock/secondaryButtons.mock';

const CardArrayProgress = ({ 
  image,
  title, 
  createdDate,
  collaborators,
}: ICardArrayProgressProps) => {
  return (
    <Box
      sx={{
        bgcolor: '#2a2a2a',
        borderRadius: '16px',
        p: 2,
      }}
    >
      {/* Image Container */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '134px',
          borderRadius: '12px',
          overflow: 'hidden',
          mb: 2,
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
        />
        
        {/* Share Button - Solo visible en index 1 */}
          <Box
            sx={{
              position: 'absolute',
              right: 9,
              top: 8,
            }}
          >
            <SecondaryButton 
              text={secondaryButtonsArray[1].text} 
              icon={secondaryButtonsArray[1].icon} 
              onClick={secondaryButtonsArray[1].onClick}
            />
          </Box>
      </Box>

      {/* Title */}
      <Typography variant="h8" sx={{ mb: 1, display: 'block' }}>
        {title}
      </Typography>

      {/* Created Date */}
      <Typography 
        variant="h8" 
        sx={{ 
          color: 'text.secondary',
          mb: 1.5,
          display: 'block'
        }}
      >
        {createdDate}
      </Typography>

      {/* Collaborators */}
      <Box>
        <Typography 
          variant="h8" 
          sx={{ 
            color: 'text.secondary',
            mb: 1,
            display: 'block'
          }}
        >
          Collaborators
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 1 }}>
          {collaborators.map((avatar, idx) => (
            <Box
              key={idx}
              sx={{
                position: 'relative',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            >
              <Image
                src={avatar}
                alt={`Collaborator ${idx + 1}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CardArrayProgress;