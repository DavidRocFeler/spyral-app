// components/ContactSelector.tsx
'use client'
import { Box, Typography } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import { CheckIconSvg } from '@/assets/icons';
import { ComponentType } from 'react';

export interface Contact {
  id: string;
  name?: string;
  email?: string;
  avatar: StaticImageData;
}

interface ContactSelectorProps {
  contacts: Contact[];
  selectedContacts: string[];
  onContactClick: (contactId: string) => void;
  containerHeight?: string | number;
  avatarSize?: number;
  checkmarkSize?: number;
  nameWidth?: string;
  icon?: ComponentType;
  color?: string;
}

const ContactSelector = ({
  contacts,
  selectedContacts,
  onContactClick,
  containerHeight = '100px',
  avatarSize = 64,
  checkmarkSize = 20,
  nameWidth = '85px',
  icon = CheckIconSvg,
  color = 'text.secondary' 
}: ContactSelectorProps) => {
    const IconSvg = icon
  return (
    <Box 
      display='flex' 
      height={containerHeight} 
      width='100%' 
      justifyContent='space-around' 
      gap={1.3} 
      mb={2}
    >
      {contacts.map((contact) => (
        <Box 
          key={contact.id}
          onClick={() => onContactClick(contact.id)}
          sx={{
            cursor: 'pointer',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: avatarSize,
              height: avatarSize,
              borderRadius: '100%',
            }}
          >
            {/* Borde de selección */}
            <Box
              sx={{
                position: 'absolute',
                zIndex: 9,
                border: selectedContacts.includes(contact.id) ? '2px solid' : 'none',
                borderColor: selectedContacts.includes(contact.id) ? 'secondary.main' : 'transparent',
                width: avatarSize,
                height: avatarSize,
                borderRadius: '100%',
              }}
            />
            
            {/* Avatar/Imagen */}
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
            
            {/* Checkmark de selección */}
            {selectedContacts.includes(contact.id) && (
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
                <IconSvg/>
              </Box>
            )}
          </Box>
          
          {/* Nombre del contacto */}
          <Typography 
            color = {color}
            lineHeight='0.8rem' 
            width={nameWidth} 
            position='absolute' 
            bottom={0} 
            variant="h10" 
            textAlign='center'
          >
            {contact.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ContactSelector;