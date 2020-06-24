import React from 'react'
import styled from 'styled-components'
import media from '../utils/media'
import {site} from '../config/vars'

const Note = styled.section`
  border: 2px solid currentColor;
  border-radius: 8px;
  padding: 0.5em;
  margin-bottom: 1em;
`

const Items = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  & div {
    display: flex;
    flex-wrap: wrap;

    ${media.m`
      flex-wrap: nowrap;
    `}

    & a {
      width: 100%;
    }
  }

  & img {
    width: 100%;
    vertical-align: bottom;
    margin-bottom: 0.5em;
  }

  & figcaption {
    width: 100%;

    ${media.m`
      padding-left: 0.5em;
    `}

    & span {
      font-style: italic;
    }
  }
`

const Download = () => (
  <div>
    <Note>
      <p>
        The following artwork is provided for those with access to a printer in order to help promote anti-racist protest and community organizing. All files presented here are licensed under <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/' target='_blank' rel='noopener noreferrer'>CC BY-NC-SA</a>. Under absolutely no circumstances may any of this artwork be used to promote organized racism, sexism, homophobia, xenophobia, or any other kind of marginalization.
      </p>

      <p>
        High-quality and limited edition posters and stickers are being produced! They will be available for purchase as a way to financially support this project. A portion of proceeds will be donated (receiving organization(s) TBD). Follow <a href={'https://instagram.com/' + site.instagram_handle} target='_blank' rel='noopener noreferrer'>@{site.instagram_handle}</a> to be notified when they’re available.
      </p>
    </Note>

    <Items>
      <div>
        <a href='https://drive.google.com/file/d/1yAfxENktT5TT3euQm8IMnX15kYaUUoVp/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
          <img src={site.download_path + '033.png'} alt=''/>
        </a>
        <figcaption>
          033 Do Not Panic, Organize <span>[sizes: letter, tabloid, 30x40in]</span>, <a href='https://drive.google.com/file/d/1yAfxENktT5TT3euQm8IMnX15kYaUUoVp/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Download</a>
        </figcaption>
      </div>
    </Items>
  </div>
)

export default Download
