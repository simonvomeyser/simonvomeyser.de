import type { NextPage } from 'next'
import React from 'react'
import { PlainTextPage } from '../components/PlainTextPage'
import { useTranslation } from '../hooks/useTranslation'


const Index: NextPage = () => {
  const { __, ___ } = useTranslation()

  return (
    <PlainTextPage heading={__('legalNoticeTitle')}>
        {___('legalNoticeContent', 'div')}
    </PlainTextPage>
  )
}

export default Index
