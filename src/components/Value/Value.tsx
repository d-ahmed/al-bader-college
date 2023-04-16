import React from 'react'
import styled from 'styled-components'
import { Value } from './types';

const ValueCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
`
const ValueImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;
  
const Divider = styled.span`
  border-bottom: 1px solid #c4506a;
  width: 90%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const ValueTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
`

const ValueDescription = styled.p`
  font-size: 0.9rem;
  text-align: center;
`;

const ValueItem = ({ imageSrc, title, description }: Value) => {
  return (
    <ValueCard>
        <ValueImage src={imageSrc}/>
        <Divider />
        <ValueTitle>{title}</ValueTitle>
        <ValueDescription>{description}</ValueDescription>
    </ValueCard>
  )
}

export default ValueItem
