'use client'
// components/shared/FlexCenter.tsx
import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FlexColumn = styled(Box)<BoxProps>({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content'
});