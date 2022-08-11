import clsx from 'clsx'
import React from 'react'

export type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({
  className,
  children
}) => {

  return (
	<div className={clsx('max-w-screen-sm mx-auto mb-8', className)}>
    {children}
	</div>
  );
};
