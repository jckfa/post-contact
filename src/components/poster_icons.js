import React from 'react'
import styled from 'styled-components'
import {tint} from 'polished'
import {colors} from './config/vars'
import Loop from 'react-text-loop'

const Table = styled.table`
  width: 4em;
  height: 5.3333em;
  border-Collapse: Collapse;
`

const B = styled.tbody``
const R = styled.tr``
const C = styled.td`
  border: 2px solid currentColor;

  ${props => props.tint && `
    border-color: ${tint(0.8, colors.black)};
  `}
`

// const Small1x1 = () => (
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

// const Small2x1 = () => (
//   <Table>
//     <B>
//       <R>
//         <C rowSpan='2'/>
//         <C rowSpan='2'/>
//         <C tint/>
//         <C tint/>
//       </R>
//       <R>
//         <C tint/>
//         <C tint/>
//       </R>
//       <R>
//         <C tint/>
//         <C tint/>
//         <C tint/>
//         <C tint/>
//       </R>
//       <R>
//         <C tint/>
//         <C tint/>
//         <C tint/>
//         <C tint/>
//       </R>
//     </B>
//   </Table>
// )
// 
// const Small1x2 = () => (
//   <Table>
//     <B>
//       <R>
//         <C colSpan='2'/>
//         <C tint/>
//         <C tint/>
//       </R>
//       <R>
//         <C colSpan='2'/>
//         <C tint/>
//         <C tint/>
//       </R>
//       <R>
//         <C tint/>
//         <C tint/>
//         <C tint/>
//         <C tint/>
//       </R>
//       <R>
//         <C tint/>
//         <C tint/>
//         <C tint/>
//         <C tint/>
//       </R>
//     </B>
//   </Table>
// )
//
// const Small2x2 = () => (
//   <Table>
//     <B>
//       <R>
//         <C/>
//         <C/>
//         <C tint/>
//         <C tint/>
//       </R>
//       <R>
//         <C/>
//         <C/>
//         <C tint/>
//         <C tint/>
//       </R>
//       <R>
//         <C tint/>
//         <C tint/>
//         <C tint/>
//         <C tint/>
//       </R>
//       <R>
//         <C tint/>
//         <C tint/>
//         <C tint/>
//         <C tint/>
//       </R>
//     </B>
//   </Table>
// )

// export const SmallPosterIcon = () => (
//   <FixBug
//     interval={2000}
//     springConfig={{ stiffness: 300, damping: 24 }}
//     mask={true}>
//     <Small1x1/>
//     <Small2x1/>
//     <Small1x2/>
//     <Small2x2/>
//   </FixBug>
// )

export const SmallPosterIconText = () => (
  <span>
    <Loop
      interval={2000}
      springConfig={{ stiffness: 300, damping: 24 }}
      mask={true}
      children={[
        "1×1", "2×1", "1×2", "2×2"
      ]}
    />
  </span>
)

const Big1x1 = () => (
  <Table>
    <B>
      <R>
        <C/>
      </R>
    </B>
  </Table>
)

const Big2x1 = () => (
  <Table>
    <B>
      <R>
        <C/>
        <C/>
      </R>
    </B>
  </Table>
)

const Big1x2 = () => (
  <Table>
    <B>
      <R>
        <C/>
      </R>
      <R>
        <C/>
      </R>
    </B>
  </Table>
)

const Big2x2 = () => (
  <Table>
    <B>
      <R>
        <C/>
        <C/>
      </R>
      <R>
        <C/>
        <C/>
      </R>
    </B>
  </Table>
)

const Big4x1 = () => (
  <Table>
    <B>
      <R>
        <C/>
        <C/>
        <C/>
        <C/>
      </R>
    </B>
  </Table>
)

const Big1x4 = () => (
  <Table>
    <B>
      <R>
        <C/>
      </R>
      <R>
        <C/>
      </R>
      <R>
        <C/>
      </R>
      <R>
        <C/>
      </R>
    </B>
  </Table>
)

const Big4x2 = () => (
  <Table>
    <B>
      <R>
        <C/>
        <C/>
        <C/>
        <C/>
      </R>
      <R>
        <C/>
        <C/>
        <C/>
        <C/>
      </R>
    </B>
  </Table>
)

const Big2x4 = () => (
  <Table>
    <B>
      <R>
        <C/>
        <C/>
      </R>
      <R>
        <C/>
        <C/>
      </R>
      <R>
        <C/>
        <C/>
      </R>
      <R>
        <C/>
        <C/>
      </R>
    </B>
  </Table>
)

const Big4x4 = () => (
  <Table>
    <B>
      <R>
        <C/>
        <C/>
        <C/>
        <C/>
      </R>
      <R>
        <C/>
        <C/>
        <C/>
        <C/>
      </R>
      <R>
        <C/>
        <C/>
        <C/>
        <C/>
      </R>
      <R>
        <C/>
        <C/>
        <C/>
        <C/>
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

export const BigPosterIconText = () => (
  <span>
    <Loop
      interval={2000}
      springConfig={{ stiffness: 300, damping: 24 }}
      mask={true}
      children={[
        "1×1", "2×1", "1×2", "2×2", "4×1", "1×4", "4×2", "2×4", "4×4"
      ]}
    />
  </span>
)
