import logo from '@/assets/images/logo.svg'
import { ContainerApp } from '@/components/container-app'
import { Subtitle } from '@/components/subtitle'
import { Title } from '@/components/title'
import Image from 'next/image'
import { CardDetails } from './components/card-details'
import { InviteLinkCopy } from './components/invite-link-copy'
import { Ranking } from './components/ranking'

const InvitePage = async () => {
  return (
    <ContainerApp className="flex-1 px-5 py-6 md:py-16 space-y-8">
      <Image src={logo} alt="Logo" width={108} height={30} />
      <div className="flex flex-col md:flex-row md:justify-between items-stretch gap-8">
        {/* LEFTSIDE */}
        <div className="w-full md:w-[55%] flex flex-col justify-between gap-6">
          {/* TITLE INVITE */}
          <div className="space-y-2">
            <Title className="text-4xl">Inscrição confirmada!</Title>
            <p className="text-gray-300 text-pretty">
              Para entrar no evento, acesse o link enviado para seu e-mail.
            </p>
          </div>

          {/* INVITE INFO */}
          <div className="space-y-6">
            <div className="space-y-3">
              <Subtitle>Indique e Ganhe</Subtitle>
              <p className="text-gray-300 text-pretty">
                Convide mais pessoas para o evento e concorra a prêmios
                exclusivos! É só compartilhar o link abaixo e acompanhar as
                inscrições:
              </p>
            </div>

            <InviteLinkCopy />

            <CardDetails />
          </div>
        </div>

        {/* RIGHTSIDE */}
        <Ranking />
      </div>
    </ContainerApp>
  )
}

export default InvitePage
