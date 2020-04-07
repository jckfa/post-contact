import React from 'react'
import styled from 'styled-components'
import media from './utils/media'
import updated from './data/updated_time'
// eslint-disable-next-line
import time from './current_time'

const ProjectInfo = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  padding: 0.5em;

  ${media.m`
    min-height: 100vh;
    padding: 0.75em;
  `}
`

const Heading = styled.span`
  text-transform: uppercase;
  display: block;
`

const Time = styled.time`
  font-variant-numeric: tabular-nums slashed-zero;
`

const Metadata = styled.section``

const Info = () => (
  <ProjectInfo>
    <section>
      <Heading>Quarantine Posters</Heading>
      Open Call for Submissions
    </section>

    <section>
      <Heading>Submission Constraints</Heading>
      <p>these are the rules you must follow.</p>
    </section>

    <section>
      <Time></Time>
      <Metadata>
        <p>
          Last updated: {updated} <a href="https://time.is/UTC" target="_blank" rel="noopener noreferrer">UTC</a>
        </p>
      </Metadata>
    </section>
  </ProjectInfo>
)

export default Info
