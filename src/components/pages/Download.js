import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'

const Items = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: yellow;

  & div {
    width: 100%;
    height: 12em;

    ${media.m`
      width: 50%;
    `}
  }
`

const Download = () => (
  <Items>
    <div>asdf</div>
    <div>asdf</div>
    <div>asdf</div>
    <div>asdf</div>
  </Items>
)

export default Download
