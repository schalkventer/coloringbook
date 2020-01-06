import * as types from './types';

const COLORS = {
  grey: {
    dark: '#424242',
    medium: '#737373',
    light: '#AAAAAA',
    background: '#e0e0e0',
  },
  blue: {
    dark: '#2185d0',
    medium: '#5299d0',
    light: '#A2CAE8',
    background: '#f2faff',
  },
};

const SPACING = {
  none: '0',
  tiny: '2px',
  small: '8px',
  standard: '16px',
  large: '32px',
  huge: '150px',
};

const EDGES = {
  subtle: '2px',
  visible: '4px',
  circle: '50%',
};

const TYPOGRAPHY = {
  fonts: {
    roboto: 'Roboto, Arial, Helvetica, sans-serif',
    verdana: 'Verdana, Geneva, sans-serif',
    storybook:
      '"Nunito Sans",-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif;',
  },
  sizes: {
    tiny: '9px',
    small: '14px',
    standard: '16px',
    large: '20px',
    huge: '36px',
  },
  weights: {
    standard: 400,
    semibold: 500,
    black: 900,
  },
  lineHeights: {
    small: '1.25rem',
    standard: '1.5rem',
    large: '2.25rem',
  },
};

const ANIMATIONS = {
  pop: [
    { transform: 'translateY(50px)', opacity: 0 },
    { transform: 'translateY(0px)', opacity: 1, height: 'auto' },
  ],
  fade: [
    { opacity: 0, height: 0 },
    { opacity: 1, height: 1 },
  ],
};

const LINE_HEIGHTS = {};

export { COLORS, SPACING, EDGES, TYPOGRAPHY, ANIMATIONS, LINE_HEIGHTS, types };
