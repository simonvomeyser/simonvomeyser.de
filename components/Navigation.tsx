import Link from 'next/link'
import React from 'react'
import { useTranslation } from '../hooks/useTranslation'
import LogoNavigation from '../svg/logo-navigation.svg'
import PaperPlaneSvg from '../svg/paper-plane.svg'
import ProjectsSvg from '../svg/projects.svg'
import UserSvg from '../svg/user.svg'
import WriteSvg from '../svg/write.svg'
import { NavigationElement } from './NavigationElement'


export const Navigation: React.FC = () => {

  const { __ } = useTranslation()
  return (
    <nav className='w-[var(--navigationWidthDesktop)] bg-neutral-600 px-2 py-4 flex flex-col items-center'>
      <Link href='/'>
        <a className='mb-8 inline-block'>
          <LogoNavigation className='w-10 h-auto' />
        </a>
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
  )
}
