import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    yellow: {
      '900': '#FFBA08',
      '500': 'rgba(255, 185, 8, 0.5)',
    },

    white: {
      '900': '#FFFFFF',
      '500': '#F5F8FA',
      '200': '#DADADA',
    },

    gray: {
      '900': '#45585B',
      '200': 'rgba(28, 20, 1, 0.35)',
      '100': 'rgba(28, 20, 1, 0.35)',
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
        color: 'gray.900',
        maxWidth: '1440px',
      },

      '.swiper-button-prev.swiper-button-disabled': {
        color: 'yellow.500',
        opacity: 1,
      },

      '.swiper-button-next,.swiper-button-prev': {
        color: 'yellow.900',
        opacity: 1,
        padding: '15px 22.5px',
      },

      '.swiper-button-next:after,.swiper-button-prev:after': {
        fontSize: 30,
        padding: '42.5px',

        '@media (max-width: 767px)': {
          padding: '32px',
          fontSize: 16,
        },
      },

      '.swiper-pagination-bullet.swiper-pagination-bullet-active': {
        background: 'yellow.900',
        opacity: 1,
        width: '16px',
        height: '16px',

        '@media (max-width: 767px)': {
          width: '8px',
          height: '8px',
        },
      },

      '.swiper-pagination-bullet': {
        background: 'gray.90',
        width: '16px',
        height: '16px',

        '@media (max-width: 767px)': {
          width: '8px',
          height: '8px',
        },
      },
    },
  },
})
