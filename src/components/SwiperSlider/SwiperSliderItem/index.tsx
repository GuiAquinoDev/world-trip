import Link from 'next/link'
import { Flex, VStack, Heading, Text } from '@chakra-ui/react'

export function SwiperSliderItem({ item }: any) {
  return (
    <Link href={`/${item.continentId}`}>
      <Flex
        backgroundImage={`url(${item.banner.url})`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height={['250px', '350px', '450px']}
        width="100%"
        align="center"
        justify="center"
        _hover={{ cursor: 'pointer' }}
      >
        <VStack
          width="100%"
          height="100%"
          justify="center"
          bgGradient="linear(to-r, gray.100, gray.200 )"
        >
          <Flex direction="column" gap={[3, 4]} align="center">
            <Heading
              fontSize={['1.5rem', '2.5rem', '3rem']}
              fontWeight={700}
              color="white"
            >
              {item.continent}
            </Heading>
            <Text
              fontSize={['0.875rem', '1rem', '1.5rem']}
              fontWeight={700}
              color="whiteAlpha.800"
              textAlign="center"
              maxWidth={'46.7rem'}
            >
              {item.description}
            </Text>
          </Flex>
        </VStack>
      </Flex>
    </Link>
  )
}
