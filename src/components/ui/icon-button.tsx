import { cn } from '@/lib/utils'
import type { ComponentProps, ReactNode } from 'react'

type IconButtonProps = ComponentProps<'button'> & {
  children: ReactNode
  className?: string
}

export const IconButton = ({
  children,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={cn(
        'text-blue p-1.5 bg-gray-500 rounded-md cursor-pointer transition-colors duration-200 hover:text-gray-900 hover:bg-blue',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
