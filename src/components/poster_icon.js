import React from 'react'
import styled from 'styled-components'
import {colors} from './config/vars'

const Shell = styled.div`
  width: 4em;
  line-height: 0;
  stroke: ${colors.black};

  & svg {
    stroke-width: 2;
  }
`

export const SmallPosterIcon = () => (
  <Shell>
    <svg viewBox="0 0 122 162">
      <path
        d="M1 1h30v40H1zM31 1h30v40H31zM61 1h30v40H61zM91 1h30v40H91zM1 41h30v40H1zM31 41h30v40H31zM61 41h30v40H61zM1 81h30v40H1zM31 81h30v40H31zM61 81h30v40H61zM91 81h30v40H91zM1 121h30v40H1zM31 121h30v40H31zM61 121h30v40H61zM91 121h30v40H91zM91 41h30v40H91z"
        opacity="0.2"
        fill="none"
      />
      <path
        d="M1 1h60v80H1z"
        stroke={colors.black}
        fill="none"
      />
    </svg>
  </Shell>
)

export const BigPosterIcon = () => (
  <Shell>
    <svg viewBox="0 0 122 162">
      <path
        d="M1 1h30v40H1zM31 1h30v40H31zM61 1h30v40H61zM91 1h30v40H91zM1 41h30v40H1zM31 41h30v40H31zM61 41h30v40H61zM1 81h30v40H1zM31 81h30v40H31zM61 81h30v40H61zM91 81h30v40H91zM1 121h30v40H1zM31 121h30v40H31zM61 121h30v40H61zM91 121h30v40H91zM91 41h30v40H91z"
        opacity="0.2"
        fill="none"
      />
      <path
        d="M1 1h120v160H1z"
        stroke={colors.black}
        fill="none"
      />
    </svg>
  </Shell>
)
