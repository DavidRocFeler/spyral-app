'use client'
import { Box, FormControlLabel, Radio, Typography, RadioGroup,  } from '@mui/material'
import { useState } from 'react'
import { ArrowDownSvg, HrsSvg, MinsSvg, MsSvg, PlusSvg, PorcentSvg } from '@/assets/icons'
import { mockCollaborateRegister } from '@/mock/collaborateFilesItem.mock'
import { ICardPerformingArtist, IFormData } from '@/types/song'
import { performingArtists } from '@/mock/performingArtis.mock'
import CustomTextField from '@/components/ui/CustomTextField'
import { FlexCenter } from '@/components/ui/FlexCenter'
import IconSpan from '@/components/ui/IconSpan'
import IconInput from '@/components/ui/IconInput'
import SelectCustom from '@/components/ui/SelectCustom'
import SelectionButton from '@/components/ui/SelectionButton'
import CardFileCollaborate from '@/components/songs/Collaborate/CardFileCollaborate'
import { FlexColumn } from '@/components/ui/FlexColumn'
import CardPerformingArtist from '@/components/ui/CardPerformingArtist'


const mockButtonsSelection = ['Evergreen Hits', 'Legendary Tracks', 'Enduring Classics'];

const FormRegisterSong = () => {
    const mockFileSelect = ['Select', 'Select', 'Select'];
    const [artists, setArtists] = useState<ICardPerformingArtist[]>([])
    const [artistIndex, setArtistIndex] = useState(0)
    const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
    const [formData, setFormData] = useState<IFormData>({
    title: '',
    composerYes: true,
    lyricistYes: true,
    musicLyricsYes: true,
    genreOfWork: 'Select',
    categories: ['Evergreen Hits', 'Legendary Tracks', 'Enduring Classics'],
    alternativeTitle: '',
    audioFile: 'audio_track.mp3',
    performingArtist: ''
  });

  const handleToggleButton = (buttonText: string) => {
    if (selectedButtons.includes(buttonText)) {
      // Si ya está seleccionado, lo removemos
      setSelectedButtons(selectedButtons.filter(btn => btn !== buttonText));
    } else {
      // Si no está seleccionado, lo agregamos
      setSelectedButtons([...selectedButtons, buttonText]);
    }
  };

  const handleAddArtist = () => {
    if (artistIndex < performingArtists.length) {
      // Agrega el siguiente artista del mock
      const nextArtist = performingArtists[artistIndex]
      setArtists([...artists, nextArtist])
      setArtistIndex(artistIndex + 1)
    } else {
      // Si ya se mostraron todos del mock, agrega uno genérico
      const newArtist: ICardPerformingArtist = {
        text: `New Artist ${artists.length + 1}`,
        // Puedes agregar una imagen por defecto si quieres
      }
      setArtists([...artists, newArtist])
    }
    
    // También actualiza el formData si es necesario
    setFormData({
      ...formData,
      performingArtist: artists.length > 0 ? 'Artists added' : ''
    })
  }

  const handleMinimizeClick = () => {
  };

  return (
      <Box sx={{ 
        bgcolor: 'background.default', 
        borderRadius: '24px', 
        p: 3,
      }}>
        {/* Dropdown superior */}
        <FlexCenter mb={2} sx={{width: '100%'}}>
            <Typography mr='auto' variant='h4'>Track data for BUMA</Typography>
            <Box ml='auto'>
                <IconSpan
                    borderRadius='8px'
                    icon={ArrowDownSvg}
                    onClick={handleMinimizeClick}
                />   
            </Box>
        </FlexCenter>

        {/* Title */}
        <Box sx={{ mb: 3 }}>
          <Typography variant='h8'>
            Title
          </Typography>
          <Box my={0.5}>
              <CustomTextField
              placeholder='Enter title'
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
          </Box>
          {formData.title.length < 1 && (
            <Typography color='error.main' variant='h9'>
              Write here your song or description
            </Typography>
          )}
        </Box>

        {/* Rights Section */}
        <Typography variant='h6'>
          Rights
        </Typography>

          {/* Componist */}
          <FlexCenter gap={2} sx={{ mb: 0, mt: 2 }}>
          <Typography variant='h8' color='text.secondary'>
              Componist
          </Typography>
          <RadioGroup 
              row 
              value={formData.composerYes ? 'yes' : 'no'}
              onChange={(e) => setFormData({...formData, composerYes: e.target.value === 'yes'})} 
          >
              <FormControlLabel
              value="yes" 
              control={
                  <Radio 
                  sx={{ 
                      color: formData.composerYes ? 'secondary.main' : 'grey.900',
                      '&.Mui-checked': { 
                      color: 'secondary.main' 
                      } 
                  }} 
                  />
              } 
              label={<Typography sx={{ color: '#fff', fontSize: '0.875rem' }}>Yes</Typography>}
              />
              <FormControlLabel 
              value="no" 
              control={
                  <Radio 
                  sx={{ 
                      color: !formData.composerYes ? 'error.main' : 'grey.900',
                      '&.Mui-checked': { 
                      color: 'error.main' 
                      } 
                  }} 
                  />
              } 
              label={<Typography sx={{ color: '#fff', fontSize: '0.875rem' }}>No</Typography>}
              />
          </RadioGroup>
          </FlexCenter>

          {/* Lyricist */}
          <FlexCenter gap={2} sx={{ mb: 0 }}>
          <Typography variant='h8' color='text.secondary'>
              Lyricist
          </Typography>
          <RadioGroup 
              row 
              value={formData.lyricistYes ? 'yes' : 'no'}  // ← OK
              onChange={(e) => setFormData({...formData, lyricistYes: e.target.value === 'yes'})} 
          >
              <FormControlLabel 
              value="yes" 
              control={
                  <Radio 
                  sx={{ 
                      color: formData.lyricistYes ? 'secondary.main' : 'grey.900',
                      '&.Mui-checked': { 
                      color: 'secondary.main' 
                      } 
                  }} 
                  />
              } 
              label={<Typography sx={{ color: '#fff', fontSize: '0.875rem' }}>Yes</Typography>}
              />
              <FormControlLabel 
              value="no" 
              control={
                  <Radio 
                  sx={{ 
                      color: !formData.lyricistYes ? 'error.main' : 'grey.900',
                      '&.Mui-checked': { 
                      color: 'error.main' 
                      } 
                  }} 
                  />
              } 
              label={<Typography sx={{ color: '#fff', fontSize: '0.875rem' }}>No</Typography>}
              />
          </RadioGroup>
          </FlexCenter>

        {/* Percentages */}
        <FlexCenter gap={2} sx={{ 
          mb: 1,
          width: 'fit-content' 
          }}>
          <Typography variant='h8' color='text.secondary'>
              Lyricist
          </Typography>
          <FlexCenter
          gap={1.5}
          sx={{
            width: 'fit-content',
          }}
          >
            <IconInput
              icon={PorcentSvg}
              bgcolor='grey.900'
              width='75px'
              placeholder='00'
              value={formData.lyricistPercent?.toString() || ''}
              onChange={(e) => setFormData({...formData, lyricistPercent: parseInt(e.target.value) || 0})}
              />
              <IconInput
              icon={PorcentSvg}
              bgcolor='grey.900'
              width='75px'
              placeholder='00'
              value={formData.composerPercent?.toString() || ''}
              onChange={(e) => setFormData({...formData, composerPercent: parseInt(e.target.value) || 0})}
              />
              {(!formData.lyricistPercent || !formData.composerPercent || 
                formData.lyricistPercent === 0 || formData.composerPercent === 0) && (
                <Typography width='fit-content' variant='h9' color='error.main'>
                    * Required field
                </Typography>
              )}
          </FlexCenter>
        </FlexCenter>

        {/* Music and Lyrics */}
      <FlexCenter gap={2} sx={{ mb: 1 }}>
      <Typography variant='h8' color='text.secondary'>
          Were the music and lyrics written for each other?
      </Typography>
      <RadioGroup 
          row 
          value={formData.musicLyricsYes ? 'yes' : 'no'}
          onChange={(e) => setFormData({...formData, musicLyricsYes: e.target.value === 'yes'})}
      >
          <FormControlLabel 
          value="yes" 
          control={
              <Radio 
              sx={{ 
                  color: formData.musicLyricsYes ? 'secondary.main' : 'grey.900',
                  '&.Mui-checked': { 
                  color: 'secondary.main' 
                  } 
              }} 
              />
          } 
          label={<Typography sx={{ color: '#fff', fontSize: '0.875rem' }}>Yes</Typography>}
          />
          <FormControlLabel 
          value="no" 
          control={
              <Radio 
              sx={{ 
                  color: !formData.musicLyricsYes ? 'error.main' : 'grey.900',
                  '&.Mui-checked': { 
                  color: 'error.main' 
                  } 
              }} 
              />
          } 
          label={<Typography sx={{ color: '#fff', fontSize: '0.875rem' }}>No</Typography>}
          />
      </RadioGroup>
      </FlexCenter>

        {/* Genre of the work */}
        <FlexCenter gap={1.5} sx={{ mb: 2 }}>
          <Typography variant='h8' color='text.secondary'>
            Genre of the work
          </Typography>
          <SelectCustom
            options={mockFileSelect}
            value={formData.genreOfWork}
            onChange={(value) => setFormData({...formData, genreOfWork: value})}
            fullWidth={false}
            height="31px"
            heightOption="31px"
            borderRadius="50px"
            bgcolor="background.paper"
          />
          {(formData.genreOfWork === 'Select' || !formData.genreOfWork) && (
            <Typography variant='h9' color='error.main'>
                * Required field
            </Typography>
          )}
        </FlexCenter>

        {/* Categories */}
        <Box sx={{ mb: 2 }}>
          <Typography variant='h8'color='text.secondary'>
            In what type of category can you place this work?
          </Typography>
          <FlexCenter gap={1.5} my={1.5}>
          {mockButtonsSelection.map((buttonText) => (
              <SelectionButton
              key={buttonText}
              text={buttonText}
              isSelected={selectedButtons.includes(buttonText)}
              onClick={() => handleToggleButton(buttonText)}
              />
          ))}
          <IconSpan icon={PlusSvg} />
          </FlexCenter>
          {formData.categories.length === 0 && (
            <Typography variant='h9' color='error.main'>
              Error: Please select at least one category
            </Typography>
          )}
        </Box>

        {/* Duration */}
        <FlexCenter gap={2} sx={{ mb: 2 }}>
          <Typography variant='h8' color='text.secondary'>
            Duration
          </Typography>
          <FlexCenter gap={1}>
            <IconInput
            icon={HrsSvg}
            placeholder='00'
            width='80px'
            bgcolor='grey.900'
            value={formData.durationHrs?.toString() || ''}
            onChange={(e) => setFormData({...formData, durationHrs: e.target.value})}
            />
            <Typography variant='h8'>
              :
            </Typography>
            <IconInput
            icon={MinsSvg}
            placeholder='00'
            width='92px'
            bgcolor='grey.900'
            value={formData.durationMins?.toString() || ''}
            onChange={(e) => setFormData({...formData, durationMins: e.target.value})}
            />
            <Typography variant='h8'>
              :
            </Typography>
            <IconInput
            icon={MsSvg}
            placeholder='00'
            width='78px'
            bgcolor='grey.900'
            value={formData.durationSec?.toString() || ''}
            onChange={(e) => setFormData({...formData, durationSec: e.target.value})}
            />
          </FlexCenter>
            {(!formData.durationHrs && !formData.durationMins && !formData.durationSec) && (
                <Typography variant='h9' color='error.main'>
                *Error: Please provide a valid duration for registration.
                </Typography>
            )}
        </FlexCenter>

        {/* Alternative Title */}
        <Box sx={{ mb: 2 }}>
          <Typography variant='h8'>
            Alternative Title
          </Typography>
          <Box my={1}>
            <CustomTextField
            placeholder='Enter alternative title'
            value={formData.alternativeTitle}
            onChange={(e) => setFormData({...formData, alternativeTitle: e.target.value})}
            />
          </Box>
          {formData.alternativeTitle.length < 1 && (
            <Typography variant='h9' color='error.main'>
              Alternative Title is required, please write to register
            </Typography>
          )}
        </Box>

        {/* Audio File */}
        <Box sx={{ mb: 3 }}>
          <Typography variant='h8'>
            Audio File
          </Typography>
          <Box width='249px' mt={1.5}>
              {mockCollaborateRegister.map((filesItem, index) => 
                  <CardFileCollaborate
                      key={filesItem.id || `file-${index}`}
                      file={filesItem}
                      iconSpan={false}
                  />
              )}
          </Box>
        </Box>

        {/* Performing Artist */}
        <FlexColumn gap={1.5} sx={{ alignItems: 'flex-start' }}>
        <Typography variant='h8'>
            Performing Artist
        </Typography>
        
        <FlexCenter gap={1}>
            {artists.map((artist, index) => (
            <CardPerformingArtist
                key={`artist-${index}`}
                text={artist.text}
                image={artist.image}
                alt={artist.alt}
                bgcolor={artist.bgcolor}
            />
            ))}
            
            <IconSpan 
            icon={PlusSvg} 
            onClick={handleAddArtist}
            />
        </FlexCenter>
        
        {artists.length === 0 && (
            <Typography variant='h9' color='error.main'>
            Please add a performing artist for registration
            </Typography>
        )}
        </FlexColumn>

      </Box>
  )
}

export default FormRegisterSong