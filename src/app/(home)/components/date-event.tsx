import { CalendarIcon, ClockIcon, TvMinimalIcon } from 'lucide-react'

export const DateEvent = () => {
  return (
    <ul className="flex flex-wrap items-center gap-4">
      <li className="flex items-center gap-1 text-sm text-gray-300">
        <CalendarIcon className="text-purple size-4 shrink-0" />
        15 a 17 de março
      </li>
      <li className="flex items-center gap-1 text-sm text-gray-300">
        <ClockIcon className="text-purple size-4 shrink-0" />
        18h às 21h
      </li>
      <li className="flex items-center gap-1 text-sm text-gray-300">
        <TvMinimalIcon className="text-purple size-4 shrink-0" />
        Online e Gratuito
      </li>
    </ul>
  )
}
