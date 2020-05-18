import React from 'react'
import styled, {css} from 'styled-components'
import {colors} from './config/vars'

const Shell = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  & p {
    max-width: 90%;
    color: black;
    text-align: center;
    white-space: nowrap;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: inline-block;
    background-color: ${colors.purple};
    border-radius: 100px;
    padding: 0.25em 1em;
  }
`

const Table = styled.table`
  width: 100%;
  height: 100%;
  border-Collapse: Collapse;
  background-color: ${colors.white};
`

const B = styled.tbody``
const R = styled.tr``
const C = styled.td`
  ${props => props.color && css`
    background-color: ${colors.orange};
  `}
`

const DefaultPoster = () => (
  <Shell>
    {/* <p>Uh-oh, the image hasn’t loaded :/</p> */}
    <p>Loading image...</p>
    <Table>
      <B>
        <R>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
        </R>
        <R>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
        </R>
        <R>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
        </R>
        <R>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
        </R>
        <R>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
        </R>
        <R>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
        </R>
        <R>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
        </R>
        <R>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
          <C color/>
          <C/>
        </R>
      </B>
    </Table>
  </Shell>
)

export default DefaultPoster
