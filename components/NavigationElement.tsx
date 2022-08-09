import clsx from 'clsx'
import React from 'react'
import ActiveLink from './ActiveLink'

export type NavigationElementProps = {
  className?: string;
  children?: React.ReactNode;
  text: string;
  href: string;
};

export const NavigationElement: React.FC<NavigationElementProps> = ({
                                                                      className,
                                                                      children,
                                                                      text,
                                                                      href,
                                                                    }) => {

  return (
    <ActiveLink activeClassName='!text-white' href={href}>
      <a
        className={clsx('flex flex-col space-y-2.5 text-neutral-400 font-bold text-xxs justify-center items-center transition-all duration-500', className)}>
        <span>
          {children}
        </span>
        <span>
          {text}
        </span>
      </a>
    </ActiveLink>
  )
}
