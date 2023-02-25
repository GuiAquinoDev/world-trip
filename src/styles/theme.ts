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

  styles: {
    global: {
      body: {
        bg: 'white',
        maxWidth: '1440px',
      },
    },
  },
})
