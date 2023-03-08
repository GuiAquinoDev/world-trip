import Link from 'next/link'
import { SliderProps } from '@/@types/types'
import { Flex, VStack, Heading, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function SwiperSlider({ slice }: SliderProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
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
                justify="center"
                bgGradient="linear(to-r, gray.100, gray.200 )"
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
                  <Text
                    color="white.300"
                    fontWeight={700}
                    fontSize={['0.875rem', '1rem', '1.5rem']}
                  >
                    {item.description}
                  </Text>
                </Flex>
              </VStack>
            </Flex>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
