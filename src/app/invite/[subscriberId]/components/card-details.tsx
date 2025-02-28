import {
  type SubscribeToEvent201,
  getSubscriberInviteClicks,
  getSubscriberRankingPosition,
} from '@/http/api'
import { BadgeCheckIcon, MedalIcon, MousePointerClickIcon } from 'lucide-react'

export const CardDetails = async ({ subscriberId }: SubscribeToEvent201) => {
  const { count: accessCount } = await getSubscriberInviteClicks(subscriberId)
  const { count: inviteCount } = await getSubscriberInviteClicks(subscriberId)
  const { position: rankingPosition } =
    await getSubscriberRankingPosition(subscriberId)

  return (
    <ul className="grid md:grid-cols-3 items-stretch gap-3">
      <li className="relative flex flex-col items-center gap-1 p-6 bg-gray-700 border border-gray-600 rounded-xl">
        <span className="font-heading text-2xl text-gray-200">
          {accessCount}
        </span>
        <h3 className="text-sm text-center text-gray-300">Acessos ao link</h3>
        <MousePointerClickIcon
          className="absolute top-3 left-3 size-5 shrink-0 text-purple"
          strokeWidth={1.5}
        />
      </li>
      <li className="relative flex flex-col items-center gap-1 p-6 bg-gray-700 border border-gray-600 rounded-xl">
        <span className="font-heading text-2xl text-gray-200">
          {inviteCount}
        </span>
        <h3 className="text-sm text-center text-gray-300">Inscrições feitas</h3>
        <BadgeCheckIcon
          className="absolute top-3 left-3 size-5 shrink-0 text-purple"
          strokeWidth={1.5}
        />
      </li>
      <li className="relative flex flex-col items-center gap-1 p-6 bg-gray-700 border border-gray-600 rounded-xl">
        <span className="font-heading text-2xl text-gray-200">
          {rankingPosition ? `${rankingPosition}º` : '-'}
        </span>
        <h3 className="text-sm text-center text-gray-300">
          Posição no ranking
        </h3>
        <MedalIcon
          className="absolute top-3 left-3 size-5 shrink-0 text-purple"
          strokeWidth={1.5}
        />
      </li>
    </ul>
  )
}
