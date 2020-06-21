import React from 'react'
import { NavLink as A } from 'react-router-dom';
import styled from 'styled-components'
import {site} from '../config/vars'
import Heading from '../utils/Heading'

const Container = styled.header`
  margin-bottom: 6em;
`

const Beta = styled.span`
  font-size: 0.5em;
  line-height: 0.5;
  text-transform: uppercase;
  display: inline-block;
  border: 1px solid currentColor;
  border-radius: 4px;
  padding: 7px 3px 4px;
  position: relative;
  bottom: 0.3em;
`

const Nav = styled.nav`
  width: 100%;
  display: flex;

  & a {
    width: 100%;
    text-decoration: none;
    ${'' /* background-color: orange; */}
    padding: 0.5em 0;
    border-bottom: 0.075em dashed currentColor;

    &.active {
      border-bottom: 0.075em solid currentColor;
    }
  }
`

const Header = () => (
  <Container>
    <Heading>{site.title} <Beta>Beta</Beta></Heading>
    <Nav>
      <A exact to="/">Submit</A>
      <A to="/about">About</A>
      <A to="/download">Download</A>
    </Nav>
  </Container>
)

export default Header
