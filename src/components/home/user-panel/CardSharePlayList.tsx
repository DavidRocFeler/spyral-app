'use client'
import { useState } from 'react';
import { ArrowRightSvg } from "@/assets/icons"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
  IconButton,
  RadioGroup,
  FormControlLabel,
  Radio,
  Chip,
  Backdrop,
} from '@mui/material';
import { CopyLinkSvg, CheckIconSvg, CloseSvg, SearchWhiteIconSvg } from '@/assets/icons';
import CustomTextField from '@/components/ui/CustomTextField';
import SecondaryButtonGrey from '@/components/ui/SecondaryButtonGrey';
import { secondaryButtonsArray } from '@/mock/secondaryButtons.mock';
import SearchBar from '@/components/ui/SearchBar';
import PrimaryButton from '@/components/ui/PrimaryButton';
import CancelButtonTransparent from '@/components/ui/CancelButtonTransparent';
import ContactSelector from '@/components/ui/ContactSelector';
import { contactsMock } from '@/mock/cardSharePlayList.mock';

export interface CardSharePlayListProps {
  open: boolean;
  onClose: () => void;
}

const CardSharePlayList = ({ open, onClose }: CardSharePlayListProps) => {
  const [message, setMessage] = useState('');
  const [playbackOption, setPlaybackOption] = useState('stream');
  const [allowDownloads, setAllowDownloads] = useState(true);
  // const [search, setSearch] = useState('');
  const [selectedContacts, setSelectedContacts] = useState<string[]>([]);
  const [emailChips, setEmailChips] = useState<string[]>(['emily.jones@example.com', 'sophia.brown@gmail.com']);
  const [newEmail, setNewEmail] = useState('');

  const handleContactClick = (contactId: string) => {
    setSelectedContacts(prev => 
      prev.includes(contactId) 
        ? prev.filter(id => id !== contactId)
        : [...prev, contactId]
    );
  };

  const handleDeleteChip = (email: string) => {
    setEmailChips(prev => prev.filter(e => e !== email));
  };

  const handleAddEmail = () => {
    if (newEmail.trim() && !emailChips.includes(newEmail.trim())) {
      setEmailChips(prev => [...prev, newEmail.trim()]);
      setNewEmail('');
    }
  };

  return (
    <>
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: 7,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}
        open={open}
        onClick={onClose}
      />
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        slotProps={{
          paper: {
            sx: {
              pt: 2,
              bgcolor: 'background.default',
              borderRadius: '40px',
              height: '575px',
              position: 'relative',
            }
          }
        }}
      >
        <DialogTitle>
          <Box display="flex" alignItems="center" mb={1}>
            <Typography variant="h3">Share "Whispers Of The Night"</Typography>
            <IconButton sx={{ color: 'secondary.main', ml: 'auto' }}>
              <CopyLinkSvg />
              <Typography variant="h8" color="secondary.main" ml={1}>
                Copy link
              </Typography>
            </IconButton>
          </Box>
          <Typography variant="h7" color='text.secondary'>
            Send your playlist directly via email or select an existing contact.
          </Typography>
        </DialogTitle>

        <DialogContent
          sx={{
            overflowY: 'auto'
          }}
        >
          <Box mb={1}>
            <Typography mb={1} variant="h8">
              Playback options
            </Typography>
            <RadioGroup
              sx={{ mt: 1 }}
              value={playbackOption}
              onChange={(e) => setPlaybackOption(e.target.value)}
              row
            >
              <Box width='100%' display='flex' gap={0}>
                <FormControlLabel
                  value="stream"
                  control={
                    <Radio
                      icon={<Box sx={{ width: 20, height: 20, borderRadius: '6px' }} />}
                      checkedIcon={
                        <Box 
                          sx={{ 
                            width: 20, 
                            height: 20, 
                            borderRadius: '6px',
                            bgcolor: 'secondary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <CheckIconSvg />
                        </Box>
                      }
                    />
                  }
                  label={<Typography ml={0} variant="h8">Stream only</Typography>}
                />
                
                <FormControlLabel
                  value="downloads"
                  sx={{
                    ml: 0.5
                  }}
                  control={
                    <Radio
                      checked={allowDownloads}
                      onChange={(e) => setAllowDownloads(e.target.checked)}
                      icon={<Box sx={{ width: 20, height: 20, borderRadius: '6px' }} />}
                      checkedIcon={
                        <Box 
                          sx={{ 
                            width: 20, 
                            height: 20, 
                            borderRadius: '6px',
                            bgcolor: 'secondary.main',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <CheckIconSvg />
                        </Box>
                      }
                    />
                  }
                  label={<Typography variant="h8">Allow Downloads</Typography>}
                />

                <Box ml='auto' width='45%'display='flex' alignItems='center'>
                  <Typography variant="h8">File format</Typography>

                  <SecondaryButtonGrey 
                  text={secondaryButtonsArray[5].text} 
                  icon={secondaryButtonsArray[5].icon} 
                  onClick={secondaryButtonsArray[5].onClick}
                  width='159px'
                  borderRadius='12px'
                  justifyContent='none'
                  ml='auto'
                  color='text.primary'
                  />
                </Box>
              </Box>
            </RadioGroup>
          </Box>

          <Box mt={3}>
            <Box display='flex' flexDirection='column' alignItems='start' justifyContent='space-between' mb={2}>
              <Typography mb={1.2} variant="h8">
                Contacts
              </Typography>
                <Box width='100%' display='flex'>
                  <SearchBar
                  placeholder='Search'
                  icon={SearchWhiteIconSvg}
                  width='380px'
                  bgcolor='grey.900'
                  borderRadius='12px'
                  />
                <SecondaryButtonGrey 
                  text={secondaryButtonsArray[6].text} 
                  icon={secondaryButtonsArray[6].icon} 
                  onClick={secondaryButtonsArray[6].onClick}
                  width='fit-content'
                  borderRadius='50px'
                  ml='auto'
                  mlicon='0'
                  color='text.primary'
                  px={3}
                  />
              </Box>
            </Box>

            <Box width='fit-content' display="flex" gap={3.5} mb={3}>
              {contactsMock.map((contact) => (
                <ContactSelector
                  key={contact.id}
                  contact={contact}
                  isSelected={selectedContacts.includes(contact.id)}
                  onContactClick={handleContactClick}
                  avatarSize={64}
                  checkmarkSize={20}
                  nameWidth="85px"
                  color="text.secondary"
                />
              ))}
            </Box>

            <Typography variant="h8">
              Add new recipient
            </Typography>
            
            <Box display='flex' flexWrap='wrap' gap={1} mt={0.8} mb={1}>
              {emailChips.map((email) => (
                <Chip
                  key={email}
                  label={<Typography variant="h8">{email}</Typography>}
                  onDelete={() => handleDeleteChip(email)}
                  deleteIcon={<CloseSvg/>}
                  sx={{
                    bgcolor: 'background.paper',
                    borderRadius: '50px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.8,
                    pr: 1.2,
                    pl: 0.2
                  }}
                />
              ))}
            </Box>

            <Box display='flex' mt={1} gap={1}>
              <CustomTextField
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="olivia.johnson@gmail.com"
                height="44px"
                alignItems="center"
              />
              <SecondaryButtonGrey 
                text={secondaryButtonsArray[7].text} 
                icon={secondaryButtonsArray[7].icon} 
                onClick={handleAddEmail}
                color='grey.50'
              />
            </Box>
          </Box>

          <Box display='flex' flexDirection='column' mt={3} gap={1.5}>
            <Typography variant="h8">
              Message (Optional)
            </Typography>
            <CustomTextField
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Add a message"
              height="80px"
              alignItems="flex-start"
              multiline
              rows={3}
            />
            
          </Box>

          <Box display="flex" mt={1} justifyContent="flex-end" gap={1.5}>
            <CancelButtonTransparent/>
            <PrimaryButton
            icon={ArrowRightSvg}
            text='Send (4)'
            />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CardSharePlayList;