// FilesPanel.tsx
'use client'
import React, { useState } from 'react';
import { Box, Typography, Select, MenuItem, IconButton, TextField, Button } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import ShareIcon from '@mui/icons-material/Share';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import AddIcon from '@mui/icons-material/Add';
import SelectCustom from '@/components/ui/SelectCustom';
import { ArrowLineGreySvg, PlusSvg, ShareIconSvg, SongIconBrandSvg } from '@/assets/icons';
import { FlexCenter } from '@/components/ui/FlexCenter';
import { FlexColumn } from '@/components/ui/FlexColumn';
import SecondaryButton from '@/components/ui/SecondaryButton';
import IconSpan from '@/components/ui/IconSpan';
import TextButton from '@/components/ui/TextButton';
import NumberCounter from '@/components/ui/NumberCounter';
import CustomTextField from '@/components/ui/CustomTextField';
import SecondaryButtonGrey from '@/components/ui/SecondaryButtonGrey';
import BoxTextField from '@/components/ui/BoxTextField';

interface FileItem {
  id: string;
  name: string;
  size: string;
  type: string;
}

const mockFiles: FileItem[] = [
  { id: '1', name: 'audio_track.mp3', size: 'MP3 • 3.2MB', type: 'audio' },
];

const mockChannels = ['Acoustic drums (12 files)', 'Channel', 'Electric Guitar', 'Bass Line'];

const FilesPanel = () => {
  const [selectedChannel, setSelectedChannel] = useState(mockChannels[0]);

  return (
    <Box sx={{
      bgcolor: 'background.default', 
      borderRadius: '24px', 
      px: 2.5, 
      pt: 3,
      pb: 2.5,
      height: '100%' 
      }}
      >
      <Typography variant='h3'>
        Files
      </Typography>

      <SelectCustom
      options={mockChannels}
      value={selectedChannel}
      onChange={setSelectedChannel}
      />
      
      {mockFiles.map((file) => (
        <Box
          key={file.id}
          sx={{
            bgcolor: 'grey.900',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: '16px',
            height: '56px',
            width: '248px',
            p: 1.5,
            pr: 1,
            mb: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <FlexCenter borderRadius='12px' px={1.2} py={1} bgcolor='background.paper'><SongIconBrandSvg/></FlexCenter>
            <Box display='flex' flexDirection='column' alignItems='flex-start' gap={1}>
              <Typography variant='h8'>
                {file.name}
              </Typography>
              <Typography variant='h9' color='text.secondary'>
                {file.size}
              </Typography>
            </Box>
          </Box>
          <FlexCenter>
            <IconSpan
            icon={ShareIconSvg}
            bgcolor='transparent'
            />
          </FlexCenter>
        </Box>
      ))}
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant='h9' color='text.secondary' 
        sx={{
          cursor: 'default'
        }}
        >
          Viewing 1 of 1 files
        </Typography>
        <FlexCenter gap={1.5}>
          <TextButton
          text='Back'
          />
          <NumberCounter
          counter={1}
          />
          <TextButton
          text='Next'
          />
        </FlexCenter>
      </Box>
      
      <Typography variant='h8'>
        Share file
      </Typography>

      <BoxTextField
      IconSvg={PlusSvg}/>
    </Box>
  );
};

export default FilesPanel;