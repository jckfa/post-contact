import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
`

function Repeat(props) {
  let items = []
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i))
  }
  return <List>{items}</List>
}

export default Repeat


// usage
//
// <Repeat numTimes="3">
//   {index =>
//     <li key={index}>Text to repeat</li>
//   }
// </Repeat>
