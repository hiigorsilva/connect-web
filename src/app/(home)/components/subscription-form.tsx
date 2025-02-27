'use client'

import { Subtitle } from '@/components/subtitle'
import { Button } from '@/components/ui/button'
import { InputField, InputIcon, InputRoot } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRightIcon, Loader2Icon, MailIcon, UserIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { createSubscription } from '../actions/create-subscription'
import { type SubscriptionFormType, subscriptionFormSchema } from '../schemas'

export const SubscriptionForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SubscriptionFormType>({
    resolver: zodResolver(subscriptionFormSchema),
    defaultValues: {
      email: '',
      name: '',
    },
  })

  const onFormSubmit = async (data: SubscriptionFormType) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      await createSubscription(data)
      toast.success('Inscrição realizada com sucesso!')
    } catch (err) {
      console.error('ERROR_CREATE_SUBSCRIPTION', err)
      toast.error('Ocorreu um erro ao confirmar a inscrição')
    } finally {
      reset()
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="max-w-none md:max-w-[400px] w-full p-6 rounded-2xl bg-gray-700 space-y-6"
    >
      <Subtitle>Inscrição</Subtitle>

      <div className="flex flex-col gap-3">
        {/* NAME */}
        <div className="space-y-1">
          <InputRoot>
            <InputIcon>
              <UserIcon className="size-4 shrink-0" />
            </InputIcon>
            <InputField
              {...register('name')}
              type="text"
              placeholder="Nome completo"
              autoComplete="off"
            />
          </InputRoot>
          {errors.name && (
            <p className="text-sm text-danger">{errors.name.message}</p>
          )}
        </div>

        {/* EMAIL */}
        <div className="space-y-1">
          <InputRoot>
            <InputIcon>
              <MailIcon className="size-4 shrink-0" />
            </InputIcon>
            <InputField
              {...register('email')}
              type="email"
              placeholder="E-mail"
              autoComplete="off"
            />
          </InputRoot>
          {errors.email && (
            <p className="text-sm text-danger">{errors.email.message}</p>
          )}
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            Enviando...
            <Loader2Icon className="size-4 shrink-0 animate-spin" />
          </>
        ) : (
          <>
            Confirmar
            <ArrowRightIcon className="size-4 shrink-0" />
          </>
        )}
      </Button>
    </form>
  )
}
