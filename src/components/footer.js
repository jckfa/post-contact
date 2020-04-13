import React from 'react'
import styled from 'styled-components'
import {site} from './config/vars'
import updated from './data/updated_time'

const ramon_url = 'https://ramongd.com/',
      paul_url  = 'https://soulellis.com/',
      jac_url   = 'https://www.risd.edu/people/jacqueline-shaw/',
      lucy_url  = 'https://lucindahitchcock.com/',
      sue_url   = 'https://www.risd.edu/people/sue-mazzucco/',
      eric_url  = 'https://ficciones-typografika.tumblr.com/',
      ur1       = 'https://soulellis.com/work/urgencyreader/index.html',
      ur2       = 'https://queer.archive.work/urgencyreader2/'


const Shell = styled.section`
  font-size: 0.8em;
  padding-top: 3em;
`

const Footer = (props) => (
  <Shell>
    <p>
      Special thanks to Stella Herzog for allowing the use of her building in this way; to <a href={ramon_url}  target='_blank' rel='noopener noreferrer'>Ramon Tejada</a>, <a href={paul_url}  target='_blank' rel='noopener noreferrer'>Paul Soulellis</a>, and <a href={jac_url} target='_blank' rel='noopener noreferrer'>Jacqueline Shaw</a> for their crucial feedback; and to <a href={lucy_url} target='_blank' rel='noopener noreferrer'>Lucy Hitchcock</a> and <a href={sue_url} target='_blank' rel='noopener noreferrer'>Sue Mazzucco</a> for securing RISD GD funding for supplies necessary to make this possible.
      </p>

      <p>
        This project was inspired by Erik Brandt’s <a href={eric_url} target='_blank' rel='noopener noreferrer'>Ficciones Typografika</a> and Paul Soulellis’ <a href={ur1} target='_blank' rel='noopener noreferrer'>Urgency</a> <a href={ur2} target='_blank' rel='noopener noreferrer'>Readers</a>.
      </p>

      <p>
        Last updated: {updated} <a href='https://time.is/UTC' target='_blank' rel='noopener noreferrer'>UTC</a> • <a href={site.source_code} target='_blank' rel='noopener noreferrer'>Source Code</a>
      </p>
  </Shell>
)

export default Footer
