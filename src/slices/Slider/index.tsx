import React from 'react'
import { Box } from '@chakra-ui/react'
import { SliderProps } from '@/@types/types'
import { SwiperSlider } from '@/components/SwiperSlider'

export default function Slider({ slice, ...props }: SliderProps) {
  return (
    <Box as={'section'} px={[0, 0, '1.75rem']} paddingBottom={[6, 10]}>
      <Box as={'div'} mx={'auto'} width="100%" maxW={'77.5rem'}>
        <SwiperSlider slice={slice} {...props} />
      </Box>
    </Box>
  )
}
