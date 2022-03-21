import React from 'react'
import { styled, CSS } from '../config/theme'
import { CaretSortIcon } from '@radix-ui/react-icons'

const SelectWrapper = styled('div', {
  backgroundColor: '$control',
  borderRadius: '$2',
  boxShadow: '$colors$borderInput, $colors$shadow',
  color: '$hiContrast',
  fontFamily: '$sans',
  fontVariantNumeric: 'tabular-nums',
  fontWeight: 400,
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',

  '&:focus-within': {
    zIndex: 1,
    boxShadow: '$colors$borderInputActive, $colors$shadowActive',
  },

  '& > select:disabled': {
    color: '$slate8',
  },

  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        height: '$3-5',
        padding: '0 $1 0 $0-5',
        fontSize: '$12',
        lineHeight: '$sizes$3-5',
      },
      '2': {
        borderRadius: '$1',
        height: '$5',
        padding: '0 $1-5 0 $1',
        fontSize: '$16',
        lineHeight: '$sizes$5',
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
})

const StyledSelect = styled('select', {
  appearance: 'none',
  flex: 1,
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: 'inherit',
  color: 'inherit',
  font: 'inherit',
  outline: 'none',
  width: '100%',
  height: '100%',
  pl: '$1',
  pr: '$2',
  lineHeight: '25px',
})

const StyledCaretSortIcon = styled(CaretSortIcon, {
  pointerEvents: 'none',
})

type SelectProps = Omit<React.ComponentProps<typeof StyledSelect>, 'size'> &
  React.ComponentProps<typeof SelectWrapper> & { css?: CSS }

export const Select = React.forwardRef<
  React.ElementRef<typeof StyledSelect>,
  SelectProps
>(({ css, size, ...props }, forwardedRef) => (
  <SelectWrapper size={size} css={css}>
    <StyledSelect ref={forwardedRef} {...props} />
    <StyledCaretSortIcon />
  </SelectWrapper>
))

Select.toString = () => `.${SelectWrapper.className}`