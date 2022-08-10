import type { NextPage } from 'next'
import React, { useState } from 'react'
import { ContactForm } from '../components/ContactForm'
import { ContactFormAlertBox } from '../components/ContactFormAlertBox'
import { Layout } from '../components/Layout'
import { PageHeading } from '../components/PageHeading'
import { useTranslation } from '../hooks/useTranslation'


const Index: NextPage = () => {
  const { __, ___ } = useTranslation()
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  return (
    <Layout>
      <PageHeading>
        <h1>{__('navigationContact')}</h1>
      </PageHeading>
      <div className='rich-text max-w-screen-sm mx-auto mb-8'>
        {___('contactFormCopy')}
      </div>
      <div className='max-w-screen-xs mx-auto'>

        {submitStatus ? (

          <ContactFormAlertBox submitStatus={submitStatus} />

        ) : (

          <ContactForm setSubmitStatus={setSubmitStatus} />

        )}

      </div>

    </Layout>
  )
}

export default Index
