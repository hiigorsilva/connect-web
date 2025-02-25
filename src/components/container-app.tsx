import { cn } from '@/lib/utils'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export const ContainerApp = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn('max-w-[1240px] w-full h-full mx-auto', className)}>
      {children}
    </div>
  )
}
