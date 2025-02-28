import medalCooper from '@/assets/images/medal-cooper.svg'
import medalGold from '@/assets/images/medal-gold.svg'
import medalSilver from '@/assets/images/medal-silver.svg'
import { Subtitle } from '@/components/subtitle'
import Image from 'next/image'

export const Ranking = () => {
  return (
    <ul className="w-full md:max-w-[440px] space-y-5">
      <Subtitle>Ranking</Subtitle>
      <li className="relative flex items-center gap-1 bg-gray-700 border border-gray-600 rounded-xl">
        <div className="p-6 space-y-1">
          <h3 className="text-gray-300">
            <span className="font-semibold">1°</span> | André Souza
          </h3>
          <span className="font-heading text-2xl text-gray-200">1.128</span>
        </div>
        <Image
          className="absolute top-0 right-6"
          src={medalGold}
          alt="Medalha de ouro"
          width={56}
          height={85}
        />
      </li>

      <li className="relative flex items-center gap-1 bg-gray-700 border border-gray-600 rounded-xl">
        <div className="p-6 space-y-1">
          <h3 className="text-gray-300">
            <span className="font-semibold">2°</span> | John Doe
          </h3>
          <span className="font-heading text-2xl text-gray-200">1.128</span>
        </div>
        <Image
          className="absolute top-0 right-6"
          src={medalSilver}
          alt="Medalha de prata"
          width={56}
          height={85}
        />
      </li>

      <li className="relative flex items-center gap-1 bg-gray-700 border border-gray-600 rounded-xl">
        <div className="p-6 space-y-1">
          <h3 className="text-gray-300">
            <span className="font-semibold">3°</span> | Higor Silva
          </h3>
          <span className="font-heading text-2xl text-gray-200">1.128</span>
        </div>
        <Image
          className="absolute top-0 right-6"
          src={medalCooper}
          alt="Medalha de bronze"
          width={56}
          height={85}
        />
      </li>
    </ul>
  )
}
