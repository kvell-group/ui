const breakPoints = {
  'mantine-breakpoint-xs': '36em',
  'mantine-breakpoint-sm': '48em',
  'mantine-breakpoint-md': '62em',
  'mantine-breakpoint-lg': '75em',
  'mantine-breakpoint-xl': '88em',
}


module.exports = {
  plugins: [
    require('postcss-simple-vars')({
      variables: {
      ...breakPoints
    },
    }), 
    require('autoprefixer'), 
    require('postcss-preset-mantine')
  ], 
}