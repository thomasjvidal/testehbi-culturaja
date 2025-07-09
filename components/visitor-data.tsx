import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { VisitorFormData } from "@/types/visitor"
import { User, Mail, Phone, MapPin, Calendar } from "lucide-react"
import { formatDate } from "@/utils/date"

interface VisitorDataProps {
  data: VisitorFormData
}

export function VisitorData({ data }: VisitorDataProps) {
  return (
    <Card className="shadow-lg border-green-200 bg-green-50/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-800">
          <User className="w-5 h-5" />
          Dados Cadastrados
        </CardTitle>
        <Badge variant="secondary" className="w-fit bg-green-100 text-green-800">
          Cadastro Confirmado
        </Badge>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Informações Pessoais */}
        <div className="space-y-3">
          <h3 className="font-semibold text-slate-900 border-b pb-2">Informações Pessoais</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <User className="w-4 h-4 text-slate-500" />
              <div>
                <p className="text-sm text-slate-600">Nome</p>
                <p className="font-medium">{data.nome}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-slate-500" />
              <div>
                <p className="text-sm text-slate-600">E-mail</p>
                <p className="font-medium">{data.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-4 h-4 text-slate-500" />
              <div>
                <p className="text-sm text-slate-600">Data de Nascimento</p>
                <p className="font-medium">{formatDate(data.dataNascimento)}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-slate-500" />
              <div>
                <p className="text-sm text-slate-600">Celular</p>
                <p className="font-medium">{data.celular}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Endereço */}
        <div className="space-y-3">
          <h3 className="font-semibold text-slate-900 border-b pb-2">Endereço</h3>

          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-slate-500 mt-1" />
            <div className="space-y-1">
              <p className="font-medium">
                {data.endereco}, {data.numero}
              </p>
              <p className="text-slate-600">
                {data.bairro} - {data.cidade}/{data.uf}
              </p>
              <p className="text-sm text-slate-500">CEP: {data.cep}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
