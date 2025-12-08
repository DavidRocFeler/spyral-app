'use client'
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import ListButtonsTracking from './ListButtonsTracking';
import { UploadBrandIconSvg, UploadImageBrandIconSvg } from '@/assets/icons';
import { FlexCenter } from '../ui/FlexCenter';
import CustomTextField from '../ui/CustomTextField';
import { FlexColumn } from '../ui/FlexColumn';
import ContactSelector from '../ui/ContactSelector';
import { contactsTracking } from '@/mock/contactsTracking.mock';
import { ITrackingProps } from '@/types/song';
import UploadBox from './UploadBox';
import SecondaryButton from '../ui/SecondaryButton';
import CancelButtonTransparent from '../ui/CancelButtonTransparent';
import PrimaryButton from '../ui/PrimaryButton';

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
            width='600px'
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
        <Typography variant="h8">
          Add track
        </Typography>
        <Box mt={1.5}><UploadBox/></Box>
      </Box>

     <Box display='flex' alignItems='end'>
      <Box display='flex' mr='auto' mt={1.5} gap={3} alignItems='flex-end'>
        {/* Cover Photo */}
        <Box>
          <Typography variant="h8">
            Cover Photo (optional)
          </Typography>
          <Box mt={1.5}>
            <UploadBox
            height='160px'
            width='160px'
            text=''
            bgcolor='grey.900'
            borderColor='background.paper'
            icon={UploadImageBrandIconSvg}
            />
          </Box>
        </Box>
        <FlexColumn gap={2.5}>
          <Typography lineHeight='1rem' width='450px' variant='h9' color='text.secondary'> Supported formats include PNG, JPG and JPEG. Recommended resolution of 1080x1080 pixels. </Typography>
          <Box mr='auto'>
            <SecondaryButton
            text='Upload photo'
            height='44px'
            />
          </Box>
        </FlexColumn>
      </Box>
      <Box display="flex" pb={2} gap={1.5}>
        <CancelButtonTransparent/>
        <PrimaryButton
          text='Create'
        />
      </Box>
     </Box>
    </Box>
  );
};

export default Tracking;