import { useRouter } from 'next/router'
import React from 'react'
import de from '../translations/de'
import en from '../translations/en'

const TRANSLATIONS = {
  en,
  de,
}
type AvailableLocalesType = 'en' | 'de';

const translate = (locale: AvailableLocalesType = 'en', token: string) => {
  let value

  try {
    // @ts-ignore
    value = TRANSLATIONS[locale][token]
  } catch (e) {
    console.error('Translation Error ', e)
    value = token
  }

  return value
}


const useTranslation = () => {

  const { locale } = useRouter()

  // @ts-ignore
  const __ = (token: string) => translate(locale, token)

  // @ts-ignore
  const ___ = (token: string) => React.createElement('span', { dangerouslySetInnerHTML: { __html: translate(locale, token) } })

  return { __, ___ }
}

export default useTranslation