'use client';

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  TextField, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  Select, 
  MenuItem, 
  IconButton,
  Chip,
  FormControl
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import SecondaryButton from '@/components/ui/SecondaryButton';
import CustomTextField from '@/components/ui/CustomTextField';
import { FlexCenter } from '@/components/ui/FlexCenter';
import IconInput from '../../ui/IconInput';
import { HrsSvg, MinsSvg, MsSvg, PlusSvg, PorcentSvg } from '@/assets/icons';
import SelectCustom from '../../ui/SelectCustom';
import { mockCollaborateFilesItemEmpty, mockCollaborateRegister } from '@/mock/collaborateFilesItem.mock';
import CardFileCollaborate from '../Collaborate/CardFileCollaborate';
import IconSpan from '../../ui/IconSpan';
import SelectionButton from '../../ui/SelectionButton';
import { FlexColumn } from '../../ui/FlexColumn';
import FormRegisterSong from './FormRegisterSong';

const menuItems = [
  { text: 'BUMA Data', bgcolor: 'background.default'},
  { text: 'Personal Info', bgcolor: 'transparent'}
];

const RegisterSong = () => {
    const mockFileSelect = ['Select', 'Select', 'Select'];
    const [selectedMenu, setSelectedMenu] = useState<string>('BUMA Data');
   

  const handleAddCategory = () => {
    // Lógica para agregar categoría
    console.log('Add category');
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      pt: 0,
      borderTop: 'solid 1px',
      borderColor: 'grey.900'
    }}>
      {/* Sidebar izquierdo */}
      <Box sx={{ 
        width: '200px', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 3,
        px: 0,
        borderRight: '1px solid',
        borderColor: 'grey.900'
      }}>
        {menuItems.map((item, index) => (
          <Box key={index} sx={{ mb: 1 }}>
            <SecondaryButton 
              text={item.text}
              width='160px'
              height='43px'
              justifyContent='start'
              pl={2.5}
              bgcolor={item.bgcolor}
              onClick={() => setSelectedMenu(item.text)}
            />
          </Box>
        ))}
      </Box>

      {/* Formulario principal */}
      <Box sx={{ 
        flex: 1, 
        pt: 3,
        px: 3,
      }}>
        <FormRegisterSong/>
      </Box>
    </Box>
  );
};

export default RegisterSong;