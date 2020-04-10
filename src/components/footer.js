import React from 'react'
import styled from 'styled-components'
import media from './utils/media'
import {site} from './config/vars'
import updated from './data/updated_time'

const Shell = styled.section`
  padding-top: 3em;
`

const Footer = (props) => (
  <Shell>
    <p>
      Visit the site in person at <a href={site.address_url} target="_blank" rel="noopener noreferrer">{site.address}</a> or on Instagram <a href={"https://instagram.com/" + site.instagram_handle} target="_blank" rel="noopener noreferrer">@{site.instagram_handle}</a>. Stay safe out there.
    </p>
    <p>
      Last updated: {updated} <a href="https://time.is/UTC" target="_blank" rel="noopener noreferrer">UTC</a> • <a href={site.source_code} target="_blank" rel="noopener noreferrer">Source Code</a>
    </p>
  </Shell>
)

export default Footer
