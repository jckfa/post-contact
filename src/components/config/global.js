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
  }

  body {
    color: ${colors.black};
    font: 1.2rem/1.2 ${fonts.sans};
    background-color: ${colors.white};
    ${'' /* letter-spacing: 0.025em; */}

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
    color: ${colors.white};
    background-color: ${colors.black};
    text-decoration: none;

    display: inline-block;
    border-radius: 100px;
    padding: 0 0.5em;
    margin: 1px 0;
  }

  .active {
    border-bottom: 0.075em solid currentColor;
  }
`

export default GlobalStyle
