'use client'
import { Box, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface IFlexColumnProps extends BoxProps {
  customAlign?: string;
}

export const FlexColumn = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'customAlign',
})<IFlexColumnProps>(({ customAlign = 'center' }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: customAlign,
  justifyContent: 'center',
  width: 'fit-content'
}));