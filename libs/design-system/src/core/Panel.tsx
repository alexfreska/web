import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

export const panelStyles = cva([
  'bg-white dark:bg-graydark-200',
  'transition-shadow ease-in-out duration-300',
  'shadow-sm hover:shadow',
  'rounded',
  'border',
  'border-gray-400 dark:border-graydark-400',
])

export const Panel = React.forwardRef<
  HTMLDivElement,
  VariantProps<typeof panelStyles> & React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={panelStyles({ className })} {...props} />
})
