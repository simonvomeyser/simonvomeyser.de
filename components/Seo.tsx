import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from '../hooks/useTranslation'

export type SeoProps = {
  pageTitle?: string;
  description?: string;
  image?: string;
};

export const Seo: React.FC<SeoProps> = ({ pageTitle, description, image }) => {
  const { pathname } = useRouter()
  const { __ } = useTranslation()

  const alternateUrlDe = `https://simonvomeyser.de${pathname}`
  const alternateUrlDefault = `https://simonvomeyser.com${pathname}`

  const title = pageTitle ? `${pageTitle} | ${__('defaultMetaTitle')}` : __('defaultMetaTitle')
  const finalDescription = description || __('defaultMetaDescription')

  const finalImage = image || `https://simonvomeyser.com/og-image.png`;

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={finalDescription} />
      <meta name='keywords' content={__('metaKeywords')} />
      <meta property='og:image' content={finalImage} />
      <meta name='twitter:image' content={finalImage} />
      <link rel='alternate' href={alternateUrlDe} hrefLang='de' />
      <link rel='alternate' href={alternateUrlDefault} hrefLang='x-default' />
    </Head>
  )
}
