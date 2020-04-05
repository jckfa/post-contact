import React from 'react'
import styled from 'styled-components'
import media from './utils/media'
import { site, colors } from './config/vars'
import updated from './data/updated_time'

const Flex = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  ${'' /* background-color: white; */}

  & li {
    position: relative;
  }
`

const Padded = styled.span`
  display: inline-block;
  padding: 0.5em;

  ${media.s`
    padding: 0.75em;
  `}
`

const InfoBtn = styled(Padded)`
  background-color: ${props => props.info ? colors.accent : ''};
  cursor: pointer;
`

const Info = styled.div`
  width: 16em;
  max-width: 100vw;
  background-color: ${colors.accent};
  border-radius: 12px 0 12px 12px;
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 2;
`

const Section = styled.section`
  & + & {
    border-top: 2px solid black;
  }
`

const FlexThese = styled.div`
  display: flex;

  & a {
    text-align: center;
    text-decoration: none;
    width: 100%;
    display: block;
  }

  & a + a {
    border-left: 2px solid black;
  }
`

const Header = (props) => (
  <Flex>
    <li>
      <Padded>{site.name}</Padded>
    </li>

    <li>
      <InfoBtn info={props.info} onClick={props.toggle}>
        Info
      </InfoBtn>

      {props.info &&
        <Info>
          <Section>
            <Padded>
              <p>
                Jack Halten Fahnestock<br/>
                B. 1995, North Carolina, USA
              </p>

              <p><a href={site.pofo} target="_blank" rel="noopener noreferrer">PDF Portfolio</a> (14Mb)</p>

              <p>
                <i>Currently</i><br/>
                Full-time student at <a href="https://risd.edu" target="_blank" rel="noopener noreferrer">RISD</a>.<br/>
              </p>
            </Padded>
          </Section>

          <Section>
            <FlexThese>
              <a href={`mailto:` + site.email}>
                <Padded>
                  {site.email}
                </Padded>
              </a>
            </FlexThese>
          </Section>

          <Section>
            <FlexThese>
              <a href={site.pgp} target="_blank" rel="noopener noreferrer">
                <Padded>
                  PGP
                </Padded>
              </a>
              <a href={site.cv} target="_blank" rel="noopener noreferrer">
                <Padded>
                  CV
                </Padded>
              </a>
            </FlexThese>
          </Section>

          <Section>
            <FlexThese>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                <Padded>
                  Instagram
                </Padded>
              </a>
              <a href={site.twitter} target="_blank" rel="noopener noreferrer">
                <Padded>
                  Twitter
                </Padded>
              </a>
            </FlexThese>
          </Section>

          <Section>
            <FlexThese>
              <a href={site.arena} target="_blank" rel="noopener noreferrer">
                <Padded>
                  Are.na
                </Padded>
              </a>
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                <Padded>
                  GitHub
                </Padded>
              </a>
            </FlexThese>
          </Section>

          <Section>
            <Padded>
              Updated: {updated} <a href="https://time.is/UTC" target="_blank" rel="noopener noreferrer">UTC</a>
            </Padded>
          </Section>
        </Info>
      }
    </li>
  </Flex>
)

export default Header
