import React from 'react'
import { Box, Heading, Grid, Flex, Text, Image, Icon } from '@chakra-ui/react'
import { CitiesProps } from '@/@types/types'

export default function Cities({ slice }: CitiesProps) {
  return (
    <Box as="section" px={['1rem']}>
      <Box maxWidth="72.5rem" margin="auto">
        <Heading fontSize={'36px'} fontWeight={500}>
          {slice.primary.title}
        </Heading>

        <Grid
          gridTemplateColumns={['1fr', 'repeat(auto-fill, minmax(16rem, 1fr))']}
          width={'100%'}
          my={'2.5rem'}
          gridGap={'2.813rem'}
        >
          {slice.items.map((item, i) => (
            <Box maxW={'16rem'} key={i} mt={'40px'} mx={'auto'}>
              <Image
                src={item.cityImage.url!}
                alt={item.cityImage.alt!}
                borderTopRadius={'4px'}
              />
              <Flex
                width={'100%'}
                flexDirection={['row']}
                alignItems={'center'}
                padding={'1.125rem 1.5rem 1.563rem 1.5rem'}
                border="1px"
                borderRadius={'4px'}
                borderColor="yellow.300"
                borderTop="0"
              >
                <Flex flexDirection={'column'} gap={'0.75rem'} flex={1}>
                  <Heading
                    fontSize={'1.25rem'}
                    fontWeight={600}
                    fontFamily={'Barlow'}
                  >
                    {item.cityName}
                  </Heading>
                  <Text
                    fontSize={'1rem'}
                    fontWeight={500}
                    color={'white.200'}
                    fontFamily={'Barlow'}
                  >
                    {item.stateName}
                  </Text>
                </Flex>
                <Box margin={'auto'}>
                  <Icon
                    as={Image}
                    fontSize={30}
                    src={item.stateFlag.url}
                    alt={item.stateFlag.alt}
                  />
                </Box>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
