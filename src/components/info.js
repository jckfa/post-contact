import React from 'react'
import styled, {keyframes} from 'styled-components'
import {site} from './config/vars'
import media from './utils/media'
import updated from './data/updated_time'
import {
  SmallPosterIcon,
  BigPosterIcon,
} from './poster_icon'

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
  margin-bottom: 3em;
`

const Heading = styled.span`
  font-weight: bold;
  ${'' /* color: ${colors.orange}; */}
  text-transform: uppercase;
  display: block;
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

const Footer = styled.section`
  padding-top: 3em;
`

const Metadata = styled.section``

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
  display: flex;
  flex-direction: row;
  padding-top: 1em;
  margin-bottom: 1em;
`

const Size = styled.div`
  & + & {
    padding-left: 1em;
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
  ${props => props.color && `
    background-color: ${props.color}
  `}
`

const Info = () => (
  <ProjectInfo>
    <Header>
      <Heading>{site.title} <Beta>Beta</Beta></Heading>
      <p><BlinkText>Open Call for Submissions</BlinkText></p>
    </Header>

    <section>
      <p><i>{site.title}</i> is {site.description}</p>
      {/* <p>It offers a small outlet for both contributing artists and a local residential community to process the mental and physical tolls of the crisis, and perhaps find solace or spread hope.</p> */}
      <p>It offers a small, ephemeral outlet for both contributing artists and a local residential community to process the mental and physical tolls of the crisis, to express outrage or frustration, to spread love or hope, or to perhaps find solace.</p>
    </section>

    <section>
      <Heading>Contribute</Heading>
      <p>Please create new material sized at one of the options below to be printed as a B&W poster and wheat-pasted to the façade of a neighborhood apartment building in Providence, Rhode Island (USA).</p>

      <SizingShell>
        <Size>
          <p>15"W×20"H</p>
          <SmallPosterIcon/>
        </Size>

        <Size>
          <p>30"W×40"H</p>
          <BigPosterIcon/>
        </Size>
      </SizingShell>

      <p><i>Posters are tiled with 7½"W×10"H pages which yields various framing possibilities. Consider treating the canvas as a group of smaller canvases.</i></p>

      <p>
        Choose from the available paper colors: <Color>White</Color> <Color color="WhiteSmoke">Light Gray</Color> <Color color="#fff6a7">Pale Yellow</Color> <Color color="Papayawhip">Papayawhip</Color> <Color color="PeachPuff">Peach</Color> <Color color="DarkOrange">Orange</Color>
      </p>

      <p>Send artwork in PDF format (with bleeds and crop marks if necessary) to <a href={"mailto:" + site.email + "?=Post-Contact Submission"} rel="noopener noreferrer">{site.email}</a>. Not all submissions will be accepted. There is no deadline. The project ends when the pandemic ends.</p>
    </section>

    <Footer>
      <Metadata>
        <p>
          Follow <a href={"https://instagram.com/" + site.instagram_handle} target="_blank" rel="noopener noreferrer">@{site.instagram_handle}</a> on Instagram and stay safe out there.
        </p>
        <p>
          Last updated: {updated} <a href="https://time.is/UTC" target="_blank" rel="noopener noreferrer">UTC</a> • <a href={site.source_code} target="_blank" rel="noopener noreferrer">Source Code</a>
        </p>
      </Metadata>
    </Footer>
  </ProjectInfo>
)

export default Info
