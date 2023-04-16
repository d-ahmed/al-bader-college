import { ReactNode } from 'react'

export type SlideItem = {
  id: number
  content: ReactNode
}

export interface SliderProps {
  sliderItems: SlideItem[]
}
