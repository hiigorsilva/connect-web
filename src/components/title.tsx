import { cn } from '@/lib/utils'

type TitleProps = {
  children: React.ReactNode
  type?: 'h1' | 'h2'
  className?: string
}

export const Title = ({ children, type = 'h1', className }: TitleProps) => {
  if (type === 'h2') {
    return (
      <h2 className={cn('font-heading font-medium text-xl', className)}>
        {children}
      </h2>
    )
  }

  return (
    <h1
      className={cn(
        'font-heading font-medium text-4xl md:text-7xl leading-none',
        className
      )}
    >
      {children}
    </h1>
  )
}
