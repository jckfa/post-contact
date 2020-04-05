import React from 'react'
import styled from 'styled-components'
import media from './media'
import { spacing } from '../config/vars'

const Container = styled.div`
  padding: 0 ${spacing.target_area - 0.25}em;

  ${media.s`
    padding: 0 ${spacing.target_area}em;
  `}
`

const Gutters = (props) => (
  <Container>
    {props.children}
  </Container>
)

export default Gutters
