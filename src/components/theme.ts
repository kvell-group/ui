import { colorsTuple, MantineThemeOverride } from '@mantine/core'

// ----------------------------------------------------------------------

export const theme: MantineThemeOverride = {
  focusRing: 'never',
  scale: 1, //default value
  fontSmoothing: true, //default value
  // white: 'ffffff',
  black: '#14151a',
  colors: {
    primary: colorsTuple('#14151a'),
    secondary: colorsTuple('#ffffff'),
    tertiary: colorsTuple('#0a0f290a'),
  },

  primaryShade: 6, // { light: 6, dark: 8 } default mantine by theme
  primaryColor: 'primary',
  /* variantColorResolver: ({ color, variant, gradient, theme }) => {
    if (variant === 'primary') {
      return {
        background: 'var(--mantine-color-red-9)',
        hover: 'var(--mantine-color-red-8)',
        color: 'var(--mantine-color-white)',
        border: 'none',
      }
    }

    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    }
  }, //color by variant */
  autoContrast: false, //default value
  luminanceThreshold: 0.3, //default value
  fontFamily: 'Inter, sans-serif',
  /* headings: {
    fontFamily: 'Inter',
    fontWeight: '600',
    textWrap: 'wrap', // 'nowrap', 'balance', 'pretty', 'stable',
    sizes: {
      h1: { fontSize: '24px', fontWeight: '600', lineHeight: '1.3' }, //{ fontSize: string; fontWeight?: string; lineHeight: string; }
      //..
    },
  }, */
  radius: {
    xl: '12px',
    // xs: '6px', sm: '8px', md: '12px', lg: '16px',
  }, //!!!TODO sync with blank
  defaultRadius: 'sm',
  spacing: {
    //blank variables
    'body-s': ' -0.20000000298023224px',
    'caption-l': '-0.10000000149011612px;',
    //mantine variables !!!TODO sync with mantine
    // xs: '6px', sm: '8px', md: '12px', lg: '16px', xl: '18px'
  }, //for example
  fontSizes: {
    //blank variables
    'body-s-medium': '16px',
    'caption-l': '14px',
    // mantine variables !!!TODO sync with mantine
    xs: '6px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '18px',
  }, //for example
  lineHeights: {
    //blank variables
    'body-s': '24px',
    'caption-l': '20px',
    // mantine variables !!!TODO sync with mantine
    // xs: '6px', sm: '8px', md: '12px', lg: '16px', xl: '18px'
  }, //for example
  // breakpoints: { xs: '6px', sm: '8px', md: '12px', lg: '16px', xl: '18px' }, //for example !!!TODO sync with mantine
  shadows: {
    //same name for mantine and
    xs: '0px 1px 2px 0px #14151A0D',
    // sm: '1px 1px 3px rgba(0, 0, 0, .25)',
    // md: '1px 1px 3px rgba(0, 0, 0, .25)',
    // lg: '1px 1px 3px rgba(0, 0, 0, .25)',
    // xl: '1px 1px 3px rgba(0, 0, 0, .25)',
  }, //for example
  respectReducedMotion: false, //default
  cursorType: 'default',
  defaultGradient: { from: 'black', to: 'yellow', deg: 25 }, //for example
  // activeClassName: 'class-name', //for example
  // focusClassName: 'class-name', //for example
  /*  components: {
    Title: Title.extend({
      classNames: { root: 'classnames' },
      styles: {},
      vars: { order: 5 },
      defaultProps: {},
    }), //for example
  }, */
  other: {
    // any additional vars
    /* usage:
    import { createStyles } from '@mantine/core';
  
    const useStyles = createStyles((theme) => ({
      customBox: {
        padding: theme.other.customSpacing,
        backgroundColor: theme.other.brandColor,
      },
    }));
  
    function MyComponent() {
      const { classes } = useStyles();
  
      return <div className={classes.customBox}>Hello Mantine</div>;
    }
      
    // theme-override.d.ts
    import '@mantine/core';
  
    declare module '@mantine/core' {
      export interface MantineThemeOther {
        customSpacing: string;
        brandColor: string;
      }
    }*/
  },
}
