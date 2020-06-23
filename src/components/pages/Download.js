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
  <div>
    <Note>
      <p>
        The following artwork is provided for those with access to a printer in order to help promote anti-racist protest and community organizing. All files presented here are licensed under <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/' target='_blank' rel='noopener noreferrer'>CC BY-NC-SA</a>. Under absolutely no circumstances may any of this artwork be used to support racism, sexism, homophobia, xenophobia, or any other kind of marginalization.
      </p>

      <p>
        High-quality posters and stickers are being produced! They will be available for purchase as a way to financially support this project. Follow <a href={'https://instagram.com/' + site.instagram_handle} target='_blank' rel='noopener noreferrer'>{site.instagram_handle}</a> to be notified when they’re available.
      </p>
    </Note>

    <Items>
      <div>asdf</div>
      <div>asdf</div>
      <div>asdf</div>
      <div>asdf</div>
    </Items>
  </div>
)

export default Download
