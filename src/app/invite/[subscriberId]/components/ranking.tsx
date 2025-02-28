import medalCooper from '@/assets/images/medal-cooper.svg'
import medalGold from '@/assets/images/medal-gold.svg'
import medalSilver from '@/assets/images/medal-silver.svg'
import { Subtitle } from '@/components/subtitle'
import { getRanking } from '@/http/api'
import Image from 'next/image'

export const Ranking = async () => {
  const { ranking } = await getRanking()

  return (
    <ul className="w-full md:max-w-[440px] space-y-5">
      <Subtitle>Ranking</Subtitle>

      {ranking.map((position, index) => {
        const rankingPosition = index + 1

        return (
          <li
            key={position.id}
            className="relative flex items-center gap-1 bg-gray-700 border border-gray-600 rounded-xl"
          >
            <div className="p-6 space-y-1">
              <h3 className="text-gray-300">
                <span className="font-semibold">{rankingPosition}°</span> |{' '}
                {position.name}
              </h3>
              <span className="font-heading text-2xl text-gray-200">
                {position.score}
              </span>
            </div>
            {rankingPosition === 1 && (
              <Image
                className="absolute top-0 right-6"
                src={medalGold}
                alt="Primeiro lugar"
                width={56}
                height={85}
              />
            )}
            {rankingPosition === 2 && (
              <Image
                className="absolute top-0 right-6"
                src={medalSilver}
                alt="Segundo lugar"
                width={56}
                height={85}
              />
            )}
            {rankingPosition === 3 && (
              <Image
                className="absolute top-0 right-6"
                src={medalCooper}
                alt="Terceiro lugar"
                width={56}
                height={85}
              />
            )}
          </li>
        )
      })}
    </ul>
  )
}
