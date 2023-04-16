import React from 'react'
import styled from 'styled-components'
import NewsCarousel from '../../components/NewsCarousel'
import Slider from '../../components/Slider'
import Value from '../../components/Value'
import { sliderItems, values } from '../../data'

const HomeContainer = styled.div``
const HomeContent = styled.div`
  padding: 0 20px;
`
const ValuesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const SectionTitle = styled.h2`
  margin: 1rem 0;
`

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <Slider sliderItems={sliderItems} />
      <HomeContent>
      <NewsCarousel />
      <SectionTitle>Notre mission</SectionTitle>
      <p>
        Notre mission est de fournir une éducation de qualité basée sur les valeurs et les
        enseignements islamiques, tout en offrant un programme académique complet conforme aux
        normes éducatives nationales.
      </p>
      <SectionTitle>Nos valeurs</SectionTitle>
      <ValuesContainer>
        {values.map(value => <Value key={value.id} {...value} />)}
      </ValuesContainer>
      <SectionTitle>Activités parascolaires</SectionTitle>
      <p>
        En plus du programme académique, nous offrons également une gamme d'activités
        parascolaires pour encourager le développement personnel et social de nos élèves, y
        compris des clubs, des sports, des événements culturels et religieux, et plus encore.
      </p>
      <SectionTitle>Admission</SectionTitle>
      <p>
        Pour en savoir plus sur le processus d'admission et comment rejoindre notre communauté
        éducative, veuillez consulter notre page d'admission.
      </p>
      </HomeContent>
    </HomeContainer>
  )
}

export default Home
