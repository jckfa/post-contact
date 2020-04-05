import { css } from 'styled-components'

const breakpoints = {
    xs: 320,
     s: 640,
     m: 960,
     l: 1280,
    xl: 1600,
   xxl: 1920,
  xxxl: 2240
}

const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  const emSize = breakpoints[label] / 16
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export default media

// Usage
//
// const Container = styled.div`
//   ${media.s`color: red`}
// `
