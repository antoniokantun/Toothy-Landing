"use server";

import { leadSchema, LeadFormValues } from "./schemas";

export async function createLeadAction(data: LeadFormValues) {
  const result = leadSchema.safeParse(data);
  

  if (!result.success) {
    return { success: false, error: "Datos inválidos" };
  }

  const leadDto = {
    nombre: result.data.nombre,
    apellido: result.data.apellido,
    correoElectronico: result.data.email,
    telefono: result.data.telefono,
    notas: result.data.notas || "",
  };

  try {
    const response = await fetch(`${process.env.API_BACKEND_URL}/Leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadDto),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error del backend:", response.status, errorText);
      throw new Error(`Error al guardar: ${response.status} - ${errorText}`);
    }

    return { success: true, message: "Lead creado correctamente" };

  } catch (error) {
    console.error("Error en Server Action:", error);
    return { success: false, error: "Error de conexión con el servidor" };
  }
}