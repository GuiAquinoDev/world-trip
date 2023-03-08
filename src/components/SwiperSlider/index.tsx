import { SliderProps } from '@/@types/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { SwiperSliderItem } from './SwiperSliderItem'

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
          <SwiperSliderItem item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
