import clsx from 'clsx'
import React from 'react'

export type AlertBoxProps = {
  className?: string;
  heading: string;
  children?: React.ReactNode;
  type?: 'success' | 'error';
};

export const AlertBox: React.FC<AlertBoxProps> = ({
  className,
  heading,
  children,
  type = 'success',
}) => {

  return (
	<div className={clsx('border-2 p-4', className, {
    'bg-teal-100 border-teal-300 text-teal-400': type === 'success',
    'bg-red-100 border-red-300 text-red-400': type === 'error',
  })}>
		<div className="text-lg mb-2">{heading}</div>
    <div className="">
      {children}
    </div>
	</div>
  );
};
