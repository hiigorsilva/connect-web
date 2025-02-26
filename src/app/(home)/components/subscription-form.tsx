'use client'

import { Subtitle } from '@/components/subtitle'
import { Button } from '@/components/ui/button'
import { InputField, InputIcon, InputRoot } from '@/components/ui/input'
import { ArrowRightIcon, MailIcon, UserIcon } from 'lucide-react'

export const SubscriptionForm = () => {
  return (
    <form className="max-w-none md:max-w-[400px] w-full p-6 rounded-2xl bg-gray-700 space-y-6">
      <Subtitle>Inscrição</Subtitle>

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
  )
}
