import { z } from 'zod'

export const subscriptionFormSchema = z.object({
  name: z.string().min(1, { message: 'O nome é obrigatório' }),
  email: z
    .string({ required_error: 'O e-mail é obrigatório' })
    .email({ message: 'Informe um e-mail válido' }),
})

export type SubscriptionFormType = z.infer<typeof subscriptionFormSchema>
