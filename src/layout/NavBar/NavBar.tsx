import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 70px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Logo = styled.h1`
  font-weight: bold;
  @media (max-width: 896px) {
    display: none;
  }
`

const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const NavBar: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <img
            src='https://8975b1c016.clvaw-cdnwnd.com/175cd2b7f31d3d4a7d2171ab1f8bf7aa/200000071-e7224e81ff/logopng.png?ph=8975b1c016'
            width={60}
          />
          <Logo>Collège Al-Bader</Logo>
        </Left>
        <Right>
          <MenuItem>ACCUEIL</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default NavBar
