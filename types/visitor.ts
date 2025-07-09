export interface VisitorFormData {
  nome: string
  email: string
  dataNascimento: string
  celular: string
  cep: string
  endereco: string
  numero: string
  bairro: string
  cidade: string
  uf: string
}

export interface CepResponse {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}
