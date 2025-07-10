"use client"

import { useState, useCallback } from "react"
import axios from "axios"
import type { CepResponse } from "@/types/visitor"

/**
 * Hook personalizado para busca de CEP via API ViaCEP
 * 
 * @returns Objeto contendo função de busca e estado de carregamento
 * @example
 * const { lookupCep, isLoading } = useCepLookup()
 * const address = await lookupCep("12345678")
 */
export function useCepLookup() {
  const [isLoading, setIsLoading] = useState(false)

  /**
   * Busca dados de endereço pelo CEP
   * @param cep - CEP a ser consultado (apenas números)
   * @returns Promise com dados do endereço
   * @throws Error quando CEP não é encontrado ou há erro na requisição
   */
  const lookupCep = useCallback(async (cep: string): Promise<CepResponse> => {
    // Validação básica do CEP
    if (!cep || cep.length !== 8) {
      throw new Error("CEP deve conter 8 dígitos")
    }

    setIsLoading(true)

    try {
      // Remove caracteres não numéricos e valida formato
      const cleanCep = cep.replace(/\D/g, "")
      
      if (cleanCep.length !== 8) {
        throw new Error("CEP inválido")
      }

      // Requisição para API ViaCEP com timeout de 10 segundos
      const response = await axios.get<CepResponse>(
        `https://viacep.com.br/ws/${cleanCep}/json/`,
        { timeout: 10000 }
      )

      // Verifica se a API retornou erro
      if (response.data.erro) {
        throw new Error("CEP não encontrado")
      }

      return response.data
    } catch (error) {
      // Tratamento específico de erros
      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          throw new Error("Timeout na consulta do CEP")
        }
        if (error.response?.status === 404) {
          throw new Error("CEP não encontrado")
        }
        throw new Error("Erro na conexão com o serviço de CEP")
      }
      
      // Re-throw erros customizados
      if (error instanceof Error) {
        throw error
      }
      
      throw new Error("Erro inesperado ao buscar CEP")
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { lookupCep, isLoading }
}
