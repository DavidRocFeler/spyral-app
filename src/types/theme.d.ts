// theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h7: React.CSSProperties;
    h8: React.CSSProperties;
    h9: React.CSSProperties;
    h10: React.CSSProperties;
    h11: React.CSSProperties;
    h12: React.CSSProperties;
    h13: React.CSSProperties;
    body3: React.CSSProperties;
  }

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
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxs: true;
  }

  interface Palette {
    brand: {
      trash: string;
    };
  }

  interface PaletteOptions {
    brand?: {
      trash?: string;
    };
  }

  // Extender Components para permitir MuiBox
  interface ComponentNameToClassKey {
    MuiBox: 'root';
  }

  interface ComponentsPropsList {
    MuiBox: Partial<React.ComponentProps<typeof import('@mui/material').Box>>;
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

  interface ButtonPropsColorOverrides {
    brand: true;
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldProps {
    customVariant?: 'darkRounded';
  }
}

declare module '@mui/material/Box' {
  interface BoxPropsVariantOverrides {
    'customScrollbar': true;
    'flex-center': true;
  }
}