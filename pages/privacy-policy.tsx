import type { NextPage } from 'next'
import React from 'react'
import { PlainTextPage } from '../components/PlainTextPage'
import { useTranslation } from '../hooks/useTranslation'

const Index: NextPage = () => {
  const { __, ___ } = useTranslation()

  return (
    <PlainTextPage
      heading={__('privacyPolicyTitle')}
    >
      {___('privacyPolicyContent', 'div')}
    </PlainTextPage>
  )
}

export default Index
