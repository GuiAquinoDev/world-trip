import React from 'react'
import {
  Stack,
  Heading,
  Text,
  Image,
  Box,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param { HeroProps }
 */
export default function Hero({ slice }) {
  return (
    <Box
      as={'section'}
      px={['1.75rem']}
      py={['1.75rem', '5rem']}
      bgImage={`url(${slice.primary.backgroundImage.url})`}
      bgRepeat={'no-repeat'}
    >
      <Box
        as={'div'}
        mx={'auto'}
        width="100%"
        maxW={'72.5rem'}
        maxH={['23rem', '18.263rem']}
      >
        <Grid
          gridAutoFlow={['dense column']}
          templateColumns={['1fr 0', '1fr 0', '1fr', 'repeat(2, minmax(1fr,0)']}
          justifyContent={'space-between'}
        >
          <GridItem
            maxW={'32.75rem'}
            gridColumn={slice.primary.iconSide === 'Right' ? 1 : 2}
          >
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
            <Stack mt={'1.813rem'}>
              <PrismicRichText
                field={slice.primary.text}
                components={{
                  paragraph: ({ children }) => (
                    <Text color="white.200" fontSize={['0.8rem', 'xl']}>
                      {children}
                    </Text>
                  ),
                }}
              />
            </Stack>
          </GridItem>
          <GridItem
            gridColumn={slice.primary.iconSide === 'Right' ? 2 : 1}
            gridRow={1}
            maxW={'26.072rem'}
            w={'100%'}
          >
            <Image src={slice.primary.icon.url} alt={slice.primary.icon.alt} />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  )
}
