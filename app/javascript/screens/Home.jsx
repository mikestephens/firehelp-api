import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
`

const HeaderContainer = styled.div`
  align-self: flex-start;
  flex: 1;
  text-transform: uppercase;
  font-size: 2rem;
`

const NavContainer = styled.nav`
  flex: 4;
`

const NavigationCard = styled.section`
  margin-top: 20px;
  padding: 4rem 6em;
  border: 1px solid black;
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
`

const TranslateLink = styled.aside`
  display: block;
  text-align: center;
  padding: 35px 15px;
`

const Footer = styled.footer`
  text-align: center;
`

const Home = props => (
  <Container>
    <HeaderContainer>
      <h1>
        Thomas Fire Help
      </h1>
    </HeaderContainer>
    <NavContainer>
      <Link to="/looking_for_help">
        <NavigationCard>
          I Need Help
        </NavigationCard>
      </Link>
      <Link to="/helping">
        <NavigationCard>
          I Want to Help
        </NavigationCard>
      </Link>
    </NavContainer>

    <TranslateLink>
      en Español
    </TranslateLink>

    <Footer>
      In event of Emergency, call 911
    </Footer>
  </Container>
)

export default Home
