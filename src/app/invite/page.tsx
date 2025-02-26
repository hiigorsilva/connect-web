import medalCooper from '@/assets/images/medal-cooper.svg'
import medalGold from '@/assets/images/medal-gold.svg'
import medalSilver from '@/assets/images/medal-silver.svg'
import { ContainerApp } from '@/components/container-app'
import { Subtitle } from '@/components/subtitle'
import { Title } from '@/components/title'
import { IconButton } from '@/components/ui/icon-button'
import { InputField, InputIcon, InputRoot } from '@/components/ui/input'
import {
  BadgeCheckIcon,
  CopyIcon,
  LinkIcon,
  MedalIcon,
  MousePointerClickIcon,
} from 'lucide-react'
import Image from 'next/image'

const InvitePage = async () => {
  return (
    <ContainerApp className="flex-1 px-5 py-6 md:py-16 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
        {/* LEFTSIDE */}
        <div className="w-full md:w-[55%] space-y-10">
          {/* TITLE INVITE */}
          <div className="space-y-2">
            <Title className="text-4xl">Inscrição confirmada!</Title>
            <p className="text-gray-300 text-pretty">
              Para entrar no evento, acesse o link enviado para seu e-mail.
            </p>
          </div>

          {/* INVITE INFO */}
          <div className="space-y-2">
            <Subtitle>Indique e Ganhe</Subtitle>
            <p className="text-gray-300 text-pretty">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          {/* INPUT LINK */}
          <InputRoot>
            <InputIcon>
              <LinkIcon className="size-4 shrink-0" />
            </InputIcon>
            <InputField defaultValue="devstage.com/codecraft-summit-2025/1289" />
            <IconButton className="-mr-2">
              <CopyIcon className="size-4 shrink-0" />
            </IconButton>
          </InputRoot>

          {/* CARDS DETAILS */}
          <ul className="grid md:grid-cols-3 items-stretch gap-3">
            <li className="relative flex flex-col items-center gap-1 p-6 bg-gray-700 border border-gray-600 rounded-xl">
              <span className="font-heading text-2xl text-gray-200">942</span>
              <h3 className="text-sm text-center text-gray-300">
                Acessos ao link
              </h3>
              <MousePointerClickIcon
                className="absolute top-3 left-3 size-5 shrink-0 text-purple"
                strokeWidth={1.5}
              />
            </li>
            <li className="relative flex flex-col items-center gap-1 p-6 bg-gray-700 border border-gray-600 rounded-xl">
              <span className="font-heading text-2xl text-gray-200">852</span>
              <h3 className="text-sm text-center text-gray-300">
                Inscrições feitas
              </h3>
              <BadgeCheckIcon
                className="absolute top-3 left-3 size-5 shrink-0 text-purple"
                strokeWidth={1.5}
              />
            </li>
            <li className="relative flex flex-col items-center gap-1 p-6 bg-gray-700 border border-gray-600 rounded-xl">
              <span className="font-heading text-2xl text-gray-200">3º</span>
              <h3 className="text-sm text-center text-gray-300">
                Posição no ranking
              </h3>
              <MedalIcon
                className="absolute top-3 left-3 size-5 shrink-0 text-purple"
                strokeWidth={1.5}
              />
            </li>
          </ul>
        </div>

        {/* RIGHTSIDE */}
        <ul className="w-full md:w-[40%] space-y-5">
          <Subtitle>Ranking</Subtitle>
          <li className="relative flex items-center gap-1 bg-gray-700 border border-gray-600 rounded-xl">
            <div className="p-6 space-y-1">
              <h3 className="text-gray-300">1° | André Souza</h3>
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
              <h3 className="text-gray-300">1° | André Souza</h3>
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
              <h3 className="text-gray-300">1° | André Souza</h3>
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
      </div>
    </ContainerApp>
  )
}

export default InvitePage
