import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'

const BG = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00f;

  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`

const P = styled.p`
  color: white;
  padding: 0.5em;

  ${media.s`
    padding: 0.75em;
  `}
`

const NoFound = ({ location }) => (
  <main>
    <BG/>
    <P>
      404 Not found
    </P>
  </main>
)

export default NoFound
