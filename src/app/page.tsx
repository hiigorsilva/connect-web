import { ContainerApp } from '@/components/container-app'
import { Title } from '@/components/title'
import { Button } from '@/components/ui/button'
import { InputField, InputIcon, InputRoot } from '@/components/ui/input'
import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  MailIcon,
  RadioIcon,
  TvMinimalIcon,
  UserIcon,
} from 'lucide-react'
import Image from 'next/image'
import logo from '../assets/images/logo.svg'

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
            <Title type="h2">Sobre o evento</Title>

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
          </div>
        </div>

        {/* FORM CARD */}
        <form className="max-w-none md:max-w-[400px] w-full p-6 rounded-2xl bg-gray-700 space-y-6">
          <Title type="h2">Inscrição</Title>

          <div className="flex flex-col gap-3">
            {/* NAME */}
            <InputRoot>
              <InputIcon>
                <UserIcon className="size-4 shrink-0" />
              </InputIcon>
              <InputField type="text" placeholder="Nome completo" />
            </InputRoot>

            {/* EMAIL */}
            <InputRoot>
              <InputIcon>
                <MailIcon className="size-4 shrink-0" />
              </InputIcon>
              <InputField type="email" placeholder="E-mail" />
            </InputRoot>
          </div>

          <Button>
            Confirmar
            <ArrowRightIcon className="size-4 shrink-0" />
          </Button>
        </form>
      </div>
    </ContainerApp>
  )
}

export default Home
