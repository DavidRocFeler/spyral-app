'use client'
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import SecondaryButton from '@/components/ui/SecondaryButton';
import { ICardArrayProgressProps } from '@/types/home';
import { secondaryButtonsArray } from '@/mock/secondaryButtons.mock';
import { useState } from 'react';
import CardShareProgress from './CardShareProgress';

const CardArrayProgress = ({ 
  image,
  title, 
  createdDate,
  collaborators,
}: ICardArrayProgressProps) => {
  const [open, setOpen] = useState(false); 

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
              onClick={() => setOpen(true)}
            />
          </Box>

          <CardShareProgress
            open={open} 
            onClose={() => setOpen(false)} 
          />
          
      </Box>

      {/* Title */}
      <Typography variant="h8" sx={{ mb: 2.5, display: 'block' }}>
        {title}
      </Typography>

      {/* Created Date */}
      <Box mb={1.5} display='flex' alignItems='center' gap={1}>
        <Typography 
          variant="h9" 
        >
          Created
        </Typography>
        <Typography 
          variant="h9" 
          sx={{ 
            color: 'text.secondary',
          }}
        >
          {createdDate}
        </Typography>
      </Box>

      {/* Collaborators */}
      <Box 
      display='flex'
      gap={1}
      alignItems='center'
      >
        <Typography 
          variant="h9" 
          mr={1}
          pt={1}
          sx={{ 
            color: 'text.secondary',
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