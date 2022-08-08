import { useRouter } from 'next/router'
import React from 'react'
import de from '../translations/de'
import en from '../translations/en'

const TRANSLATIONS = {
  en,
  de,
}

type AvailableLocalesType = 'en' | 'de';


type TranslationKeyType = keyof typeof de;

const germanKeys = Object.keys(de)
const englishKeys = Object.keys(en)
if (englishKeys.length !== germanKeys.length) {

  const missingKeys = englishKeys.filter(key => !germanKeys.includes(key))
    .concat(germanKeys.filter(key => !englishKeys.includes(key)))

  throw new Error('One translation file has translations not contained in the other: ' + missingKeys.join(', '))
}

const translate = (locale: AvailableLocalesType = 'en', token: TranslationKeyType) => {
  let value

  try {
    value = TRANSLATIONS[locale][token]
  } catch (e) {
    console.warn('Translation Error ', e)
    value = token
  }

  return value
}


export const useTranslation = () => {

  const locale = useRouter().locale as AvailableLocalesType

  const __ = (token: TranslationKeyType) => translate(locale, token)

  const ___ = (token: TranslationKeyType) => React.createElement('span', { dangerouslySetInnerHTML: { __html: translate(locale, token) } })

  return { __, ___ }
}
