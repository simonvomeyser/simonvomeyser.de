import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { MobileMenuContext } from '../contexts/MobileMenuContext'
import { useTranslation } from '../hooks/useTranslation'
import CrossSvg from '../svg/cross.svg'
import LogoNavigation from '../svg/logo-navigation.svg'
import PaperPlaneSvg from '../svg/paper-plane.svg'
import ProjectsSvg from '../svg/projects.svg'
import UserSvg from '../svg/user.svg'
import WriteSvg from '../svg/write.svg'
import { NavigationElement } from './NavigationElement'


export const Navigation: React.FC = () => {

  const { __ } = useTranslation()
  const { isMainNavigationOpen, setIsMainNavigationOpen } = useContext(MobileMenuContext)
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = () => {
      setIsMainNavigationOpen(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  })

  return (
    <div>

      <nav
        className={clsx('w-[var(--navigationWidthDesktop)] bg-neutral-600 px-2 py-4 flex flex-col items-center fixed h-full z-20 transition duration-500 shadow sm:shadow-0', {
          '-translate-x-full sm:translate-x-0': !isMainNavigationOpen,
        })}>
        <Link href='/' className='mb-8 inline-block'>

          <LogoNavigation className='w-10 h-auto' />

        </Link>
        <div className='flex flex-col items-center space-y-6'>
          <NavigationElement href='/' text={__('navigationAboutMe')}>
            <UserSvg className='w-8 h-auto' />
          </NavigationElement>
          <NavigationElement href='/projects' text={__('navigationProjects')}>
            <ProjectsSvg className='w-8 h-auto' />
          </NavigationElement>
          <NavigationElement href='/contact' text={__('navigationContact')}>
            <PaperPlaneSvg className='w-8 h-auto' />
          </NavigationElement>
          <NavigationElement href='/blog' text={__('navigationBlog')}>
            <WriteSvg className='w-8 h-auto' />
          </NavigationElement>

        </div>
      </nav>
      <div className={clsx(' bg-black fixed z-10 inset-0 w-full h-full transition duration-500 sm:hidden', {
        'opacity-60': isMainNavigationOpen,
        'opacity-0 pointer-events-none': !isMainNavigationOpen,
      })}
           onClick={() => setIsMainNavigationOpen(false)}
      ></div>
      <button className={clsx('fixed top-4  transition z-20 transition-all duration-500 sm:hidden', {
        'opacity-0 pointer-events-none left-8 scale-0': !isMainNavigationOpen,
        'left-20 scale-100' : isMainNavigationOpen,
      })}
              onClick={() => setIsMainNavigationOpen(false)}
      >

        <CrossSvg className='w-8 h-auto text-white'  />

      </button>
    </div>
  );
}
