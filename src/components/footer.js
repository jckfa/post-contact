import React from 'react'
import styled from 'styled-components'
import {site} from './config/vars'
import updated from './data/updated_time'

const ramon_url = 'https://ramongd.com/',
      paul_url  = 'https://soulellis.com/',
      jac_url   = 'https://www.risd.edu/people/jacqueline-shaw/',
      lucy_url  = 'https://lucindahitchcock.com/',
      sue_url   = 'https://www.risd.edu/people/sue-mazzucco/'


const Shell = styled.section`
  padding-top: 3em;
`

const Visit = styled.p`
  border: 2px solid currentColor;
  border-radius: 8px;
  padding: 0.5em;
`

const Footer = (props) => (
  <Shell>
    <Visit>
      Visit the site in person at <a href={site.address_url} target='_blank' rel='noopener noreferrer'>{site.address}</a> or on Instagram <a href={'https://instagram.com/' + site.instagram_handle} target='_blank' rel='noopener noreferrer'>@{site.instagram_handle}</a>. And stay safe out there.
    </Visit>

    <p>
      Special thanks to Stella Herzog for allowing the use of her building in this way; to <a href={ramon_url}  target='_blank' rel='noopener noreferrer'>Ramon Tejada</a>, <a href={paul_url}  target='_blank' rel='noopener noreferrer'>Paul Soulellis</a>, and <a href={jac_url} target='_blank' rel='noopener noreferrer'>Jacqueline Shaw</a> for their crucial feedback; and to <a href={lucy_url} target='_blank' rel='noopener noreferrer'>Lucy Hitchcock</a> and <a href={sue_url} target='_blank' rel='noopener noreferrer'>Sue Mazzucco</a> for securing RISD GD funding for supplies necessary to make this project possible.
        </p>

        <p>
          Last updated: {updated} <a href='https://time.is/UTC' target='_blank' rel='noopener noreferrer'>UTC</a> • <a href={site.source_code} target='_blank' rel='noopener noreferrer'>Source Code</a>
    </p>
  </Shell>
)

export default Footer
