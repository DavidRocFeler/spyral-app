'use client'
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ListButtonsTracking from './ListButtonsTracking';
import { UploadBrandIconSvg } from '@/assets/icons';
import { FlexCenter } from '../ui/FlexCenter';
import CustomTextField from '../ui/CustomTextField';
import { FlexColumn } from '../ui/FlexColumn';
import ContactSelector from '../ui/ContactSelector';
import { contactsTracking } from '@/mock/contactsTracking.mock';
import { ITrackingProps } from '@/types/song';

const Tracking = ({ trackingStatus = 1 }: ITrackingProps) => {
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
        <Typography variant="h8">
          Artist
        </Typography>
        <FlexCenter mt={1} pl={1} width='fit-content' alignItems='end' gap={4}>
          {contactsTracking.map((contact) => (
            <ContactSelector
              key={contact.id}
              contact={contact}
              isSelected={selectedContacts.includes(contact.id)}
              showBorder={contact.id !== '2'} 
              onContactClick={handleContactClick}
              avatarSize={64}
              nameWidth="80px"
              color='text.primary'
            />
          ))}
        </FlexCenter>
     
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