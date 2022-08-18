import Head from 'next/head'
import React from 'react'
import { PageHeading } from './PageHeading'
import { Seo } from './Seo'


export type PlainTextPageProps = {
  heading: string;
  children?: React.ReactNode;
};

export const PlainTextPage: React.FC<PlainTextPageProps> = ({
                                                              heading,
                                                              children,
                                                            }) => {

  return (
    <>
      <Seo pageTitle={heading} />
      <Head>
        <meta name='robots' content='noindex' />
      </Head>
      <PageHeading>
        <h1>{heading}</h1>
      </PageHeading>
      <div className='rich-text max-w-screen-sm mx-auto mb-8'>
        {children}
      </div>
    </>
  )
}
