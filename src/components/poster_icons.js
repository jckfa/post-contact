import React from 'react'
import styled, {keyframes, css} from 'styled-components'
import {tint} from 'polished'
import {colors} from './config/vars'
import Loop from 'react-text-loop'

const Table = styled.table`
  width: 4em;
  height: 5.3333em;
  border-Collapse: Collapse;
`

// const cycleColors = keyframes`
//     0% {background-color: whiteSmoke}
//    20% {background-color: whiteSmoke}
//    21% {background-color: #fff6a7}
//    40% {background-color: #fff6a7}
//    41% {background-color: papayawhip}
//    60% {background-color: papayawhip}
//    61% {background-color: peachpuff}
//    80% {background-color: peachpuff}
//    81% {background-color: #fa2}
//   100% {background-color: #fa2}
// `

const B = styled.tbody``
const R = styled.tr``
const C = styled.td`
  border: 2px solid currentColor;

  ${props => props.tint && `
    border-color: ${tint(0.8, colors.black)};
  `}

  ${props => props.coloredA && css`
    ${B}:hover & {
      ${'' /* animation: ${cycleColors} 4s linear infinite; */}
      background-color: papayawhip;
      border: none;
    }
  `}

  ${props => props.coloredB && css`
    ${B}:hover & {
      background-color: peachpuff;
      border: none;
    }
  `}
`

export const SmallPosterIcon = () => (
  <Table>
    <B>
      <R>
        <C colSpan='2' rowSpan='2'/>
        <C tint/>
        <C tint/>
      </R>
      <R>
        <C tint/>
        <C tint/>
      </R>
      <R>
        <C tint/>
        <C tint/>
        <C tint/>
        <C tint/>
      </R>
      <R>
        <C tint/>
        <C tint/>
        <C tint/>
        <C tint/>
      </R>
    </B>
  </Table>
)

const Big1x1 = () => (
  <Table>
    <B>
      <R>
        <C coloredA/>
      </R>
    </B>
  </Table>
)

const Big2x1 = () => (
  <Table>
    <B>
      <R>
        <C coloredB/>
        <C coloredA/>
      </R>
    </B>
  </Table>
)

const Big1x2 = () => (
  <Table>
    <B>
      <R>
        <C coloredB/>
      </R>
      <R>
        <C coloredA/>
      </R>
    </B>
  </Table>
)

const Big2x2 = () => (
  <Table>
    <B>
      <R>
        <C coloredB/>
        <C coloredA/>
      </R>
      <R>
        <C coloredA/>
        <C coloredB/>
      </R>
    </B>
  </Table>
)

const Big4x1 = () => (
  <Table>
    <B>
      <R>
        <C coloredB/>
        <C coloredA/>
        <C coloredB/>
        <C coloredA/>
      </R>
    </B>
  </Table>
)

const Big1x4 = () => (
  <Table>
    <B>
      <R>
        <C coloredB/>
      </R>
      <R>
        <C coloredA/>
      </R>
      <R>
        <C coloredB/>
      </R>
      <R>
        <C coloredA/>
      </R>
    </B>
  </Table>
)

const Big4x2 = () => (
  <Table>
    <B>
      <R>
        <C coloredB/>
        <C coloredA/>
        <C coloredB/>
        <C coloredA/>
      </R>
      <R>
        <C coloredA/>
        <C coloredB/>
        <C coloredA/>
        <C coloredB/>
      </R>
    </B>
  </Table>
)

const Big2x4 = () => (
  <Table>
    <B>
      <R>
        <C coloredB/>
        <C coloredA/>
      </R>
      <R>
        <C coloredA/>
        <C coloredB/>
      </R>
      <R>
        <C coloredB/>
        <C coloredA/>
      </R>
      <R>
        <C coloredA/>
        <C coloredB/>
      </R>
    </B>
  </Table>
)

const Big4x4 = () => (
  <Table>
    <B>
      <R>
        <C coloredB/>
        <C coloredA/>
        <C coloredB/>
        <C coloredA/>
      </R>
      <R>
        <C coloredA/>
        <C coloredB/>
        <C coloredA/>
        <C coloredB/>
      </R>
      <R>
        <C coloredB/>
        <C coloredA/>
        <C coloredB/>
        <C coloredA/>
      </R>
      <R>
        <C coloredA/>
        <C coloredB/>
        <C coloredA/>
        <C coloredB/>
      </R>
    </B>
  </Table>
)

const FixBug = styled(Loop)`
  height: 5.3333em;
`

export const BigPosterIcon = () => (
  <FixBug
    interval={2000}
    springConfig={{ stiffness: 300, damping: 24 }}
    mask={true}>
    <Big1x1/>
    <Big2x1/>
    <Big1x2/>
    <Big2x2/>
    <Big4x1/>
    <Big1x4/>
    <Big4x2/>
    <Big2x4/>
    <Big4x4/>
  </FixBug>
)
