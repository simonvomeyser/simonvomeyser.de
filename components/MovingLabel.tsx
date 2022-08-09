import clsx from 'clsx'
import React from 'react'

export type MovingLabelProps = {
  htmlFor: string,
  text: string,
  moveFlag: boolean
  className?: string
};

export const MovingLabel: React.FC<MovingLabelProps> = ({ htmlFor, text, moveFlag, className }) => {

  return (
    <label htmlFor={htmlFor}
           className={clsx(' absolute text-neutral-500 transition-all inline-block  p-1 ', {
             'left-1 top-0 text-xxs opacity-70': moveFlag,
             'left-3 top-[15px] opacity-50': !moveFlag,
           }, className)}>
      {text}
    </label>
  )
}