import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

type InputProps = ComponentProps<'div'> & {
  error?: boolean
  className?: string
}
export const InputRoot = ({
  error = false,
  className,
  ...props
}: InputProps) => {
  return (
    <div
      data-error={error}
      className={cn(
        'group h-12 flex items-center gap-2 px-4 bg-gray-800 border border-gray-600 rounded-xl focus-within:border-gray-100 data-[error=true]:border-danger',
        className
      )}
      {...props}
    />
  )
}

type InputIconProps = ComponentProps<'span'> & {
  className?: string
}
export const InputIcon = ({ className, ...props }: InputIconProps) => {
  return (
    <span
      className={cn(
        'group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger',
        className
      )}
      {...props}
    />
  )
}

type InputFieldProps = ComponentProps<'input'> & {
  className?: string
}
export const InputField = ({ className, ...props }: InputFieldProps) => {
  return (
    <input
      className={cn(
        'flex-1 w-full h-full text-gray-100 outline-0 placeholder:text-gray-400',
        className
      )}
      {...props}
    />
  )
}
