import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    white: {
      '900': '#FFFFFF',
      '500': '#F5F8FA',
      '200': '#DADADA',
    },
  },

  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },

  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '7.5xl': '5rem',
    '8xl': '6rem',
    '9xl': '8rem',
    '10xl': '8.75rem',
    '1xxl': '72.5rem',
    '2xxl': '90rem',
  },

  styles: {
    global: {
      body: {
        bg: 'white',
        maxWidth: '1440px',
      },
    },
  },
})
