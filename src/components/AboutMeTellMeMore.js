import React, { Component } from 'react'
import { StyledTextSection } from '../styled-components'
import styled from 'styled-components'
import { vars } from '../util/vars'
import posed from 'react-pose'
import { on } from 'src/util/breakpoint'
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl'
import { LogoSvg } from '../svg'
import SocialLinks from '../components/SocialLinks'
import { StyledContainer } from '../styled-components/Container'
import Link from 'src/i18n/Link'

class AboutMeTellMeMore extends Component {
  render() {
    const yearsAsDeveloper = new Date(Date.now()).getFullYear() - 2011
    const projectLink = (
      <Link to="/projects">
        <FormattedMessage id="navigationProjects" />
      </Link>
    )
    const contactLink = (
      <Link to="/contact">
        <FormattedMessage id="navigationContact" />
      </Link>
    )
    return (
      <>
        <PosedFadeInArea
          pose={this.props.visible ? 'tellMeMoreVisible' : 'initial'}
        >
          <PosedFadeInAreaChild>
            <StyledLine />
          </PosedFadeInAreaChild>
          <PosedFadeInAreaChild>
            <FormattedHTMLMessage id="aboutMeReadMoreHeading1" />
          </PosedFadeInAreaChild>
          <PosedFadeInAreaChild>
            <StyledContainer small>
              <StyledTextSection>
                <FormattedHTMLMessage
                  id="aboutMeReadMoreText1"
                  values={{ yearsAsDeveloper }}
                />
              </StyledTextSection>
            </StyledContainer>
            <FormattedHTMLMessage id="aboutMeReadMoreHeading2" />
            <StyledTextSection>
              <StyledContainer small>
                <FormattedHTMLMessage id="aboutMeReadMoreText2" />
                <p>
                  <FormattedMessage
                    id="aboutMeReadMoreText3"
                    values={{ projectLink, contactLink }}
                  />
                </p>
                <FormattedHTMLMessage id="aboutMeReadMoreText4" />
              </StyledContainer>
            </StyledTextSection>
            <SocialLinks />
          </PosedFadeInAreaChild>
        </PosedFadeInArea>
      </>
    )
  }
}

export default AboutMeTellMeMore

const StyledFadeInArea = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 800px;
  h2 {
    font-size: ${vars.styles.fontSizes.size7};
    font-family: ${vars.styles.fontFamilies.special};
    color: ${vars.styles.colors.neutral5};
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`

const StyledLine = styled.div`
  max-width: 300px;
  height: 3px;
  background-color: ${vars.styles.colors.accent4};
  padding: 0 1rem;
  margin: 0 auto 3rem auto;
`

const PosedFadeInAreaChild = posed.div({
  initial: {
    opacity: 0,
    y: 150,
  },
  tellMeMoreVisible: {
    opacity: 1,
    duration: 2000,
    y: 0,
  },
})

const PosedFadeInArea = posed(StyledFadeInArea)({
  initial: {
    opacity: 0,
    display: 'none',
  },
  tellMeMoreVisible: {
    delay: 700,
    delayChildren: 300,
    staggerChildren: 500,
    applyAtStart: { display: 'block' },
    opacity: 1,
  },
})
