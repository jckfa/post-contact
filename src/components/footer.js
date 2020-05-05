import React from 'react'
import styled from 'styled-components'
import {site} from './config/vars'
import updated from './data/updated_time'

const ramon_url = 'https://ramongd.com/',
      paul_url  = 'https://soulellis.com/',
      bdfl_url  = 'https://en.wikipedia.org/wiki/Benevolent_dictator_for_life',
      jac_url   = 'https://www.risd.edu/people/jacqueline-shaw/',
      pouya_url = 'http://www.pouyaahmadi.com/',
      lucy_url  = 'https://lucindahitchcock.com/',
      sue_url   = 'https://www.risd.edu/people/sue-mazzucco/',
      shep_url  = 'https://g.co/kgs/H4NZeU',
      shep_vid  = 'https://youtu.be/DJfeAvP8xTo?t=166',
      jack_url  = 'https://jackf.me',
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
      Special thanks to Stella Herzog for allowing the use of her building in this way; to <a href={ramon_url}  target='_blank' rel='noopener noreferrer'>Ramon Tejada</a>, <a href={paul_url}  target='_blank' rel='noopener noreferrer'>Paul Soulellis</a>, <a href={jac_url} target='_blank' rel='noopener noreferrer'>Jacqueline Shaw</a>, and <a href={pouya_url} target='_blank' rel='noopener noreferrer'>Pouya Ahmadi</a> for their feedback; to <a href={lucy_url} target='_blank' rel='noopener noreferrer'>Lucy Hitchcock</a> and <a href={sue_url} target='_blank' rel='noopener noreferrer'>Sue Mazzucco</a> for securing RISD GD funding for supplies necessary to make this possible; and to <a href={shep_url} target='_blank' rel='noopener noreferrer'>Shepard Fairey</a> for his wheat-pasting tips <a href={shep_vid} target='_blank' rel='noopener noreferrer'>in this video</a>.
      </p>

      <p>
        The <a href={bdfl_url} target='_blank' rel='noopener noreferrer'>BDFL</a> of this project is <a href={jack_url} target='_blank' rel='noopener noreferrer'>Jack Halten Fahnestock</a>. It was inspired by Erik Brandt’s <a href={eric_url} target='_blank' rel='noopener noreferrer'>Ficciones Typografika</a> and Paul Soulellis’ <a href={ur1} target='_blank' rel='noopener noreferrer'>Urgency</a> <a href={ur2} target='_blank' rel='noopener noreferrer'>Readers</a>.
        </p>

        <p>
          Like the essential workers who power the world, the contributors of this project make it what it is. Thank you.
        </p>

      <p>
        Last updated: {updated} <a href='https://time.is/UTC' target='_blank' rel='noopener noreferrer'>UTC</a> • <a href={site.source_code} target='_blank' rel='noopener noreferrer'>Source Code</a>
      </p>
  </Shell>
)

export default Footer
