import { z } from 'zod'

export const SchemaRegisterType = () =>
  z.object({
    name: z.string({ message: 'Digite o Nome.' }).min(1),
    email: z.string({ message: 'Digite um email válido.' }).email(),
    check: z
      .boolean({ message: 'Aceite o Termo de uso.' })
      .refine(value => value === false, {
        message: 'Aceite o Termo de uso.'
      })
  })

export type SchemaRegisterType = z.infer<ReturnType<typeof SchemaRegisterType>>