import BaseNextImage from 'next/image'
import { CSS, styled } from '../config/theme'

export const Image = styled('img', {
  verticalAlign: 'middle',
  maxWidth: '100%',

  variants: {
    radius: {
      '1': {
        borderRadius: '$1',
      },
      '2': {
        borderRadius: '$2',
      },
      '3': {
        borderRadius: '$3',
      },
    },
  },
  defaultVariants: {
    radius: '1',
  },
})

type NextImageProps = React.ComponentProps<typeof BaseNextImage> &
  React.ComponentProps<typeof Image> & {
    css?: CSS
  }

export function NextImage(props: NextImageProps) {
  return <Image as={BaseNextImage} {...props} />
}