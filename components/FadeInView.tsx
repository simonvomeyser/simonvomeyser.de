import clsx from 'clsx'
import React from 'react'
import useInView from '../hooks/useInView'

export type FadeInViewProps = {
  className?: string;
  children?: React.ReactNode;
};

export const FadeInView: React.FC<FadeInViewProps> = ({
  className,
  children
}) => {

  const [ ref, inView ] =  useInView()

  return (
	<div ref={ref} className={clsx('transition delay-300 duration-500',{
    'opacity-0': !inView,
  })}>
    {children}
	</div>
  );
};
