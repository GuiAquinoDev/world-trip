import React from 'react'
import { Flex, Image } from '@chakra-ui/react'

/**
 * @typedef {import("@prismicio/client").Content.HeaderSlice} HeaderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeaderSlice>} HeaderProps
 * @param { HeaderProps }
 */
export default function Header({ slice }) {
  return (
    <Flex as="header" w="100%" align="center" justify="center">
      <Image
        py={['15', '27']}
        src={slice.primary.logo.url}
        alt={slice.primary.logo.alt}
      />
    </Flex>
  )
}
