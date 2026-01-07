'use client';

import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material';

import { ArrowRightSvg, PlusSvg, SearchIconSvg } from '@/assets/icons';
import { FlexCenter } from '../ui/FlexCenter';
import OliviaProfile from '@/assets/oliviaJhonsonProfile.png'
import Image from 'next/image';
import { FlexColumn } from '../ui/FlexColumn';
import CancelButtonTransparent from '../ui/CancelButtonTransparent';

export interface IModalAddPlayListProps {
  open: boolean;
  onClose: () => void;
  initialSearch?: string;
  initialEmail?: string;
}

const ModalAddContact = ({
  open,
  onClose,
  initialSearch = 'Olivia',
  initialEmail = 'olivia.johnson@gmail.com'
}: IModalAddPlayListProps) => {
  const [email, setEmail] = useState(initialEmail);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [showOliviaProfile, setShowOliviaProfile] = useState(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setShowOliviaProfile(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowOliviaProfile(false); 
  };

  const handleAdd = () => {
    console.log('Adding contact:', email);
    // add contact
  };

  const handleSubmit = () => {
    console.log('Submitting...', email, searchQuery);
    // send 
    onClose(); 
  };

  const handleCancel = () => {
    onClose(); 
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          bgcolor: '#1a1a1a',
          borderRadius: '40px',
          width: '90%',
          maxWidth: '640px',
          p: 4,
          outline: 'none',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'white',
            fontSize: '1.5rem',
            fontWeight: 600,
            mb: 3,
          }}
        >
          Add Contacts
        </Typography>

        <Box sx={{ display: 'flex', gap: 1.5, mb: 3 }}>
          <TextField
            fullWidth
            value={email}
            onChange={handleEmailChange}
            placeholder="olivia.rhye@gmail.com"
            variant="outlined"
            className="dark-rounded"
          />
          <Button
            disableRipple
            variant='secondaryButton'
            onClick={handleAdd}
          >
            <Typography variant='body1' sx={{textTransform: 'none'}}> Add </Typography>
            <Box display='flex' alignItems='center' justifyContent='center'>
              <PlusSvg/>
            </Box>
          </Button>
        </Box>

        <Typography variant='body1'>
          Or check if your contacts are already on Spyral
        </Typography>

        <TextField
          fullWidth
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search"
          variant="outlined"
          className="dark-rounded"
          sx={{
            mt: 1
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <FlexCenter
                    sx={{
                      '& svg path': {
                        fill: '#FFF', 
                      },
                    }}
                  >
                    <SearchIconSvg/>
                  </FlexCenter>
                </InputAdornment>
              ),
            },
          }}
        />

        {showOliviaProfile && (
          <FlexColumn
            sx={{mt: 2}}
          >
            <Image
              src={OliviaProfile}
              alt='Olivia Profile'
              width={64}
              height={64}
              style={{
                marginBottom: 10
              }}
            />
            <FlexColumn>
              <Typography mb={-0.2} variant='body2' color='text.secondary'> Olivia</Typography>
              <Typography variant='body2' color='text.secondary'> Jhonson</Typography>
            </FlexColumn>
          </FlexColumn>
        )}

        <Box
          sx={{
            mt: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2,
          }}
        >
          <CancelButtonTransparent onClick={handleCancel} />
          
          <Button
            disableRipple
            variant="primaryButton"
            onClick={handleSubmit}
          >
            <Typography 
              variant='body1'
              color='primary.main'
              sx={{
                textTransform: 'none'
              }}
            > 
              Add 
            </Typography>
            
            <FlexCenter>
              <ArrowRightSvg/>
            </FlexCenter>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalAddContact;