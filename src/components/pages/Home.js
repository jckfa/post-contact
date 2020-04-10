import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'
import Images from '../images'
import Info from '../info'

const Main = styled.main`
  display: flex;
  flex-direction: column;

  & p + p, & section + section {
    margin-top: 1em;
  }

  ${media.m`
    flex-direction: row;
  `}
`

const Home = (props) => (
  <Main>
    <Images {...props} />
    <Info/>
  </Main>
)

export default Home
