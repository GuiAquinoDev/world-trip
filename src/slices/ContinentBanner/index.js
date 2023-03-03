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
      h={['150px', '350px', '31.25rem']}
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
          py={['0', '59px']}
          px={['0', '140px']}
        >
          <Text color="white" fontSize={['28px', '48px']} fontWeight={600}>
            {slice.primary.continent}
          </Text>
        </Flex>
      </VStack>
    </Box>
  )
}
