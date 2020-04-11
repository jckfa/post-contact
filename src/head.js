import React from 'react'
import {Helmet} from 'react-helmet'
import {site, colors} from './components/config/vars'

const public_url = 'https://post-contact.site/'
const icon = 'assets/img/icon.png'

const Head = () => (
  <Helmet>
    <meta charset='utf-8'/>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
    <meta http-equiv='Accept-CH' content='DPR, Width, Viewport-Width'/>
    <meta name='viewport' content='width=device-width, initial-scale=1'/>
    <meta name='description' content={site.description}/>
    <link rel='shortcut icon'
      href={public_url + icon}/>
    <link rel='apple-touch-icon'
      href={public_url + icon}/>
    <link rel='manifest' href={public_url + 'manifest.json'}/>
    <meta name='theme-color' content={colors.black}/>

    <meta property='og:title'
      content={site.title}/>
    <meta property='og:type'
    content='website'/>
    <meta property='og:url'
      content={public_url}/>
    <meta property='og:image'
      content={public_url + icon}/>
    <meta property='og:site_name'
      content={site.title}/>
    <meta property='og:description'
      content={site.description}/>
    <title>{site.title}</title>
  </Helmet>
)

export default Head