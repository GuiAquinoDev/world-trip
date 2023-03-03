import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { PrismicRichText } from '@prismicio/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper'
import { Box, Flex, VStack, Heading, Text } from '@chakra-ui/react'

import Link from 'next/link'
/**
 * @typedef {import("@prismicio/client").Content.SliderSlice} SliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SliderSlice>} SliderProps
 * @param { SliderProps }
 */
export default function Slider({ slice }) {
  return (
    <Box as={'section'} px={[0, 0, '1.75rem']} paddingBottom={[6, 10]}>
      <Box as={'div'} mx={'auto'} width="100%" maxW={'77.5rem'}>
        {
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
            }}
            scrollbar={{ draggable: true }}
          >
            {slice.items.map((item) => (
              <SwiperSlide key={item.continentId}>
                <Link href={`/${item.continentId}`}>
                  <Flex
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundImage={`url(${item.banner.url})`}
                    height={[250, 350, 450]}
                    w="100%"
                    align="center"
                    justify="center"
                  >
                    <VStack
                      width="100%"
                      height="100%"
                      justify={'center'}
                      bgGradient={'linear(to-r, gray.100, gray.200 )'}
                    >
                      <Flex
                        width="100%"
                        direction="column"
                        gap={[3, 4]}
                        align="center"
                      >
                        <Heading
                          color="white.900"
                          fontWeight={700}
                          fontSize={['1.5rem', '2.5rem', '3rem']}
                        >
                          {item.continent}
                        </Heading>
                        <PrismicRichText
                          field={item.description}
                          components={{
                            paragraph: ({ children }) => (
                              <Text
                                color="white.200"
                                fontWeight={700}
                                fontSize={['0.875rem', '1rem', '1.5rem']}
                              >
                                {children}
                              </Text>
                            ),
                          }}
                        />
                      </Flex>
                    </VStack>
                  </Flex>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        }
      </Box>
    </Box>
  )
}
