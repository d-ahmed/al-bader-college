import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { SliderProps } from './types'

const Container = styled.div`
  width: 100%;
  // height: 70vh;
  display: flex;
  position: relative;
  overflow: hidden;
`

const Arrow = styled.div<{ direction: string }>`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: felx;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${({ direction }) => direction === 'left' && '10px'};
  right: ${({ direction }) => direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`

const Wrapper = styled.div<{ slideIndex: number }>`
  height: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${({ slideIndex }) => slideIndex * -100}vw);
`

const Slide = styled.div`
  width: 100vw;
  // height: 70vh;
  display: flex;
  align-items: center;
`

const Slider: React.FC<SliderProps> = ({ sliderItems }) => {
  const [slideIndex, setSlideIndex] = useState<number>(0)

  const handleArrowClick = (direction: string) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1)
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
      {sliderItems.length > 1 && (
        <Arrow direction='left' onClick={() => handleArrowClick('left')}>
          <ArrowLeftOutlined />
        </Arrow>
      )}
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(item => (
          <Slide key={item.id}>{item.content}</Slide>
        ))}
      </Wrapper>
      {sliderItems.length > 1 && (
        <Arrow direction='right' onClick={() => handleArrowClick('right')}>
          <ArrowRightOutlined />
        </Arrow>
      )}
    </Container>
  )
}

export default Slider
