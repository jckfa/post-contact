import React from 'react'
import styled from 'styled-components'
import {site} from '../config/vars'
import media from '../utils/media'
import posterList from '../data/posterlist'

const Shell = styled.div`
  padding: 0 0.25em;

  ${media.m`
    padding: 0 0.375em;
  `}
`

const Poster = styled.div`
  width: 50%;
  padding: 0 0.25em 0.25em;
  display: inline-block;

  ${media.m`
    padding: 0 0.375em 0.375em;
  `}

  & img {
    width: 100%;
    vertical-align: bottom;
  }

  & div {
    padding-top: 0.25em;
  }
`

const GridView = (props) => (
  <Shell>
    {posterList.map((poster, index) =>

      <Poster key={index}>
        <img src={site.images_path_external + poster.images[1]} alt=''/>
        <div>{poster.images[0].slice(0, 3)}</div>
      </Poster>
    )}
  </Shell>
)

export default GridView
