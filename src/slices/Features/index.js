import React from 'react'
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
    <Box as={'section'} px={['1.75rem']} py={['2.25rem', '5rem']}>
      <Box as={'div'} mx={'auto'} width="100%" maxW={'72.5rem'}>
        <Grid
          templateColumns={[
            'repeat(2, minmax(0, 1fr))',
            'repeat(2, minmax(0, 1fr))',
            'repeat(5, minmax(0, 1fr))',
          ]}
          w="100%"
          flexWrap="wrap"
          gridGap={'1rem'}
        >
          {slice.items.map((item, i) => (
            <Flex
              alignItems={'center'}
              justifyContent={'flex-start'}
              key={i}
              flexDirection={['row', 'column']}
              gap={'0.5rem'}
              px={['1rem', 0]}
            >
              {isMobile ? (
                <Stack>
                  <Image
                    src={item.featureIcon.url}
                    alt={item.featureIcon.alt}
                    maxW={'5.313rem'}
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
                textAlign={'center'}
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
