import React from 'react'
import { Flex, Image, Box } from '@chakra-ui/react'
import Link from 'next/link'

/**
 * @typedef {import("@prismicio/client").Content.HeaderSlice} HeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderSlice>} HeaderProps
 * @param { HeaderProps }
 */
export default function Header({ slice }) {
  return (
    <Flex
      as="header"
      w="100%"
      align="center"
      justify="center"
      py={['15', '27']}
    >
      <Link href={'/'}>
        <Box maxW={'100%'}>
          <Image
            w={['5rem', '11.5rem']}
            src={slice.primary.logo.url}
            alt={slice.primary.logo.alt}
          />
        </Box>
      </Link>
    </Flex>
  )
}
