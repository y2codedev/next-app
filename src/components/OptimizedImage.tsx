'use client'

import Image, { ImageProps } from 'next/image'

interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  loading?: 'lazy'
  fill?: boolean
}

const OptimizedImage = ({
  src,
  alt,
  width = 50,
  height = 30,
  priority = false,
  loading,
  fill = false,
  ...rest
}: OptimizedImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      {...(fill
        ? { fill: true }
        : { width, height })}
      priority={priority}
      loading={priority ? undefined : loading ?? 'lazy'}
      quality={100}
      sizes={fill ? '100vw' : undefined}
      className={`object-cover ${fill ? 'w-full h-full' : ''}`}
      {...(fill ? { style: { objectFit: 'cover' } } : {})}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
      {...rest}
    />
  )
}

export default OptimizedImage