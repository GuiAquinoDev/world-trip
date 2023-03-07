import type { Content } from '@prismicio/client'
import type { SliceComponentProps } from '@prismicio/react'

// Home Types
export type HeaderProps = SliceComponentProps<Content.HeaderSlice>
export type HeroProps = SliceComponentProps<Content.HeroSlice>
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>
export type SeparatorProps = SliceComponentProps<Content.SeparatorSlice>
export type CallProps = SliceComponentProps<Content.CallToActionSlice>
export type SliderProps = SliceComponentProps<Content.SliderSlice>

// Continents Types
export type ContinentBannerProps =
  SliceComponentProps<Content.ContinentBannerSlice>
export type CitiesProps = SliceComponentProps<Content.CitiesSlice>
export type ContinentProps = SliceComponentProps<Content.ContinentContentSlice>
