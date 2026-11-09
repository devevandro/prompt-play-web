import { z } from 'zod'

const schema = z.object({
  NEXT_PUBLIC_API_URL: z.url().default('http://localhost:3000'),
})

/** Cada NEXT_PUBLIC_* precisa ser lida literalmente para o Next inlinar no client. */
export const env = schema.parse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
})
