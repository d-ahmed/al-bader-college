import React from 'react'
import styled from 'styled-components'

const AlBaderImage = require('../../assets/images/home/albader-maquette.png')

const HeadingContainer = styled.div`
  margin: 3em 0;
  background-color: #a2064b;
  max-height: 40px;
  max-width: 45em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
`

const Heading = styled.h3`
  color: white;
  text-align: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
`

const ImgContainer = styled.div`
  width: 100%;
  flex: 1.5;
  margin-right: 1.5rem;
`
const InfoContainer = styled.div`
  width: 100%;
  flex: 1;
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    color: #a2064b;
    margin-bottom: 10px;
  }
`

const Image = styled.img`
  width: 100%;
`

const LabelConatiner = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  position: relative;
  div {
    background-color: #c34f6a;
    min-height: 60px;
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    margin: 0.5em 0 0.5em 2em;
    color: white;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 50px;

    p {
      width: 100%;
    }
  }
  span {
    width: 70px;
    height: 70px;
    position: absolute;
    border-radius: 70px;
    top: 50%;
    transform: translateY(-50%);

    img {
      width: 70px;
      height: 70px;
      object-fit: cover;
      border-radius: 60px;
    }
  }
`

const RegistrationBtn = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: #a2064b;
  color: white;
  cursor: pointer;
  margin-top: 20px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 4em;

  @media (max-width: 820px) {
    padding: 0 1em;

    ${Content} {
      flex-direction: column;
    }

    ${InfoContainer} {
      h2 {
        display: none;
      }
    }

    ${LabelConatiner} {
      display: none;
    }

    ${ImgContainer} {
      margin: 0;
    }

    ${InfoContainer} {
      margin: 0;
    }
  }

  @media (max-width: 500px) {
    ${HeadingContainer} {
      display: none;
    }
  }
`

const Registration = () => {
  return (
    <Container>
      <HeadingContainer>
        <Heading>
          Collège privé musulman déclaré auprès de l'académie de Nantes depuis
          2018
        </Heading>
      </HeadingContainer>
      <Content>
        <ImgContainer>
          <Image src={AlBaderImage} alt='College Al-Bader' />
        </ImgContainer>
        <InfoContainer>
          <h2>INSCRIPTIONS</h2>
          <LabelConatiner>
            <span>
              <img src='https://remedialteachingsupport.co.za/wp-content/uploads/2016/02/education.jpg' />
            </span>
            <div>
              <p>
                Programme de l'<strong>Éducation National</strong>
              </p>
            </div>
          </LabelConatiner>
          <LabelConatiner>
            <span>
              <img src='https://th.bing.com/th/id/R.9d65cf033865537772d921306b685c64?rik=MS%2bctkLNU8xPlg&riu=http%3a%2f%2frhconseilpme.blogs.com%2f.a%2f6a00d834529bc369e201b7c7cddbdc970b-500wi&ehk=dYboLiPzJOL42GcaM6m%2fDPEAHE4NTmup0IrtJxoQzi4%3d&risl=&pid=ImgRaw&r=0' />
            </span>
            <div>
              <p>
                Enseignement de <strong>l'éthique musulmane</strong> et de{' '}
                <strong>la langune arabe</strong>
              </p>
            </div>
          </LabelConatiner>
          <RegistrationBtn>Inscrire mon enfant</RegistrationBtn>
        </InfoContainer>
      </Content>
    </Container>
  )
}

export default Registration
