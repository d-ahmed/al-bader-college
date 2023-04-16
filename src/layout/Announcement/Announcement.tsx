import { Facebook, Instagram } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  height: 30px;
`

const PronoteLabel = styled.p``

const PronoteContainer = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  svg,
  ${Image} {
    margin-right: 0.2rem;
  }
  height: 100%;
  width: 10em;
  background-color: #68032f;
  color: white;
  cursor: pointer;
`

const LeftContainer = styled.div`
  flex: 1;
  height: 100%;
`
const CenterContainer = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`
const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 1rem;
`

const SocialMedia = styled.a`
  cursor: pointer;
  margin: 0 0.5rem;
  color: white;
  text-decoration: none;
`

const Container = styled.div`
  height: 40px;
  background-color: #a2064b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 1167px) {
    ${CenterContainer} {
      display: none;
    }
  }
`

const Announcement: React.FC = () => {
  return (
    <Container>
      <LeftContainer>
        <PronoteContainer href='http://80.124.123.154/pronote'>
          <Image src='https://i.pinimg.com/originals/08/a0/ca/08a0cad800d5748ce370fe64b1f368d6.png' />
          <PronoteLabel>Pronote</PronoteLabel>
        </PronoteContainer>
      </LeftContainer>
      {/* <CenterContainer>
        <LabelContainer>
          <Place /> 136, Bd. Seattle 44000 Nantes
        </LabelContainer>
        <LabelContainer>
          <Phone /> 07 68 06 56 62 - 02 72 17 73 28
        </LabelContainer>
        <LabelContainer>
          <Email />{' '}
          <EmailLabel href='mailto: college.albader.nantes@gmail.com'>
            college.albader.nantes@gmail.com
          </EmailLabel>
        </LabelContainer>
      </CenterContainer> */}
      <RightContainer>
        <SocialMedia href='https://www.facebook.com/profile.php?id=100025742630064'>
          <Facebook />
        </SocialMedia>
        <SocialMedia href='https://www.instagram.com/college_albader/'>
          <Instagram />
        </SocialMedia>
      </RightContainer>
    </Container>
  )
}

export default Announcement
