import React from 'react'
import styled from 'styled-components'
import media from './media'
import Gutters from  './Gutters'

export const AlwaysCols = styled.div`
  display: flex;
  flex-direction: row;
`

export const Flex = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  ${media.m`
    flex-direction: row;
  `}
`

const Sec = styled.section`
  width: 100%;
`

export const Section = (props) => (
  <Sec>
    {props.children}
  </Sec>
)

export const GutterSection = (props) => (
  <Sec>
    <Gutters>
    {props.children}
    </Gutters>
  </Sec>
)
