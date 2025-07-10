"use client"

import { useForm } from "react-hook-form"
import { useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useCepLookup } from "@/hooks/use-cep-lookup"
import type { VisitorFormData } from "@/types/visitor"
import { validateAge } from "@/utils/validation"
import { Loader2, MapPin } from "lucide-react"

interface VisitorFormProps {
  onSubmit: (data: VisitorFormData) => void
}

/**
 * Componente de formulário de cadastro de visitante
 * Inclui validações, integração com ViaCEP e tratamento de acessibilidade
 */
export function VisitorForm({ onSubmit }: VisitorFormProps) {
  const { toast } = useToast()
  const { lookupCep, isLoading } = useCepLookup()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<VisitorFormData>()

  const cepValue = watch("cep")

  /**
   * Handler otimizado para busca de CEP com useCallback
   * Previne re-renders desnecessários e melhora performance
   */
  const handleCepBlur = useCallback(async () => {
    if (cepValue && cepValue.length === 8) {
      try {
        const addressData = await lookupCep(cepValue)
        setValue("endereco", addressData.logradouro)
        setValue("bairro", addressData.bairro)
        setValue("cidade", addressData.localidade)
        setValue("uf", addressData.uf)
        
        // Feedback positivo para o usuário
        toast({
          title: "Endereço encontrado!",
          description: "Os campos foram preenchidos automaticamente.",
        })
      } catch (error) {
        toast({
          title: "CEP não encontrado",
          description: error instanceof Error ? error.message : "Verifique o CEP digitado e tente novamente.",
          variant: "destructive",
        })
      }
    }
  }, [cepValue, lookupCep, setValue, toast])

  /**
   * Handler otimizado para submissão do formulário
   * Inclui feedback visual e validação final
   */
  const onFormSubmit = useCallback((data: VisitorFormData) => {
    onSubmit(data)
    toast({
      title: "Cadastro realizado com sucesso!",
      description: "Seus dados foram registrados.",
    })
  }, [onSubmit, toast])

  /**
   * Memoização dos campos de erro para evitar re-renders
   */
  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors])

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-orange-500" />
          Dados do Visitante
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
          {/* Dados Pessoais */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 border-b pb-2">Informações Pessoais</h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nome">Nome Completo *</Label>
                <Input
                  id="nome"
                  aria-describedby={errors.nome ? "nome-error" : undefined}
                  aria-invalid={!!errors.nome}
                  {...register("nome", { required: "Nome é obrigatório" })}
                  className={errors.nome ? "border-red-500" : ""}
                />
                {errors.nome && (
                  <p id="nome-error" className="text-sm text-red-500" role="alert">
                    {errors.nome.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                  {...register("email", {
                    required: "E-mail é obrigatório",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "E-mail inválido",
                    },
                  })}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-red-500" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dataNascimento">Data de Nascimento *</Label>
                <Input
                  id="dataNascimento"
                  type="date"
                  {...register("dataNascimento", {
                    required: "Data de nascimento é obrigatória",
                    validate: validateAge,
                  })}
                  className={errors.dataNascimento ? "border-red-500" : ""}
                />
                {errors.dataNascimento && <p className="text-sm text-red-500">{errors.dataNascimento.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="celular">Celular *</Label>
                <Input
                  id="celular"
                  {...register("celular", { required: "Celular é obrigatório" })}
                  placeholder="(11) 99999-9999"
                  className={errors.celular ? "border-red-500" : ""}
                />
                {errors.celular && <p className="text-sm text-red-500">{errors.celular.message}</p>}
              </div>
            </div>
          </div>

          {/* Endereço */}
          <div className="space-y-4">
            <h3 className="font-semibold text-slate-900 border-b pb-2">Endereço</h3>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cep">CEP *</Label>
                <div className="relative">
                  <Input
                    id="cep"
                    {...register("cep", { required: "CEP é obrigatório" })}
                    onBlur={handleCepBlur}
                    placeholder="00000-000"
                    maxLength={8}
                    className={errors.cep ? "border-red-500" : ""}
                  />
                  {isLoading && <Loader2 className="w-4 h-4 animate-spin absolute right-3 top-3 text-slate-400" />}
                </div>
                {errors.cep && <p className="text-sm text-red-500">{errors.cep.message}</p>}
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="endereco">Endereço *</Label>
                <Input
                  id="endereco"
                  {...register("endereco", { required: "Endereço é obrigatório" })}
                  className={errors.endereco ? "border-red-500" : ""}
                />
                {errors.endereco && <p className="text-sm text-red-500">{errors.endereco.message}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="numero">Número *</Label>
                <Input
                  id="numero"
                  {...register("numero", { required: "Número é obrigatório" })}
                  className={errors.numero ? "border-red-500" : ""}
                />
                {errors.numero && <p className="text-sm text-red-500">{errors.numero.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="bairro">Bairro *</Label>
                <Input
                  id="bairro"
                  {...register("bairro", { required: "Bairro é obrigatório" })}
                  className={errors.bairro ? "border-red-500" : ""}
                />
                {errors.bairro && <p className="text-sm text-red-500">{errors.bairro.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="cidade">Cidade *</Label>
                <Input
                  id="cidade"
                  {...register("cidade", { required: "Cidade é obrigatória" })}
                  className={errors.cidade ? "border-red-500" : ""}
                />
                {errors.cidade && <p className="text-sm text-red-500">{errors.cidade.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="uf">UF *</Label>
                <Input
                  id="uf"
                  {...register("uf", { required: "UF é obrigatória" })}
                  maxLength={2}
                  className={errors.uf ? "border-red-500" : ""}
                />
                {errors.uf && <p className="text-sm text-red-500">{errors.uf.message}</p>}
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || hasErrors}
            aria-describedby={hasErrors ? "form-errors" : undefined}
            className="w-full bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white font-semibold py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" aria-hidden="true" />
                <span>Enviando...</span>
              </>
            ) : (
              "Enviar Cadastro"
            )}
          </Button>
          
          {hasErrors && (
            <div id="form-errors" className="text-sm text-red-600" role="alert">
              Por favor, corrija os erros acima antes de enviar o formulário.
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
