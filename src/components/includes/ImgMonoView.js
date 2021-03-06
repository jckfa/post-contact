import React from 'react'
import styled from 'styled-components'
import {site} from '../config/vars'
import media from '../utils/media'
import DefaultPoster from '../default_poster'
import posterList from '../data/posterlist'

const Shell = styled.div`
  padding: 0 0.5em;

  ${media.m`
    padding: 0 0.75em;
  `}
`

const ImgShell = styled.div`
  height: 0;
  overflow: hidden;
  margin-bottom: 0.25em;
  padding-top: 66.6666%;
  position: relative;

  & img {
    width: 100%;
    vertical-align: bottom;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`

const NavBtn = styled.button`
  width: calc(33.3% - 0.5em);
  height: calc(100vw / 3 * 2 - 0.65em);
  display: inline-block;

  ${media.m`
    width: calc(33.3% - 0.75em);
    height: calc(50vw / 3 * 2 - 1.28em);
  `}
`

const Prev = styled(NavBtn)`
  cursor: url('/assets/img/ui/prev.svg'), w-resize;
  cursor: -webkit-image-set(url('/assets/img/ui/prev.svg') 2x) 0 24, w-resize;
  ${'' /* background-color: rgba(255, 0, 0, 0.5); */}
  position: absolute;
  left: 0.5em;
  z-index: 2;

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
  z-index: 2;

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
  ${'' /* font-family: ${fonts.italic}; */}
  font-style: italic;

  & span {
    font-style: normal;
  }

  & p + p {
    margin-top: 0.5em;
  }
`

const Note = styled.div`
  color: black;
`

const MonoView = (props) => (
  <Shell>
    <Prev onClick={props.prev} id='prev'/>
    <Next onClick={props.next} id='next'/>

    <ImgShell>
      <img
        src={site.images_path_external + props.allPosterImages[props.count]}
        alt=''
      />
      <DefaultPoster/>
    </ImgShell>

    <PosterInfo>
      <Count>
        {zero_pad(props.count + 1)}/{zero_pad(props.totalCount + 1)}
      </Count>

      <div>
        {posterList[props.PosterInfoIndexes[props.count]].authors ?
          posterList[props.PosterInfoIndexes[props.count]].authors.map((author, index) =>
            <span key={index}>

              {author.url ?
                <span><a href={author.url} target='_blank' rel='noopener noreferrer'>{author.name}</a>, </span>
              : author.name + ', '
              }
            </span>
          )
        : '(Re)'
        }
        <i>
          {posterList[props.PosterInfoIndexes[props.count]].title && posterList[props.PosterInfoIndexes[props.count]].title + ', '}
        </i>
        {site.title + ' ' + posterList[props.PosterInfoIndexes[props.count]].images[0].slice(0, 3)}, {posterList[props.PosterInfoIndexes[props.count]].size}, Installed on {posterList[props.PosterInfoIndexes[props.count]].install_date}
      </div>

      {posterList[props.PosterInfoIndexes[props.count]].description &&
        <Description dangerouslySetInnerHTML={{__html: posterList[props.PosterInfoIndexes[props.count]].description}} />
      }

      {posterList[props.PosterInfoIndexes[props.count]].note &&
        <Note dangerouslySetInnerHTML={{__html:
        posterList[props.PosterInfoIndexes[props.count]].note}} />
      }
    </PosterInfo>
  </Shell>
)

export default MonoView
