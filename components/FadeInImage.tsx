import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'
import React from 'react'

export type FadeInImageProps = ImageProps;

export const FadeInImage: React.FC<FadeInImageProps> = (props) => {

  const [loaded, setLoaded] = React.useState(false)

  return (
    <Image
      {...props}
      className={clsx('transition duration-700', {
        'opacity-0': !loaded,
      })}
      onLoad={() => setLoaded(true)}
    />
  )
}
