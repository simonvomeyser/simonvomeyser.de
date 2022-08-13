import clsx from 'clsx'
import React from 'react'

export type PageHeadingProps = {
  className?: string;
  children?: React.ReactNode;
};

export const PageHeading: React.FC<PageHeadingProps> = ({
                                                          className,
                                                          children,
                                                        }) => {

  return (
    <div className={clsx('text-3xl sm:text-4xl text-center text-teal-400 mb-8 sm:mb-12 font-medium  font-special', className)}>
      {children}
    </div>
  )
}
