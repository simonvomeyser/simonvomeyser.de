import clsx from 'clsx'
import Image, { ImageProps } from 'next/legacy/image'
import React from 'react'

export type FadeInImageProps = ImageProps & { alt: string };

export const FadeInImage: React.FC<FadeInImageProps> = ({ alt, ...props }) => {

  const [loaded, setLoaded] = React.useState(false)

  return (
    <Image
      {...props}
      alt={alt}
      className={clsx('transition duration-700', {
        'opacity-0': !loaded,
      })}
      onLoad={() => setLoaded(true)}
    />
  )
}
