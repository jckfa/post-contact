import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'

const Main = styled.main`
  color: white;
  width: 100vw;
  height: 100vh;
  background-color: #00f;
  padding: 0.5em;

  ${media.s`
    padding: 0.75em;
  `}
`

const NotFound = ({ location }) => (
  <Main>
    <p>404 Not Found</p>
  </Main>
)

export default NotFound
