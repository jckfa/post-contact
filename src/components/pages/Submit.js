import React from 'react'
import styled, {keyframes} from 'styled-components'
import {site} from '../config/vars'
import {PosterTilesIcon, BigPosterIcon} from '../poster_icons'
import Heading from '../utils/Heading'

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

  & p {
    margin-bottom: 0.25em;
  }
`

const Visit = styled.section`
  border: 2px solid currentColor;
  border-radius: 8px;
  padding: 0.5em;
`

const Email = styled.span`
  text-align: center;
  border: 2px solid currentColor;
  border-radius: 8px;
  padding: 0.5em;
  display: inline-block;

  & a {
    text-decoration: none;
  }
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

      <p>
        Send material to the following address:
        <a href={submit_email} target='_blank' rel='noopener noreferrer'>
          <Email>{site.email}</Email>
        </a>
      </p>

      <p>
        Please format it at 300DPI as a PDF, PNG, or JPG (with bleeds and crop marks if necessary) and include the following:
        <ul>
          <li>
            name (anonymity is not allowed)
          </li>
          <li>
            website URL and/or Instagram handle (optional)
          </li>
          <li>
            title (optional; defaults to Post-Contact ###)
          </li>
          <li>
            description (optional but highly encouraged)
          </li>
          <li>
            one piece of music* to support the submission (optional; *limited to Spotify’s selection)
          </li>
        </ul>
      </p>

      <p>
        <i>Lower-fidelity option (for kids & non-designers)</i>: grab a marker and a piece of paper; complete one of the following prompts then photograph the work and send. Please include the information outlined above.
        <ul>
          <li>
            Draw your emotions under quarantine.
          </li>
          <li>
            Write to the future.
          </li>
          <li>
            Offer critical feedback or commentary.
          </li>
          <li>
            Write a thank you letter.
          </li>
          <li>
            Make a wish.
          </li>
        </ul>
      </p>

      <p>
        There is no deadline. The project ends when the pandemic ends.
      </p>

      <p><i>
        All attempts will be made to respect material as is, however minor modifications may be necessary, including halftoning, cropping, rescaling, and repeating. Paper color is chosen with consideration of both the submission’s subject matter and the paper colors of previous posts. Printing is done with a Xerox Phaser 6510 using aftermarket toner. The misprints this toner often produces are embraced.
      </i></p>

      <p><i>
        The order in which work is recieved may vary in relation to that of publishing. Contributors will be notified if and when their submission is used, and provided with full resolution documentation photos.
      </i></p>
    </section>
  </div>
)

export default Contribute
