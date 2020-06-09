import styled from 'styled-components'
import MarqueeText from 'react-marquee-text-component'

const Notice = styled(MarqueeText)`
  color: black;
  text-align: center;
  text-decoration: none;
  line-height: 1;
  width: 100%;
  display: block;
  background-color: #fc0;
  padding: 0.4em 0.25em 0.25em;

  & div + div {
    margin-left: 2em;
  }
`

export default Notice
