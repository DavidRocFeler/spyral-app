'use client'
import { useState } from 'react';
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
  Backdrop,
  Checkbox,
} from '@mui/material';
import { CopyLinkSvg, CheckIconSvg } from '@/assets/icons';
import { FlexColumn } from '@/components/ui/FlexColumn';
import CustomTextField from '@/components/ui/CustomTextField';
import SecondaryButtonGrey from '@/components/ui/SecondaryButtonGrey';
import { secondaryButtonsArray } from '@/mock/secondaryButtons.mock';
import SelectCustom from '@/components/ui/SelectCustom';
import { FlexCenter } from '@/components/ui/FlexCenter';

export interface ICardShareProgressProps {
  open: boolean;
  onClose: () => void;
  variant?: 'withDownloads' | 'withoutDownloads';
  textFirst?: string
  textSecond?: string
}

const CardShareProgress = ({ 
  open, 
  onClose, 
  variant = 'withoutDownloads',
  textFirst = 'Whispers Of The Night',
  textSecond = 'playlist'
}: ICardShareProgressProps ) => {
  const mockFileSelect = ['MP3', 'MP3', 'MP3', 'MP3'];
  const [selectedChannel, setSelectedChannel] = useState(mockFileSelect[0]);
  const [message, setMessage] = useState('');
  const [playbackOption, setPlaybackOption] = useState('stream');
  const [email, setEmail] = useState('');
  const [allowDownloads, setAllowDownloads] = useState(false);

  const selectCustomWidth = variant === 'withDownloads' ? '159px' : '310px';
  
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
            <Typography variant="h3">Share "{textFirst}"</Typography>
            <IconButton sx={{ color: 'secondary.main', ml: 'auto' }}>
              <CopyLinkSvg />
              <Typography variant="h8" color="secondary.main" ml={1}>
                Copy link
              </Typography>
            </IconButton>
          </Box>
          <Typography variant="h7" color='text.secondary'>
            Send your {textSecond} directly via email or select an existing contact.
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
              sx={{
                mt: 1
              }}
              value={playbackOption}
              onChange={(e) => setPlaybackOption(e.target.value)}
              row
            >
              <Box width='100%'display='flex'>
                <Box display='flex' gap={2} width='fit-content'>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={playbackOption === 'stream'}
                      onChange={(e) => setPlaybackOption(e.target.checked ? 'stream' : '')}
                      icon={
                        <Box 
                          sx={{ 
                            width: 20, 
                            height: 20, 
                            borderRadius: '6px',
                            border: '1px solid',
                            borderColor: 'secondary.main'
                          }} 
                        />
                      }
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
                
                {/* Mostrar checkbox "Allow Downloads" solo en la variante 'withDownloads' */}
                {variant === 'withDownloads' && (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={allowDownloads}
                        onChange={(e) => setAllowDownloads(e.target.checked)}
                        icon={
                          <Box 
                            sx={{ 
                              width: 20, 
                              height: 20, 
                              borderRadius: '6px',
                              border: '1px solid',
                              borderColor: 'secondary.main'
                            }} 
                          />
                        }
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
                    label={<Typography ml={0} variant="h8">Allow Downloads</Typography>}
                  />
                )}
                </Box>
                
                <FlexCenter
                ml='auto'
                sx={{
                  width: 'fit-content'
                }}
                >
                <Typography width='85px' variant='h8' color='text.secondary'> File format </Typography>

                <Box ml='auto'>
                <SelectCustom
                mode='grey'
                options={mockFileSelect}
                value={selectedChannel}
                onChange={setSelectedChannel}
                width={selectCustomWidth}
                />
                </Box>
                </FlexCenter>
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
    </>
  );
};

export default CardShareProgress;