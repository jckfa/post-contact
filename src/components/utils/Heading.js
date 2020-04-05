import styled from 'styled-components'

const Heading = styled.div`
  text-transform: uppercase;
  margin-left: 1em;
  margin-top: 0.5em;

  & + p, & + ul {
    padding-top: 0.5em;
  }
`

export default Heading
