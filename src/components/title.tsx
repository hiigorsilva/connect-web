import { cn } from '@/lib/utils'

type TitleProps = {
  children: React.ReactNode
  className?: string
}

export const Title = ({ children, className }: TitleProps) => {
  return (
    <h1
      className={cn(
        'font-heading font-medium text-7xl leading-none',
        className
      )}
    >
      {children}
    </h1>
  )
}
