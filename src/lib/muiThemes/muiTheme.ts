import { muiComponents } from './themes/muiComponentsTheme';
import { muiTypography } from './themes/muiTypographyTheme';

import React from 'react';
import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Typography {
    blockQuotes: React.CSSProperties;
    capitalized: React.CSSProperties;
    small: React.CSSProperties;
    tiny: React.CSSProperties;
  }
  interface TypographyOptions {
    blockQuotes: React.CSSProperties;
    capitalized: React.CSSProperties;
    small: React.CSSProperties;
    tiny: React.CSSProperties;
  }

  interface TypographyVariants {
    blockQuotes: React.CSSProperties;
    capitalized: React.CSSProperties;
    small: React.CSSProperties;
    tiny: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    blockQuotes: React.CSSProperties;
    capitalized: React.CSSProperties;
    small: React.CSSProperties;
    tiny: React.CSSProperties;
  }
  interface TypographyPropsVariantOverrides {
    blockQuotes: true;
    capitalized: true;
    small: true;
    tiny: true;
  }
  interface PaletteOptions {
    alternativeColors: {
      black: string;
      white: string;
      mainLighter: string;
      defaultBackgroundColor: string;
      customBackgroundColor: string;
      tableRowGray: string;
      tableRowHover: string;
      tableRowEvenSelected: string;
    };
  }
}

export const muiTheme = createTheme({
  typography: muiTypography,

  components: muiComponents.components,
});
