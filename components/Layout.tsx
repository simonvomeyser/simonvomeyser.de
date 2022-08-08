import clsx from 'clsx'
import Head from 'next/head'
import React from 'react'
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

  return (
    <div className={clsx('flex min-h-[var(--100vh)] bg-neutral-100 antialiased font-sans', className)}>
      <Head>
        <title>Simon vom Eyser - Webdevloper</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>


      <Navigation />

      <main className='flex-1 '>
        <div className='mx-auto max-w-screen-lg px-4 '>
          <div className='flex justify-between py-6'>
            <div className=''>Simon vom Eyser <span className='text-neutral-400'>Webentwicklung</span></div>

            <div>
              <LanguageSwitcher />
            </div>

          </div>
          <div className='bg-white shadow-md p-6 md:p-8'>
            {children}
          </div>
          <div className='py-4 text-sm text-right space-x-3 text-neutral-600'>
            <a href='#'>Impressum</a><a href='#'>Datenschutz</a>
          </div>

        </div>
    </main>
	</div>
  );
};