import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { Box, Heading, Text } from '@chakra-ui/react'
import { CallProps } from '@/@types/types'

export default function CallToAction({ slice }: CallProps) {
  return (
    <Box as={'section'} px={['1.75rem']} py={['2.25rem', '3.25rem']}>
      <Box
        as={'div'}
        mx={'auto'}
        width="100%"
        maxW={'52.438rem'}
        textAlign={'center'}
      >
        <PrismicRichText
          field={slice.primary.callToActionText}
          components={{
            heading2: ({ children }) => (
              <Heading as="h2" fontWeight={500} fontSize={['lg', '3xl', '4xl']}>
                {children}
              </Heading>
            ),
            paragraph: ({ children }) => (
              <Text fontSize={['0.8rem', 'xl']}>{children}</Text>
            ),
          }}
        />
      </Box>
    </Box>
  )
}
