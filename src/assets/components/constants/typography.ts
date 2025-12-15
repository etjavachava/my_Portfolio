import type { TypographyVariantsOptions } from '@mui/material';
import { goldMain, textPrimary, textSecondary, textTertiary } from './themes/colors';


export const typography: TypographyVariantsOptions = {
  fontFamily: '"Segoe UI", "Tahoma", "Geneva", "Verdana", sans-serif',

  h1: {
    fontWeight: 700,
    fontSize: '2.5rem',
    lineHeight: 1.2,
    color:goldMain,
        '@media (min-width:600px)': {
      fontSize: '3.5rem',
    },
    
  },
  h2: {
    fontWeight: 700,
    fontSize: '2rem',
    lineHeight: 1.3,
    color:goldMain,
    '@media (min-width:600px)': {
      fontSize: '2.625rem',
    },
  },
  h3: {
    fontWeight: 700,
    fontSize: '1.5rem',
    lineHeight: 1.4,
    color:textPrimary,
          '@media (min-width:600px)': {
        fontSize: '1.75rem',
      },
  },
  h4: {
    fontWeight: 600,
    fontSize: '1.25rem',
    lineHeight: 1.4,
       '@media (min-width:600px)': {
      fontSize: '1.5rem',
    },
  },
  h5: {
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1.5,
    '@media (min-width:600px)': {
      fontSize: '1.125rem',
    },
  },
  h6: {
    fontWeight: 700,
    fontSize: '0.875rem',
    lineHeight: 1.5,
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },

  body1: {
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.6,
    color:textPrimary,
    '@media (min-width:600px)': {
      fontSize: '1.125rem',
    },
  },
  body2: {
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.6,
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
  },

  subtitle1: {
    fontWeight: 600,
    fontSize: '0.875rem',
    lineHeight: 1.6,
    color:textSecondary,
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
  },
  subtitle2: {
    fontWeight: 600,
    fontSize: '0.875rem',
    lineHeight: 1.6,
  },

  button: {
    fontWeight: 800,
    fontSize: '0.875rem',
    lineHeight: 1.5,
    letterSpacing: '0.5px',
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
  },

  caption: {
    fontWeight: 400,
    fontSize: '0.875rem',
    lineHeight: 1.6,
    color:textTertiary,
  },

  overline: {
    fontWeight: 600,
    fontSize: '0.75rem',
    lineHeight: 1.5,
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
};

