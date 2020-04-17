import React from 'react'
import styled, {keyframes} from 'styled-components'
import {site, fonts} from './config/vars'
import media from './utils/media'
import {SmallPosterIcon, BigPosterIcon} from './poster_icons'
import Footer from './footer'

const ProjectInfo = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  padding: 0.5em;

  & img {
    width: 100%;
  }

  ${media.m`
    max-height: 100vh;
    padding: 0.75em;
    overflow: scroll;
  `}
`

const Header = styled.section`
  margin-bottom: 6em;
`

const Beta = styled.span`
  font-size: 0.5em;
  line-height: 0.5;
  text-transform: uppercase;
  display: inline-block;
  border: 1px solid currentColor;
  border-radius: 4px;
  padding: 7px 3px 4px;
  position: relative;
  bottom: 0.3em;
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

const Heading = styled.span`
  ${'' /* font-weight: bold; */}
  font-family: ${fonts.bold};
  ${'' /* color: ${colors.orange}; */}
  text-transform: uppercase;
  display: block;
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

const Color = styled.span`
  text-transform: lowercase;
  line-height: 1;
  display: inline-block;
  border: 2px solid currentColor;
  border-radius: 100px;
  padding: 0.25em 0.5em;
  margin-bottom: 0.1em;
  transition: color 50ms;
  ${props => props.color && `
    background-color: ${props.color};
  `}

  ${props => props.white || `
    &:hover {
      color: transparent;
      cursor: default;
    }
  `}
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

const Info = (props) => (
  <ProjectInfo>
    <Header>
      <Heading>{site.title} <Beta>Beta</Beta></Heading>
      <p><BlinkText>Open Call for Submissions</BlinkText></p>
    </Header>

    <section>
      <p><i>{site.title}</i> is {site.description}</p>
      <p>It offers a visible community platform to process the mental and physical tolls of the crisis, express frustration or outrage, spread love or hope, or perhaps find solace.</p>
      <p>Consider it an opportunity to address an overlooked subject through a medium specifically chosen to <a href="https://youtu.be/7GUPsEKiiHg?t=435"  target='_blank' rel='noopener noreferrer'>slow the material down for you to get a closer look.</a></p>
    </section>

    <section>
      <Heading>Contribute</Heading>
      <p>Please create previously unpublished material for one of the two poster sizes below to be printed in B&W and wheat-pasted to the façade of a <a href={site.address_url} target='_blank' rel='noopener noreferrer'>neighborhood apartment building</a> in Providence, Rhode Island (USA).</p>

      <SizingShell>
        <Size>
          <p>15"W×20"H<br/>(1 paper color)</p>
          <SmallPosterIcon/>
        </Size>

        <Size>
          <p>30"W×40"H<br/>(1–2 paper colors)</p>
          <BigPosterIcon/>
        </Size>
      </SizingShell>

      <p><i>Posters are tiled with 16 7½"W×10"H pages; this yields various framing possibilities with the use of other paper colors. Consider treating the space as a series of smaller posters, be it 2, 4, 8, or 16.</i></p>

      <p>
        Available paper colors: <Color white>White</Color> <Color color='WhiteSmoke'>Light Gray</Color> <Color color='#fff6a7'>Pale Yellow</Color> <Color color='Papayawhip'>Papayawhip</Color> <Color color='PeachPuff'>Peach</Color> <Color color='#fa2'>Orange</Color>
      </p>

      {/* <p>
        Don’t know what make? Follow one of these prompts:
        <ul>
          <li>
        Visually describe your day in quarantine in 4, 8, or 16 frames.
          </li>
          <li>prompt 2</li>
          <li>prompt 3</li>
        </ul>
      </p> */}

      <p>
        Send artwork in PDF format (with bleeds and crop marks if necessary), including <i>preferred</i> paper choice(s), a name, and a website URL or social media handle, to <a href={submit_email} target='_blank' rel='noopener noreferrer'>{site.email}</a>. There is no deadline. The project ends when the pandemic ends.
      </p>

      <p>
        All attempts will be made to respect artwork as is, however minor modifications may be necessary. Printing is done with a Xerox Phaser 6510, using aftermarket toner. The misprints this toner often produces are embraced.
      </p>
      <p>
        The order in which work is recieved may vary in relation to that of publishing. Contributors will be notified if and when their work is used. New posters are published on site and online every Monday, Wednesday, Friday, and Sunday.
      </p>
    </section>

    <Visit>
      <p>
        Visit the site in person at <a href={site.address_url} target='_blank' rel='noopener noreferrer'>{site.address}</a> or on Instagram <a href={'https://instagram.com/' + site.instagram_handle} target='_blank' rel='noopener noreferrer'>@{site.instagram_handle}</a>. And stay safe out there.
      </p>
    </Visit>

    <Footer/>
  </ProjectInfo>
)

export default Info
