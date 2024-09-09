import Link from 'next/link'

import { useRouter } from 'next/router'
import React from 'react'
import GermanySvg from '../svg/germany.svg'
import UnitedStates from '../svg/united-states.svg'

type LanguageSwitcherProps = {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({className}) => {
  const router = useRouter()

  function isActiveLocale(locale: string) {
    return router.locale === locale
  }

  return (
    <div className={className}>
      <div className='space-x-3 underline flex'>
        <Link
          href={router.pathname}
          locale='en'
          className={isActiveLocale('en') ? '' : 'opacity-30'}
          aria-label=''>

          <UnitedStates className='w-7 h-auto' />

        </Link>
        <Link
          href={router.pathname}
          locale='de'
          className={isActiveLocale('de') ? '' : 'opacity-30'}>

          <GermanySvg className='w-7 h-auto' />

        </Link>
      </div>
    </div>
  );
}
