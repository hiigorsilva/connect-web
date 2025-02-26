import { cn } from '@/lib/utils'

type SubtitleProps = {
  children: React.ReactNode
  className?: string
}

export const Subtitle = ({ children, className }: SubtitleProps) => {
  return (
    <h2 className={cn('font-heading font-medium text-xl', className)}>
      {children}
    </h2>
  )
}
