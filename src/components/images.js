import React from 'react'
import styled from 'styled-components'
import {site, colors} from './config/vars'
import media from './utils/media'
import posterList from './data/posterlist'

const Posters = styled.div`
  width: 100%;
  min-height: 75vh;
  padding: 0.5em;
  ${'' /* display: inline-block; */}
  color: ${colors.black};
  background-color: ${colors.orange};
  color: white;
  background-color: ${colors.black};
  position: relative;

  & img {
    width: 100%;
  }

  ${media.m`
    max-height: 100vh;
    overflow: scroll;
    padding: 0.75em;
  `}

  ${media.xl`
    width: 200%;
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
    return '00' + n
  } else if (n < 100) {
    return '0' + n
  } else {
    return n
  }
}

const PosterInfo = styled.div`
  margin-bottom: 2em;

  & div + div {
    padding-top: 0.5em;
  }
`

const Description = styled.div`
  & span {
    font-style: normal;
  }
`

const Images = (props) => (
  <Posters>
    <Prev onClick={props.prev} id='prev'/>
    <Next onClick={props.next} id='next'/>

    <img
      src={site.images_path_external + posterList[props.count].image}
      alt=''
    />
    
    <PosterInfo>
      <Count>
        {zero_pad(props.count + 1)}/{zero_pad(props.totalCount + 1)}
      </Count>
      <div>
        {
          posterList[props.count].author_url ?
            <a href={posterList[props.count].author_url} target='_blank' rel='noopener noreferrer'>{posterList[props.count].author + ', '}</a>
          : posterList[props.count].author ?
            posterList[props.count].author + ', '
          : '(Re)'
        }
        <i>
          {posterList[props.count].title && posterList[props.count].title + ', '}
        </i>
        {site.title + ' ' + zero_pad(posterList[props.count].id)}, {posterList[props.count].size}, Installed on {posterList[props.count].install_date}
      </div>

      {posterList[props.count].description &&
        <Description>
          <i dangerouslySetInnerHTML={{__html: posterList[props.count].description}} />
        </Description>
      }
    </PosterInfo>
  </Posters>
)

export default Images
