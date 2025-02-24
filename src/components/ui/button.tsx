import { cn } from '@/lib/utils'
import type { ComponentProps, ReactNode } from 'react'

type ButtonProps = ComponentProps<'button'> & {
  children: ReactNode
  className?: string
}

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(
        'w-full h-12 flex justify-between items-center gap-2 font-semibold text-blue bg-gray-500 px-5 rounded-xl cursor-pointer transition-colors duration-200 hover:text-gray-900 hover:bg-blue',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
