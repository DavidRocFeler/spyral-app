// theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariantsOptions {
    h7?: React.CSSProperties;
    h8?: React.CSSProperties;
    h9?: React.CSSProperties;
    h10?: React.CSSProperties;
    h11?: React.CSSProperties;
    h12?: React.CSSProperties;
    h13?: React.CSSProperties;
    body3?: React.CSSProperties;
  }
  
  interface BreakpointOverrides {
    xxs: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h7: true;
    h8: true;
    h9: true;
    h10: true;
    h11: true;
    h12: true;
    h13: true;
    body3: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primaryButton: true;
    secondaryButton: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldProps {
    customVariant?: 'darkRounded';
  }
}

declare module '@mui/material/Box' {
  interface BoxProps {
    variant?: 'flex-center';
  }
}

declare module 'react' {
  interface CSSProperties {
    '@media (max-width:899px)'?: CSSProperties;
    '@media (max-width:599px)'?: CSSProperties;
    '@media (max-width:1199px)'?: CSSProperties;
  }
}