import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { Grid, GridItem, Text, Box, Icon, VStack } from '@chakra-ui/react'
import { CiCircleInfo } from 'react-icons/ci'

/**
 * @typedef {import("@prismicio/client").Content.ContinentContentSlice} ContinentContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContinentContentSlice>} ContinentContentProps
 * @param {ContinentContentProps}
 */
export default function ContinentContent({ slice }) {
  return (
    <Box as="section" px={['1rem']} py={['1.5rem', '5rem']}>
      <Box maxWidth="72.5rem" margin="auto">
        <Grid
          gridTemplateColumns={['1fr', '1fr', 'repeat(2, minmax(1fr, 1fr ))']}
          gridAutoFlow={['column', 'dense column']}
          width="100%"
          gridGap={['4.375rem']}
        >
          <GridItem maxWidth={['100%', '37.5rem']}>
            <PrismicRichText
              field={slice.primary.continentBio}
              components={{
                paragraph: ({ children }) => (
                  <Text fontSize={['14px', '24px']} textAlign="justify">
                    {children}
                  </Text>
                ),
              }}
            />
          </GridItem>
          <Box
            maxWidth={['100%', '30.625rem']}
            display={['none', 'none', 'flex']}
            flexDirection="row"
            alignItems="center"
            gap={'2.625rem'}
            width={'100%'}
            height={'100%'}
          >
            {slice.items.map((item, index) => (
              <VStack key={index}>
                <Text
                  fontWeight={600}
                  fontSize={['24px', '48px']}
                  color="yellow.900"
                >
                  {item.numberItem}
                </Text>
                <Box display="flex" alignItems="center">
                  <Text fontWeight={[400, 600]} fontSize={['18px', '24px']}>
                    {item.continentItem}
                  </Text>
                  {item.hasinfo && (
                    <Icon
                      as={CiCircleInfo}
                      boxSize={4}
                      color="gray.80"
                      marginLeft={'5px'}
                    />
                  )}
                </Box>
              </VStack>
            ))}
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}
