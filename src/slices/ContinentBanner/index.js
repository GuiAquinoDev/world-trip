import React from 'react'
import { Flex, Text, VStack, Box } from '@chakra-ui/react'

/**
 * @typedef {import("@prismicio/client").Content.ContinentBannerSlice} ContinentBannerSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContinentBannerSlice>} ContinentBannerProps
 * @param { ContinentBannerProps }
 */
export default function ContinentBanner({ slice }) {
  return (
    <Box
      as={'section'}
      h={['9.375rem', '21.875rem', '31.25rem']}
      w="100%"
      bgImage={`url(${slice.primary.bannerContinent.url} )`}
      backgroundRepeat={'no-repeat'}
      backgroundPosition={['center', 'left']}
      backgroundSize={'cover'}
    >
      <VStack
        width="100%"
        height="100%"
        justify={'center'}
        bgGradient={'linear(to-r, gray.100, gray.200 )'}
      >
        <Flex
          width="100%"
          height="100%"
          justify={['center', 'flex-end']}
          align={['center', 'flex-start']}
          flexDirection="column"
          py={['0', '3.688rem']}
          px={['0', '8.75rem']}
        >
          <Text
            color={'white.900'}
            fontSize={['1.75rem', '3rem']}
            fontWeight={600}
          >
            {slice.primary.continent}
          </Text>
        </Flex>
      </VStack>
    </Box>
  )
}
