import clsx from 'clsx'
import Head from 'next/head'
import Link from 'next/link'
import React, { useContext } from 'react'
import { MobileMenuContext } from '../contexts/MobileMenuContext'
import { useTranslation } from '../hooks/useTranslation'
import BurgerSvg from '../svg/burger.svg'
import LogoSvg from '../svg/logo.svg'
import ActiveLink from './ActiveLink'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Navigation } from './Navigation'


export type LayoutProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({
                                                className,
                                                children,
                                              }) => {

  const { isMainNavigationOpen, setIsMainNavigationOpen } = useContext(MobileMenuContext)
  const { __ } = useTranslation()

  return (
    <div className={clsx('flex min-h-[var(--100vh)] bg-neutral-100 antialiased font-sans', className)}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
        <link rel='manifest' href='/favicon/site.webmanifest' />
      </Head>

      <Navigation />

      <div className='overflow-hidden mx-auto'>

        <main className={clsx('flex-1 sm:pl-[var(--navigationWidthDesktop)] transition-all duration-500', {
          'translate-x-3 sm:translate-x-0': isMainNavigationOpen,
        })}>
          <div className='mx-auto max-w-screen-lg px-4 '>
            <div className='flex justify-between items-center pt-4 pb-3 sm:py-6'>
              <button className={clsx('w-8 h-8  sm:hidden  transition duration-500',
                {
                  'translate-x-16 opacity-0 text-white': isMainNavigationOpen,
                },
              )}
                      onClick={() => setIsMainNavigationOpen(!isMainNavigationOpen)}>
                <BurgerSvg className='w-8 h-auto' />
              </button>
              <div className='text-right hidden sm:block'>
                Simon vom Eyser <span className='text-neutral-400'>{__('landingTitle2')}</span>
              </div>
              <div className='sm:hidden'>
                <Link href='/'>
                  <a>
                    <LogoSvg className='w-7 h-auto' />
                  </a>
                </Link>
              </div>

              <LanguageSwitcher className='hidden sm:block' />


            </div>
            <div className='bg-white shadow-md px-6 md:px-8 py-10 md:py-12 overflow-hidden'>
              {children}
            </div>
            <div className='py-4 text-sm  '>
              <div className='flex justify-center sm:hidden mb-4'>
                <LanguageSwitcher />
              </div>
              <div
                className='flex flex-col xs:flex-row text-center justify-center sm:justify-end space-y-3 xs:space-y-0 space-x-3'>
                <ActiveLink href='/legal-notice' activeClassName='!text-neutral-600 font-bold block'>
                  <a className='text-neutral-400'>
                    {__('legalNoticeTitle')}
                  </a>
                </ActiveLink>
                <ActiveLink href='/privacy-policy' activeClassName='!text-neutral-600 font-bold block'>
                  <a className='text-neutral-400'>
                    {__('privacyPolicyTitle')}
                  </a>
                </ActiveLink>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}
