'use client'
import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FlexCenter = styled(Box)<BoxProps>({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width:'fit-content' 
});