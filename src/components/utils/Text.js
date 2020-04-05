import styled from 'styled-components'
import media from './media'
import { spacing } from '../config/vars'

const Text = styled.div`
  padding: ${spacing.target_area}em ${spacing.gutter * 2}em;

  ${media.s`
    padding-left:  ${spacing.gutter * 4}em;
    padding-right: ${spacing.gutter * 4}em;
  `}
`

export default Text
