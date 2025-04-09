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
    white: colorsTuple('#ffffff'),
  },
  primaryShade: 6, // { light: 6, dark: 8 } by theme
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
  radius: { xs: '6px', sm: '8px', md: '12px', lg: '16px', xl: '18px' }, //!!!TODO sync with blank
  defaultRadius: 'sm',
  // spacing: { xs: '6px', sm: '8px', md: '12px', lg: '16px', xl: '18px' }, //for example
  // fontSizes: { xs: '6px', sm: '8px', md: '12px', lg: '16px', xl: '18px' }, //for example
  // lineHeights: { xs: '6px', sm: '8px', md: '12px', lg: '16px', xl: '18px' }, //for example
  // breakpoints: { xs: '6px', sm: '8px', md: '12px', lg: '16px', xl: '18px' }, //for example
  /* shadows: {
    xs: '1px 1px 3px rgba(0, 0, 0, .25)',
    sm: '1px 1px 3px rgba(0, 0, 0, .25)',
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    lg: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '1px 1px 3px rgba(0, 0, 0, .25)',
  }, //for example */
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
  },
}
