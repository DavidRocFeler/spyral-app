'use client'
import { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import Image, { StaticImageData } from 'next/image';
import JamesArthur from '@/assets/UserOlivia.png'
import Olivia from '@/assets/UserOlivia.png'
import TrackingButton from '../ui/TrackinButton';
import { trackingButton } from '@/mock/trackingButtons.mock';
import ListButtonsTracking from './ListButtonsTracking';
import { UploadBrandIconSvg } from '@/assets/icons';
import { FlexCenter } from '../ui/FlexCenter';
import CustomTextField from '../ui/CustomTextField';
import { FlexColumn } from '../ui/FlexColumn';

// ============================================================================
// INTERFACES Y TIPOS
// ============================================================================

interface ITrackingButtonProps {
  text: string;
  icon: React.ComponentType<{ color?: string }>;
  gap?: number;
  width?: string;
  borderRadius?: string;
  justifyContent?: string;
  ml?: string;
  mlicon?: string;
  color?: string;
  px?: number;
  borderColor?: string;
  onClick?: () => void;
  bgcolor?: string;
}

interface Contact {
  id: string;
  name: string;
  avatar: StaticImageData;
}

interface TrackingProps {
  trackingStatus?: number; // 1-5
}

// ============================================================================
// SECONDARY BUTTON GREY COMPONENT
// ============================================================================

const SecondaryButtonGrey = ({
  text,
  icon: IconComponent,
  gap = 1.5,
  width = 'fit-content',
  borderRadius = '50px',
  borderColor = 'transparent',
  justifyContent = 'center',
  ml = '0px',
  mlicon = '0',
  color = 'text.secondary',
  px = 2,
  onClick,
  bgcolor = 'grey.900'
}: ITrackingButtonProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        bgcolor: bgcolor,
        border: '2px solid',
        borderColor: borderColor,
        ml: ml,
        borderRadius: borderRadius,
        display: 'flex',
        justifyContent: justifyContent,
        height: '44px',
        px: px,
        width: width,
        gap: gap,
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          ml: mlicon
        }}
      >
        {IconComponent && <IconComponent color={color} />}
      </Box>
      <Typography
        variant="h8"
        sx={{
          color: color
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

// ============================================================================
// CONTACT SELECTOR COMPONENT
// ============================================================================

const CheckIconSvg = ({ color = '#00FF00' }: { color?: string }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 6L5 9L10 3" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ContactSelector = ({
  contacts,
  selectedContacts,
  onContactClick,
  containerHeight = '100px',
  avatarSize = 64,
  checkmarkSize = 20,
  nameWidth = '85px',
  color = 'text.secondary'
}: {
  contacts: Contact[];
  selectedContacts: string[];
  onContactClick: (contactId: string) => void;
  containerHeight?: string | number;
  avatarSize?: number;
  checkmarkSize?: number;
  nameWidth?: string;
  color?: string;
}) => {
  return (
    <Box
      display="flex"
      height={containerHeight}
      width="100%"
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
            gap: 0.5
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: avatarSize,
              height: avatarSize,
              borderRadius: '100%'
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
                borderRadius: '100%'
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
                  justifyContent: 'center'
                }}
              >
                <CheckIconSvg color="#000" />
              </Box>
            )}
          </Box>
          {/* Nombre del contacto */}
          <Typography
            color={color}
            lineHeight="0.8rem"
            width={nameWidth}
            position="absolute"
            bottom={0}
            variant="h10"
            textAlign="center"
          >
            {contact.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

// ============================================================================
// ICON COMPONENT PLACEHOLDER
// ============================================================================

const DownloadBrandSvg = ({ color = '#9CA3AF' }: { color?: string }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 3V13M10 13L7 10M10 13L13 10M3 17H17"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ============================================================================
// LIST BUTTON TRACKING COMPONENT
// ============================================================================





// ============================================================================
// MAIN TRACKING COMPONENT
// ============================================================================


const Tracking = ({ trackingStatus = 4 }: TrackingProps) => {
  const [newEmail, setNewEmail] = useState('');
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);

  const handleContactClick = (contactId: string) => {
    setSelectedContacts((prev) =>
      prev.includes(contactId)
        ? prev.filter((id) => id !== contactId)
        : [...prev, contactId]
    );
  };

  return (
    <Box
      sx={{
        bgcolor: '#000',
        minHeight: '100vh',
        p: 4,
        color: 'white'
      }}
    >
      {/* Header con tabs */}
      <Box display="flex" gap={2} mb={4}>
        <ListButtonsTracking trackingStatus={trackingStatus} />
      </Box>

      {/* Título Upload */}
      <Box display="flex" alignItems="center" gap={1} mb={3}>
        <FlexCenter>
          <UploadBrandIconSvg/>
        </FlexCenter>
        <Typography variant="h2">
          Upload
        </Typography>
      </Box>

      {/* Subtítulo */}
      <Typography variant="h3" mt={5} mb={5} display="block">
        Start Creating Your Song
      </Typography>

      {/* Input de título */}
      <FlexColumn
      sx={{
        alignItems: 'flex-start',
        gap: 1.5,
        mb: 2.5
      }}
      >
        <Typography variant="h8">
          Title
        </Typography>
        <CustomTextField
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="Enter title"
            alignItems="center"
            width='640px'
        />
      </FlexColumn>

      {/* Selector de artistas */}
      <Box>
        <Typography variant="h8" mb={1.5}>
          Artist
        </Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <ContactSelector
            contacts={contacts}
            selectedContacts={selectedContacts}
            onContactClick={handleContactClick}
            avatarSize={52}
            checkmarkSize={18}
            nameWidth="80px"
          />
        </Box>
      </Box>

      {/* Add track */}
      <Box mt={4}>
        <Typography variant="body2" color="text.secondary">
          Add track
        </Typography>
      </Box>
    </Box>
  );
};

export default Tracking;