import React from 'react'
import { Stack, Flex, Heading, Text, Image } from '@chakra-ui/react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
export default function Hero({ slice }) {
  return (
    <Stack h={['163px', '283px', '283px', '368px']} w="100%">
      <Flex
        w="100%"
        h={['163px', '250px', '250px', '335px']}
        bgImage={`url(${slice.primary.backgroundImage.url})`}
        bgPosition={['100% 20%', '100% 20%', '100% 30%']}
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Flex
          justify={['center', 'space-between']}
          align="center"
          w="100%"
          mx="auto"
          px={['4', '10', '15', '20', '36']}
        >
          <Stack gap={3}>
            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading1: ({ children }) => (
                  <Heading
                    color="white.500"
                    fontWeight={500}
                    fontSize={['xl', '2xl', '4xl']}
                  >
                    {children}
                  </Heading>
                ),
              }}
            />

            <PrismicRichText
              field={slice.primary.text}
              components={{
                paragraph: ({ children }) => (
                  <Text
                    color="white.200"
                    fontSize={['0.8rem', 'xl']}
                    maxW={['100%', '100%', '100%', '550px']}
                  >
                    {children}
                  </Text>
                ),
              }}
            />
          </Stack>
          <Image
            w={['300px', '300px', '300px', '430px']}
            display={['none', 'none', 'block']}
            src={slice.primary.icone.url}
            alt={slice.primary.icone.alt}
            position="relative"
            transform="translateY(48px)"
            ml="8"
          />
        </Flex>
      </Flex>
    </Stack>
  )
}
