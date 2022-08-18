import Link from 'next/link'

import { useRouter } from 'next/router'
import React from 'react'
import GermanySvg from '../svg/germany.svg'
import UnitedStates from '../svg/united-states.svg'

type LanguageSwitcherProps = {
  className?: string;
}

class availableLocales {
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({className}) => {
  const router = useRouter()

  function isActiveLocale(locale: string) {
    return router.locale === locale
  }

  function setLanguageCookie(forLocale : availableLocales) {
    let today = new Date();
    let expire = new Date();

    // 14 days from now
    expire.setTime(today.getTime() + 3600000*24*14);

    document.cookie = `NEXT_LOCALE=${forLocale}; path=/ ;expires=${expire.toUTCString()}`
  }
  return (
    <div className={className}>
      <div className='space-x-3 underline flex'>
        <Link href={router.pathname} locale='en'
              onClick={() => setLanguageCookie('en')}>
          <a className={isActiveLocale('en') ? '' : 'opacity-30'} aria-label=''>
            <UnitedStates className='w-7 h-auto' />
          </a>
        </Link>
        <Link href={router.pathname} locale='de'>
          <a className={isActiveLocale('de') ? '' : 'opacity-30'}
             onClick={() => setLanguageCookie('de')}>
            <GermanySvg className='w-7 h-auto' />
          </a>
        </Link>
      </div>
    </div>
  )
}
