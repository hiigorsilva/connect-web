import { z } from 'zod'

const envSchema = z.object({
  WEB_URL: z.string().url(),
  API_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
