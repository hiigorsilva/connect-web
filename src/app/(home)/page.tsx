import logo from '@/assets/images/logo.svg'
import { ContainerApp } from '@/components/container-app'
import { Subtitle } from '@/components/subtitle'
import { Title } from '@/components/title'
import {} from '@/components/ui/input'
import { RadioIcon } from 'lucide-react'
import Image from 'next/image'
import { DateEvent } from './components/date-event'
import { SubscriptionForm } from './components/subscription-form'

const Home = async () => {
  return (
    <ContainerApp className="flex-1 px-5 py-6 md:py-16 space-y-8">
      <div className="flex flex-col items-center md:items-start gap-6">
        <Image src={logo} alt="Logo" width={108} height={30} priority />
        <Title className="text-center md:text-left">
          <span className="block text-blue">CodeCraft</span>
          Summit 2025
        </Title>
      </div>

      <div className="flex flex-col md:flex-row items-stretch gap-4">
        {/* HEADER CARD */}
        <div className="w-full flex flex-col gap-6 p-6 rounded-2xl bg-gray-700">
          <div className="flex justify-between items-center gap-6">
            <Subtitle>Sobre o evento</Subtitle>

            <span className="font-semibold flex items-center gap-1 text-xs text-purple uppercase leading-none">
              <RadioIcon className="size-4 shrink-0" />
              Ao vivo
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm md:text-base text-gray-300 leading-relaxed text-pretty">
              Um evento feito por e para pessoas desenvolvedoras apaixonadas por
              criar soluções inovadoras e compartilhar conhecimento. Vamos
              mergulhar nas tendências mais recentes em desenvolvimento de
              software, arquitetura de sistemas e tecnologias emergentes, com
              palestras, workshops e hackathons.
            </p>

            <DateEvent />
          </div>
        </div>

        <SubscriptionForm />
      </div>
    </ContainerApp>
  )
}

export default Home
