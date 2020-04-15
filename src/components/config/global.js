import { createGlobalStyle } from 'styled-components'
import { colors, fonts } from './vars'
import media from '../utils/media'
import webfont from './webfont'

// eslint-disable-next-line
const GlobalStyle = createGlobalStyle`
  ${webfont}

  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  ::selection {
    color: white;
    background-color: #aa00ff;
    background-color: ${colors.black};
  }

  body {
    color: ${colors.black};
    font: 1.2rem/1.2 ${fonts.reg};
    background-color: ${colors.white};
    ${'' /* letter-spacing: 0.025em; */}
    hyphens: auto;

    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;


    ${media.s`
      font-size: 1.6rem;
    `}
  }

  button {
    color: inherit;
    background: none;
    font: inherit;
    outline: none;
    border: none;
    cursor: pointer;
  }

  a {
    color: inherit;
    // color: ${colors.white};
    // background-color: ${colors.black};
    // text-decoration: none;
  }

  .active {
    border-bottom: 0.075em solid currentColor;
  }

  p {
    max-width: 32em;
  }

  i {
    font-style: italic;
  }

  em {
    font-style: normal;
    box-shadow: 0 0 4px 0 currentColor;
    // text-shadow: 0 0 4px currentColor;
    border-radius: 8px;
    padding: 0 0.25em;
  }

  li {
    margin-left: 1em;
  }
`

export default GlobalStyle
