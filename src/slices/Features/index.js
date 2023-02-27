import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import {
  Box,
  Grid,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  Stack,
} from '@chakra-ui/react'

/**
 * @typedef {import("@prismicio/client").Content.FeaturesSlice} FeaturesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FeaturesSlice>} FeaturesProps
 * @param { FeaturesProps }
 */
export default function Features({ slice }) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  })

  return (
    <Box as={'section'} px={['1.75rem']} py={'2.25rem'}>
      <Box as={'div'} mx={'auto'} width="100%" maxW={'1160px'}>
        <Grid
          templateColumns={[
            'repeat(2, minmax(0, 1fr))',
            'repeat(5, minmax(0, 1fr))',
          ]}
          w="100%"
          flexWrap="wrap"
          alignItems={'center'}
        >
          {slice.items.map((item, i) => (
            <Flex
              justifyContent="center"
              gap={['2', '4', '24px']}
              flexDirection={['row', 'column']}
              align="center"
              key={i}
            >
              {isMobile ? (
                <Stack maxW={'5.313rem'}>
                  <Image
                    src={item.featureIcon.url}
                    alt={item.featureIcon.alt}
                  />
                </Stack>
              ) : (
                <Text color="yellow.400" fontSize="4xl">
                  •
                </Text>
              )}
              <Text
                color="gray.900"
                fontWeight={[500, 600]}
                fontSize={['md', 'xl', '2xl']}
              >
                {item.text}
              </Text>
            </Flex>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
