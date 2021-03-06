import React, { useContext } from 'react'
import posed from 'react-pose'
import Navigation from 'src/components/Navigation'
import { on } from 'src/util/breakpoint'
import { vars } from 'src/util/vars'
import styled from 'styled-components'
import pageContext from '../gatsby-node/pageContext'

export default function Layout({ children, intl }) {

  const { isFrontpage } = useContext(pageContext)

  return (
    <>
      <Navigation />
      <PosedContentWrapper isFrontpage={isFrontpage}>
        {children}
      </PosedContentWrapper>
    </>
  )
}

const StyledContentWrapper = styled.div`
  padding-left: ${vars.styles.sizes.navigationWidth};
  min-height: 100vh;
  background-color: ${vars.styles.colors.neutral1};

  ${on('onlyMobile')} {
    padding-left: 0 !important; /* Needed for pose not to work mobile */
    min-height: calc(100vh - ${vars.styles.sizes.navigationMobileHeight});
  }
`
const PosedContentWrapper = posed(StyledContentWrapper)({
  pageFadedIn: {
    paddingLeft: 70,
    transition: { type: 'spring', damping: 20 },
    delay: ({ isFrontpage }) => {
      return isFrontpage ? 3000 : 1000;
    },
  },
  pageInvisible: {
    paddingLeft: 0,
  },
})