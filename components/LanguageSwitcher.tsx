import Link from 'next/link'

import { useRouter } from 'next/router'
import React from 'react'
import useTranslation from '../hooks/useTranslation'
import GermanySvg from '../svg/germany.svg'
import UnitedStates from '../svg/united-states.svg'


export const LanguageSwitcher: React.FC = () => {
  const router = useRouter()
  const { __ } = useTranslation()


  function isActiveLocale(locale: string) {
    return router.locale === locale
  }

  return (
    <div>
      <div className='space-x-3 underline flex'>
        <Link href={router.pathname} locale='en'>
          <a className={isActiveLocale('en') ? '' : 'opacity-30'} aria-label=''>
            <UnitedStates className='w-7 h-auto' />
          </a>
        </Link>
        <Link href={router.pathname} locale='de'>
          <a className={isActiveLocale('de') ? '' : 'opacity-30'}>
            <GermanySvg className='w-7 h-auto' />
          </a>
        </Link>
      </div>
    </div>
  )
}
