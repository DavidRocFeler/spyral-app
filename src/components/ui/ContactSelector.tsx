// components/ContactSelector.tsx
'use client'
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { CheckIconSvg, PlusBrandIconSvg } from '@/assets/icons';
import { IContactSelectorItemProps } from '@/types/ui';

const ContactSelector = ({
  contact,
  isSelected,
  onContactClick,
  avatarSize = 64,
  checkmarkSize = 20,
  height = '85px',
  nameWidth = '85px',
  icon = CheckIconSvg,
  color = 'text.secondary',
  showBorder = true 
}: IContactSelectorItemProps) => {
  const IconToRender = contact.icon || icon;
  const finalBottom = contact.bottom || 0;
  const hasAvatar = !!contact.avatar; 

  return (
    <Box 
      onClick={() => onContactClick(contact.id)}
      sx={{
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: height,
        alignItems: 'center',
      }}
    >
      {!hasAvatar ? (
        <Box
          sx={{
            position: 'relative',
            width: avatarSize,
            height: avatarSize,
            borderRadius: '50%',
          }}
        >
          <Box
            sx={{
              width: avatarSize,
              height: avatarSize,
              borderRadius: '50%',
              border: '2px dashed',
              borderColor: 'grey.900',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <PlusBrandIconSvg />
          </Box>

          <Box
            sx={{
              position: 'absolute',
              zIndex: 10,
              top: -4,
              right: -4,
              width: checkmarkSize,
              height: checkmarkSize,
              borderRadius: '50%',
              bgcolor: 'secondary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <IconToRender />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            position: 'relative',
            width: avatarSize,
            height: avatarSize,
            borderRadius: '100%',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              zIndex: 9,
              border: (isSelected && showBorder) ? '2px solid' : 'none', 
              borderColor: isSelected ? 'secondary.main' : 'transparent',
              width: avatarSize,
              height: avatarSize,
              borderRadius: '100%',
            }}
          />
          <Image
            src={contact.avatar}
            alt={contact.name}
            width={avatarSize}
            height={avatarSize}
            style={{
              borderRadius: '50%',
              position: 'absolute',
              zIndex: 8
            }}
          />
          {isSelected && (
            <Box
              sx={{
                position: 'absolute',
                zIndex: 10,
                top: -4,
                right: -4,
                width: checkmarkSize,
                height: checkmarkSize,
                borderRadius: '50%',
                bgcolor: 'secondary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <IconToRender />
            </Box>
          )}
        </Box>
      )}

      <Typography 
        color={color}
        lineHeight='0.8rem' 
        width={nameWidth} 
        position='absolute' 
        bottom={finalBottom} 
        variant="h10" 
        textAlign='center'
      >
        {contact.name}
      </Typography>
    </Box>
  );
};

export default ContactSelector;