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

const CardPlayList: React.FC = () => {
  const [email, setEmail] = useState('olivia.johnson@gmail.com');
  const [searchQuery, setSearchQuery] = useState('Olivia');
  const [showOliviaProfile, setShowOliviaProfile] = useState(true);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setShowOliviaProfile(false); // Ocultar perfil cuando se modifica el email
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowOliviaProfile(false); // Ocultar perfil cuando se modifica la búsqueda
  };

  const handleAdd = () => {
    // Lógica para agregar contacto
    console.log('Adding contact:', email);
  };

  const handleSubmit = () => {
    // Lógica para enviar
    console.log('Submitting...');
  };

  return (
    <Modal
      open={true} // Siempre abierto para maquetación
      onClose={() => {}} // No hace nada por ahora
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay con opacity 0.5
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
        {/* Header */}
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

        {/* Email Input con botón Add */}
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
            <Typography variant='h8' sx={{textTransform: 'none'}}> Add </Typography>
            <Box display='flex' alignItems='center' justifyContent='center'>
              <PlusSvg/>
            </Box>
          </Button>
        </Box>

        {/* Texto separador */}
        <Typography
          variant='h8'
        >
          Or check if your contacts are already on Spyral
        </Typography>

        {/* Search Input con lupa */}
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

        {/* Perfil de Olivia - Solo se muestra si showOliviaProfile es true */}
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
              <Typography mb={-0.2} variant='h10' color='text.secondary'> Olivia</Typography>
              <Typography variant='h10' color='text.secondary'> Jhonson</Typography>
            </FlexColumn>
          </FlexColumn>
        )}

        {/* Botones de acción en la parte inferior derecha */}
        <Box
          sx={{
            mt: 1,
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2,
          }}
        >
          {/* Botón Cancel (izquierda) */}
          <Button
            disableRipple
            variant="primaryButton"
            sx={{
              bgcolor: 'transparent',
              '&:hover': {
                bgcolor: 'transparent'
              },
            }}
          >
            <Typography variant='h8'>Cancel</Typography>
          </Button>

          {/* Botón Add con flecha (derecha - primaryButton) */}
          <Button
            disableRipple
            variant="primaryButton"
            onClick={handleSubmit}
          >
            <Typography 
              variant='h8'
              color='primary.main'
              sx={{
                textTransform: 'none'
              }}
            > Add </Typography>
            <FlexCenter>
              <ArrowRightSvg/>
            </FlexCenter>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CardPlayList;