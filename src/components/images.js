import React from 'react'
import styled from 'styled-components'
import {colors} from './config/vars'
import media from './utils/media'
import posterList from './data/posterlist'

const Posters = styled.div`
  width: 100%;
  min-height: 50vh;
  padding: 0.5em;
  ${'' /* display: inline-block; */}
  color: ${colors.black};
  background-color: ${colors.orange};
  position: relative;

  & img {
    width: 100%;
  }

  ${media.m`
    min-height: 100vh;
    padding: 0.75em;
  `}
`

const NavBtn = styled.button`
  width: calc(33.3% - 0.5em);
  height: calc(100vw / 3 * 2 - 0.65em);
  display: inline-block;

  ${media.m`
    width: calc(33.3% - 0.75em);
    height: calc(50vw / 3 * 2 - 1em);
  `}
`

const Prev = styled(NavBtn)`
  cursor: url('/assets/img/ui/prev.svg'), w-resize;
  cursor: -webkit-image-set(url('/assets/img/ui/prev.svg') 2x) 0 24, w-resize;
  ${'' /* background-color: rgba(255, 0, 0, 0.5); */}
  position: absolute;
  left: 0.5em;

  ${media.m`
    left: 0.75em;
  `}
`

const Next = styled(NavBtn)`
  cursor: url('/assets/img/ui/next.svg'), e-resize;
  cursor: -webkit-image-set(url('/assets/img/ui/next.svg') 2x) 74 24, e-resize;
  ${'' /* background-color: rgba(0, 0, 255, 0.5); */}
  position: absolute;
  right: 0.5em;

  ${media.m`
    right: 0.75em;
  `}
`

const Count = styled.div`
  font-variant-numeric: tabular-nums;
  font-variant-numeric: slashed-zero;
`

function zero_pad(n) {
  if (n < 10) {
    return "00" + n
  } else if (n < 100) {
    return "0" + n
  } else {
    return n
  }
}

const PosterInfo = styled.ul`
  list-style: none;
`

const Images = (props) => (
  <Posters>
    <Prev onClick={props.prev} id="prev"/>
    <Next onClick={props.next} id="next"/>

    <img src={"assets/img/posters/" + posterList[props.count].image} alt=""/>

    <PosterInfo>
      <li>
        <Count>
          {zero_pad(props.count + 1)}/{zero_pad(props.totalCount + 1)}
        </Count>
      </li>
      <li>
        {posterList[props.count].title} by {posterList[props.count].author_url ?
          <a href={posterList[props.count].author_url} target="_blank" rel="noopener noreferrer">{posterList[props.count].author}</a>
        :
        posterList[props.count].author}
      </li>
      <li>
        Installed on {posterList[props.count].install_date}
      </li>
    </PosterInfo>

    {/* <p dangerouslySetInnerHTML={{__html:
      posterList[props.count].caption
    }} /> */}
  </Posters>
)

export default Images
