import React from 'react'
import styled, {keyframes} from 'styled-components'
import {site} from '../config/vars'
import media from '../utils/media'
import {PosterTilesIcon, BigPosterIcon} from '../poster_icons'
import Heading from '../utils/Heading'

const Header = styled.section`
  margin-bottom: 6em;
`

const blink = keyframes`
    0% {opacity: 1}
   50% {opacity: 0.25}
  100% {opacity: 1}
`

const BlinkText = styled.span`
  animation: ${blink} 2s linear infinite;
  display: inline-block;
`

const SizingShell = styled.div`
  max-width: 32em;
  display: flex;
  flex-direction: row;
  padding-top: 1em;
  margin-bottom: 1em;
`

const Size = styled.div`
  width: 50%;
  ${'' /* & + & {
    padding-left: 1em;
  } */}

  & p {
    margin-bottom: 0.25em;
  }
`

const Visit = styled.section`
  border: 2px solid currentColor;
  border-radius: 8px;
  padding: 0.5em;
`

// escape special characters
const submit_email = `
  mailto:${site.email}
  ?subject=${encodeURIComponent(site.email_subject)}
  &body=${encodeURIComponent(site.email_body)}
`.replace(/\s+/g, '')

const Contribute = () => (
  <div>
    <Visit>
      <p>
        <i>{site.title}</i> is {site.description}
      </p>
      <p>
        New posters are published on site and online every Monday, Wednesday, Friday, and Sunday.
      </p>
      <p>
        Visit the site in person at <a href={site.address_url} target='_blank' rel='noopener noreferrer'>{site.address}</a> or on Instagram <a href={'https://instagram.com/' + site.instagram_handle} target='_blank' rel='noopener noreferrer'>@{site.instagram_handle}</a>.
      </p>
    </Visit>

    <section>
      <Heading>
        <BlinkText>Open Call for Submissions</BlinkText>
      </Heading>
      <p>Please submit previously unpublished material for a 30"W×40"H poster to be printed in B&W and wheat-pasted to the façade of a <a href={site.address_url} target='_blank' rel='noopener noreferrer'>neighborhood apartment building</a> in Providence, Rhode Island (USA).</p>

      <SizingShell>
        <Size>
          <p>Tiled Assembly</p>
          <PosterTilesIcon/>
        </Size>

        <Size>
          <p>Versatile Framing</p>
          <BigPosterIcon/>
        </Size>
      </SizingShell>

      <p>Posters are constructed with 16 7½"W×10"H pages; this yields various framing possibilities with the use of other paper colors. Consider treating the space as a series of smaller posters, be it 2, 4, 8, or 16.</p>

      {/* <p>
        Partioning is done with the following colors: <Color white>White</Color> <Color color='#ebebeb'>Light Gray</Color> <Color color='#fff6a7'>Pale Yellow</Color> <Color color='Papayawhip'>Papayawhip</Color> <Color color='PeachPuff'>Peach</Color> <Color color='#fa2'>Orange</Color>
      </p> */}

      {/* <p>
        <i>Don’t know what make?</i>
        <ul>
          <li>
        Visually describe what you’re going to do when isolation ends in 2, 4, 8, or 16 frames.
          </li>
          <li>
        Address an important subject overlooked among the news.
          </li>
          <li>
        Illustrate the world you want to see post-pandemic.
          </li>
          <li>
        Use your technical ability as a skilled artist to echo and emphasize, i.e. "repost" (but physically), important voices in a more visible and powerful way.
          </li>
        </ul>
      </p> */}

      <p>
        Send material to <a href={submit_email} target='_blank' rel='noopener noreferrer'>{site.email}</a>. Please format it at 300DPI as a PDF, PNG, or JPG (with bleeds and crop marks if necessary), and include a name, website URL and/or Instagram handle, title (optional; defaults to Post-Contact ###), and description (optional but highly encouraged). There is no deadline. The project ends when the pandemic ends.
      </p>

      <p><i>
        All attempts will be made to respect material as is, however minor modifications may be necessary, including halftoning, rescaling, and repeating. Printing is done with a Xerox Phaser 6510, using aftermarket toner. The misprints this toner often produces are embraced.
      </i></p>

      <p><i>
        The order in which work is recieved may vary in relation to that of publishing. Contributors will be notified if and when their submission is used, and provided with high resolution documentation photos. The lighting in these photos is mostly up to mother nature.
      </i></p>
    </section>
  </div>
)

export default Contribute
