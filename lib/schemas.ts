import { z } from "zod";

export const leadSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 letras").max(100),
  apellido: z.string().min(2, "El apellido es obligatorio").max(100),
  email: z.string().email("Ingresa un correo electrónico válido"),
  telefono: z.string().min(10, "Ingresa un número de al menos 10 dígitos").regex(/^\d+$/, "Solo se permiten números"),
  notas: z.string().max(500, "El mensaje es muy largo").optional(),
  privacy: z.boolean().refine(val => val === true, {
  message: "Debes aceptar el aviso de privacidad",
}),
});

export type LeadFormValues = z.infer<typeof leadSchema>;