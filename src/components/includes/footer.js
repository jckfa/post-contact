import React from 'react'
import styled from 'styled-components'
import {site} from '../config/vars'
import updated from '../data/updated_time'

const ramon_url  = 'https://ramongd.com/',
      paul_url   = 'https://soulellis.com/',
      bdfl_url   = 'https://en.wikipedia.org/wiki/Benevolent_dictator_for_life',
      jac_url    = 'https://www.risd.edu/people/jacqueline-shaw/',
      pouya_url  = 'http://www.pouyaahmadi.com/',
      kelsey_url = 'https://kelseydusenka.com/',
      lucy_url   = 'https://lucindahitchcock.com/',
      sue_url    = 'https://www.risd.edu/people/sue-mazzucco/',
      shep_url   = 'https://g.co/kgs/H4NZeU',
      shep_vid   = 'https://youtu.be/DJfeAvP8xTo?t=166',
      do_url     = 'https://m.do.co/c/b09c1fce4b40',
      cpc_url    = 'https://www.centralpaperonline.com/',
      dinamo_url = 'https://abcdinamo.com/front',
      sharp_url  = 'https://sharptype.co/',
      jack_url   = 'https://jackf.me',
      eric_url   = 'https://ficciones-typografika.tumblr.com/',
      ur1        = 'https://soulellis.com/work/urgencyreader/index.html',
      ur2        = 'https://queer.archive.work/urgencyreader2/',
      font_url   = 'https://github.com/brycewilner/Standard'


const Container = styled.footer`
  font-size: 0.8em;
  padding-top: 3em;
`

const Footer = (props) => (
  <Container>
    <p>
      {site.title} is operated by <a href={jack_url} target='_blank' rel='noopener noreferrer'>Jack Halten Fahnestock</a> (who acts as <a href={bdfl_url} target='_blank' rel='noopener noreferrer'>BDFL</a>), but it is truly the product of a community effort.
    </p>

    <p>
      Special thanks to Stella Herzog for permitting the use of her building for this project; to <a href={ramon_url}  target='_blank' rel='noopener noreferrer'>Ramon Tejada</a>, <a href={paul_url}  target='_blank' rel='noopener noreferrer'>Paul Soulellis</a>, <a href={jac_url} target='_blank' rel='noopener noreferrer'>Jacqueline Shaw</a>, <a href={pouya_url} target='_blank' rel='noopener noreferrer'>Pouya Ahmadi</a>, and <a href={kelsey_url} target='_blank' rel='noopener noreferrer'>Kelsey Dusenka</a> for their feedback; to <a href={lucy_url} target='_blank' rel='noopener noreferrer'>Lucy Hitchcock</a> and <a href={sue_url} target='_blank' rel='noopener noreferrer'>Sue Mazzucco</a> for securing RISD GD funding for supplies necessary to make this possible; to <a href={shep_url} target='_blank' rel='noopener noreferrer'>Shepard Fairey</a> for his wheat-pasting tips <a href={shep_vid} target='_blank' rel='noopener noreferrer'>in this video</a>, to <a href={do_url} target='_blank' rel='noopener noreferrer'>Digital Ocean</a> for donating cloud hosting resources, to <a href={cpc_url} target='_blank' rel='noopener noreferrer'>Central Paper Co.</a> in Pawtucket, RI for donating paper, and to <a href={dinamo_url} target='_blank' rel='noopener noreferrer'>Dinamo</a> and <a href={sharp_url} target='_blank' rel='noopener noreferrer'>sharp Type</a> for donating fonts.
      </p>

      <p>
        Thanks to everyone who has submitted material. Featuring the work of many different contributors is essential to the soul of {site.title}.
      </p>

      <p>
        This project was inspired by Erik Brandt’s <a href={eric_url} target='_blank' rel='noopener noreferrer'>Ficciones Typografika</a> and Paul Soulellis’ <a href={ur1} target='_blank' rel='noopener noreferrer'>Urgency</a> <a href={ur2} target='_blank' rel='noopener noreferrer'>Readers</a>.
      </p>

      <p>
        Last updated: {updated} <a href='https://time.is/UTC' target='_blank' rel='noopener noreferrer'>UTC</a> • <a href={site.source_code} target='_blank' rel='noopener noreferrer'>Source Code</a> • Typeset in a custom fork of <a href={font_url} target='_blank' rel='noopener noreferrer'>Standard</a>.
      </p>
    </Container>
)

export default Footer
