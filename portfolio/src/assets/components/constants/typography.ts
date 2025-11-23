import type { TypographyVariantsOptions } from '@mui/material';
import { goldMain, textPrimary, textSecondary, textTertiary } from './themes/colors';


export const typography: TypographyVariantsOptions = {
  fontFamily: '"Segoe UI", "Tahoma", "Geneva", "Verdana", sans-serif',

  h1: {
    fontWeight: 700,
    fontSize: '3.5rem',
    lineHeight: 1.2,
    color:goldMain
  },
  h2: {
    fontWeight: 700,
    fontSize: '2.625rem',
    lineHeight: 1.3,
color:goldMain
  },
  h3: {
    fontWeight: 700,
    fontSize: '1.75rem',
    lineHeight: 1.4,
    color:textPrimary
  },
  h4: {
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: 1.4,
  },
  h5: {
    fontWeight: 600,
    fontSize: '1.125rem',
    lineHeight: 1.5,
  },
  h6: {
    fontWeight: 700,
    fontSize: '0.875',
    lineHeight: 1.5,
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },

  body1: {
    fontWeight: 400,
    fontSize: '1.125rem',
    lineHeight: 1.6,
    color:textPrimary
  },
  body2: {
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.6,
  },

  subtitle1: {
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1.6,
    color:textSecondary
  },
  subtitle2: {
    fontWeight: 600,
    fontSize: '0.875',
    lineHeight: 1.6,
  },

  button: {
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1.5,
    letterSpacing: '0.5px',
 
  },

  caption: {
    fontWeight: 400,
    fontSize: '0.875red',
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
