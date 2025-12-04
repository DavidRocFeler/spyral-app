'use client'
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Typography,
  Button,
  IconButton,
  RadioGroup,
  FormControlLabel,
  Radio,
  Chip,
} from '@mui/material';
import { CopyLinkSvg, CheckIconSvg, SearchIconSvg, ContactListSvg, CloseSvg } from '@/assets/icons';
import CustomTextField from '@/components/ui/CustomTextField';
import SecondaryButtonGrey from '@/components/ui/SecondaryButtonGrey';
import { secondaryButtonsArray } from '@/mock/secondaryButtons.mock';
import Image, { StaticImageData } from 'next/image';
import EthanCarter from "@/assets/UserLian.png"
import OliviaJhonson from "@/assets/UserOlivia.png"
import LianSmith from "@/assets/UserLian.png"
import SophiaBrown from "@/assets/UserAva.png"
import MasonDavis from "@/assets/UserMason.png"
import AvaWilson from "@/assets/UserAva.png"

interface Contact {
  id: string;
  name: string;
  email: string;
  avatar: StaticImageData;
}

interface CardSharePlayListProps {
  open: boolean;
  onClose: () => void;
}

// Mock data - ajusta las rutas según tu estructura
const contactsMock: Contact[] = [
  {
    id: '1',
    name: 'Ethan Carter',
    email: 'ethan.carter@example.com',
    avatar: EthanCarter,
  },
  {
    id: '2',
    name: 'Olivia Johnson',
    email: 'olivia.johnson@example.com',
    avatar: OliviaJhonson,
  },
  {
    id: '3',
    name: 'Liam Smith',
    email: 'liam.smith@example.com',
    avatar: LianSmith,
  },
  {
    id: '4',
    name: 'Sophia Brown',
    email: 'sophia.brown@example.com',
    avatar: SophiaBrown,
  },
  {
    id: '5',
    name: 'Mason Davis',
    email: 'mason.davis@example.com',
    avatar: MasonDavis,
  },
  {
    id: '6',
    name: 'Ava Wilson',
    email: 'ava.wilson@example.com',
    avatar: AvaWilson,
  },
];

const CardSharePlayList: React.FC<CardSharePlayListProps> = ({ open, onClose }) => {
  const [message, setMessage] = useState('');
  const [playbackOption, setPlaybackOption] = useState('stream');
  const [allowDownloads, setAllowDownloads] = useState(true);
  const [search, setSearch] = useState('');
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
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      PaperProps={{
        sx: {
          pt: 2,
          bgcolor: 'background.default',
          borderRadius: '40px',
          height: '575px'
        },
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
            <Box width='100%' display='flex' gap={2}>
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

              <SecondaryButtonGrey 
                text={secondaryButtonsArray[3].text} 
                icon={secondaryButtonsArray[3].icon} 
                onClick={secondaryButtonsArray[3].onClick}
                width='auto'
                borderRadius='12px'
                justifyContent='none'
              />
            </Box>
          </RadioGroup>
        </Box>

        <Box mt={3}>
          <Box display='flex' alignItems='center' justifyContent='space-between' mb={2}>
            <Typography variant="h8">
              Contacts
            </Typography>
            <Box display='flex' gap={1}>
              <IconButton sx={{ width: 32, height: 32, bgcolor: 'grey.900', borderRadius: '8px' }}>
                <SearchIconSvg />
              </IconButton>
              <IconButton sx={{ width: 32, height: 32, bgcolor: 'grey.900', borderRadius: '8px' }}>
                <ContactListSvg />
                <Typography variant="h8" ml={0.5}>Contact list</Typography>
              </IconButton>
            </Box>
          </Box>

          <Box display='flex' gap={1.5} mb={2} flexWrap='wrap'>
            {contactsMock.map((contact) => (
              <Box 
                key={contact.id}
                onClick={() => handleContactClick(contact.id)}
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
                    width: 56,
                    height: 56,
                  }}
                >
                  <Image
                    src={contact.avatar}
                    alt={contact.name}
                    width={56}
                    height={56}
                    style={{
                      borderRadius: '50%',
                      border: selectedContacts.includes(contact.id) ? '2px solid' : 'none',
                      borderColor: selectedContacts.includes(contact.id) ? 'secondary.main' : 'transparent',
                    }}
                  />
                  {selectedContacts.includes(contact.id) && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -4,
                        right: -4,
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        bgcolor: 'secondary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <CheckIconSvg />
                    </Box>
                  )}
                </Box>
                <Typography variant="h8" textAlign='center' sx={{ maxWidth: 60, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {contact.name.split(' ')[0]}
                </Typography>
              </Box>
            ))}
          </Box>

          <Typography variant="h8" mb={1}>
            Add new recipient
          </Typography>
          
          <Box display='flex' flexWrap='wrap' gap={1} mb={1.5}>
            {emailChips.map((email) => (
              <Chip
                key={email}
                label={<Typography variant="h8">{email}</Typography>}
                onDelete={() => handleDeleteChip(email)}
                deleteIcon={<CloseSvg />}
                sx={{
                  bgcolor: 'grey.900',
                  borderRadius: '8px',
                  height: '32px',
                }}
              />
            ))}
          </Box>

          <CustomTextField
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="olivia.johnson@gmail.com"
            height="44px"
            alignItems="center"
          />

          <Box display='flex' mt={1} gap={1}>
            <SecondaryButtonGrey 
              text={secondaryButtonsArray[4].text} 
              icon={secondaryButtonsArray[4].icon} 
              onClick={handleAddEmail}
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

        <Box display="flex" mt={3} justifyContent="flex-end" gap={3}>
          <Button onClick={onClose}>
            <Typography sx={{textTransform: 'none', color: 'text.primary'}} variant="h8">Cancel</Typography>
          </Button>
          <SecondaryButtonGrey 
            text={secondaryButtonsArray[2].text} 
            icon={secondaryButtonsArray[2].icon} 
            onClick={secondaryButtonsArray[2].onClick}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CardSharePlayList;