import React, { Component } from 'react'
import styled from 'styled-components'
import { vars } from 'src/util/vars'
import { on } from 'src/util/breakpoint'
import LanguageChooser from 'src/components/LanguageChooser'
import { navigate } from 'src/i18n/navigate'
import NavigationMobileList from './NavigationMobileList'
import NavigationMobileBurger from './NavigationMobileBurger'

import { LogoNavigationSvg } from 'src/svg'
import { Link } from '../i18n'
import { useState } from 'react'

export default function NavigationMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <StyledWrapper>
      <StyledNavigationMobileBar>
        <StyledBurgerWrapper>
          <NavigationMobileBurger
            open={isMenuOpen}
            toggleMenu={toggleMenu}
          />
        </StyledBurgerWrapper>
        <StyledLogoLink to="/">
          <LogoNavigationSvg />
        </StyledLogoLink>
        <LanguageChooser />
      </StyledNavigationMobileBar>
      <NavigationMobileList
        open={isMenuOpen}
        toggleMenu={toggleMenu}
      />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: none;
  ${on('onlyMobile')} {
    display: block;
  }
`

const StyledBurgerWrapper = styled.div`
  svg {
    width: 1.5rem;
    cursor: pointer;
  }
`
const StyledLogoLink = styled(Link)`
  position: absolute;
  top: 1.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  svg {
    height: 2rem;
    width: auto;
  }
`

const StyledNavigationMobileBar = styled.div`
  display: flex;
  z-index: ${vars.styles.zIndices.mobileNavigationBar};
  background-color: ${vars.styles.colors.neutral6};
  width: 100%;
  height: ${vars.styles.sizes.navigationMobileHeight};
  justify-content: space-between;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`
