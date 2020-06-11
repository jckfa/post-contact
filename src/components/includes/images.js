import React from 'react'
import styled from 'styled-components'
import {colors} from '../config/vars'
import media from '../utils/media'
import MonoView from './ImgMonoView'
import GridView from './ImgGridView'
import {ViewIcon1x1, ViewIcon2x2} from '../poster_icons'

const Posters = styled.div`
  width: 100%;
  min-height: 75vh;
  color: ${colors.white};
  background-color: ${colors.purple};
  position: relative;

  ${media.m`
    max-height: 100vh;
    overflow: scroll;
  `}

  ${media.xl`
    width: 200%;
  `}
`

const DisplayBar = styled.div`
  display: inline-block;
  vertical-align: bottom;
  padding: 0.5em 0.5em 0.25em;

  ${media.m`
    padding: 0.75em 0.75em 0.5em;
  `}
`

const Images = (props) => (
  <Posters>
    <DisplayBar onClick={props.toggle}>
      {props.grid_view ?
        <ViewIcon1x1/>
      : <ViewIcon2x2/>
      }
    </DisplayBar>

    {props.grid_view ?
      <GridView {...props}/>
    : <MonoView {...props}/>
    }
  </Posters>
)

export default Images
