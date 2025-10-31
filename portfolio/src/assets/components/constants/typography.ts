import type { TypographyVariantsOptions } from '@mui/material';
import { customColors } from './colors';

export const typography: TypographyVariantsOptions = {
  fontFamily: '"Segoe UI", "Tahoma", "Geneva", "Verdana", sans-serif',

  h1: {
    fontWeight: 700,
    fontSize: '3.5rem',
    lineHeight: 1.2,
  },
  h2: {
    fontWeight: 700,
    fontSize: '2.625rem',
    lineHeight: 1.3,
    color:customColors.primary
  },
  h3: {
    fontWeight: 700,
    fontSize: '1.75rem',
    lineHeight: 1.4,
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
  },

  overline: {
    fontWeight: 600,
    fontSize: '0.75rem',
    lineHeight: 1.5,
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
};
