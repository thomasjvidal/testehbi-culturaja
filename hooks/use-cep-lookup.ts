"use client"

import { useState } from "react"
import axios from "axios"
import type { CepResponse } from "@/types/visitor"

export function useCepLookup() {
  const [isLoading, setIsLoading] = useState(false)

  const lookupCep = async (cep: string): Promise<CepResponse> => {
    setIsLoading(true)

    try {
      const cleanCep = cep.replace(/\D/g, "")
      const response = await axios.get<CepResponse>(`https://viacep.com.br/ws/${cleanCep}/json/`)

      if (response.data.erro) {
        throw new Error("CEP não encontrado")
      }

      return response.data
    } catch (error) {
      throw new Error("Erro ao buscar CEP")
    } finally {
      setIsLoading(false)
    }
  }

  return { lookupCep, isLoading }
}
