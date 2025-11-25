// breakpoints.ts
import { BreakpointsOptions } from '@mui/material/styles';

export const breakpoints: BreakpointsOptions = {
  values: {
    xs: 0,      
    sm: 600,    
    md: 900,    
    lg: 1200,  
    xl: 1536,   

    // Mobile optimizations
    xxs: 450,   // Breakpoint for better performance on mobile 
  },
};

export default breakpoints;