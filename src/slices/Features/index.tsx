import React from 'react'
import {
  Box,
  Grid,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  Stack,
  Icon,
} from '@chakra-ui/react'
import { FeaturesProps } from '@/@types/types'

export default function Features({ slice }: FeaturesProps) {
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
                  <Icon
                    as={Image}
                    fontSize={85}
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
