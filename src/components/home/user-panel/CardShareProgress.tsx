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
} from '@mui/material';
import { CopyLinkSvg, CheckIconSvg } from '@/assets/icons';
import { FlexColumn } from '@/components/ui/FlexColumn';
import CustomTextField from '@/components/ui/CustomTextField';
import SecondaryButtonGrey from '@/components/ui/SecondaryButtonGrey';
import { secondaryButtonsArray } from '@/mock/secondaryButtons.mock';

interface CardShareProgressProps {
  open: boolean;
  onClose: () => void;
}

const CardShareProgress: React.FC<CardShareProgressProps> = ({ open, onClose }) => {
  const [message, setMessage] = useState('');
  const [playbackOption, setPlaybackOption] = useState('stream');
  const [email, setEmail] = useState('');

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
        overflowY: 'hidden'
      }}
      >
        <Box mb={1}>
          <Typography mb={1} variant="h8">
            Playback options
          </Typography>
          <RadioGroup
            sx={{
              mt: 1
            }}
            value={playbackOption}
            onChange={(e) => setPlaybackOption(e.target.value)}
            row
          >
            <Box width='100%'display='flex'>
              <Box display='flex' width='50%'>
                <FormControlLabel
                  value="stream"
                  control={
                    <Radio
                      icon={<Box sx={{ width: 20, height: 20, borderRadius: '6px',}} />}
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
                  value="file"
                  control={
                    <Radio
                      disabled // ← Esto deshabilita el Radio
                      icon={<Box sx={{ width: 20, height: 20 }} />}
                      checkedIcon={<CheckIconSvg />}
                    />
                  }
                  label={<Typography color='text.secondary' variant="h8">File format</Typography>}
                />
              </Box>
              <SecondaryButtonGrey 
              text={secondaryButtonsArray[3].text} 
              icon={secondaryButtonsArray[3].icon} 
              onClick={secondaryButtonsArray[3].onClick}
              width='60%'
              borderRadius='12px'
              justifyContent='none'
              />
            </Box>
          </RadioGroup>
        </Box>

        <Box mt={3}>
          <FlexColumn 
          sx={{
            alignItems: 'start'
          }}
          >
            <Typography variant="h8" mb={1}>
              Contacts
            </Typography>
            <Typography variant="h7" color="text.secondary" mb={2.5}>
              No saved contacts yet. Enter an email address to share your file
            </Typography>
          </FlexColumn>

          <Typography variant="h8">
            Add new recipient
          </Typography>
          <Box mt={0.7} display="flex" gap={1}>
            <CustomTextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              height="44px"
              alignItems="center"
            />
            <SecondaryButtonGrey 
            text={secondaryButtonsArray[4].text} 
            icon={secondaryButtonsArray[4].icon} 
            onClick={secondaryButtonsArray[4].onClick}
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

export default CardShareProgress;