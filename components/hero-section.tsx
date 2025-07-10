"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Users, Calendar } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  onStartRegistration: () => void
}

export function HeroSection({ onStartRegistration }: HeroSectionProps) {
  return (
    <div className="space-y-12">
      {/* Hero Banner */}
      <div className="text-center space-y-6">
        <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
          <Image 
            src="/banner-image.png.png" 
            alt="Banner CulturaJá - Feiras Culturais" 
            fill 
            className="object-cover" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">CulturaJá</h1>
            <p className="text-lg md:text-xl opacity-90">Descubra feiras culturais na sua região</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Conecte-se com a cultura local</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Encontre feiras culturais, eventos artísticos e manifestações populares próximas ao seu CEP. Cadastre-se e
            faça parte dessa experiência única.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
            <MapPin className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="font-semibold text-slate-900">Localização Inteligente</h3>
          <p className="text-sm text-slate-600">Digite seu CEP e encontre feiras culturais na sua região</p>
        </Card>

        <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
            <Users className="w-6 h-6 text-purple-600" />
          </div>
          <h3 className="font-semibold text-slate-900">Comunidade Cultural</h3>
          <p className="text-sm text-slate-600">Conecte-se com outros amantes da cultura local</p>
        </Card>

        <Card className="p-6 text-center space-y-4 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <Calendar className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="font-semibold text-slate-900">Eventos Atualizados</h3>
          <p className="text-sm text-slate-600">Informações sempre atualizadas sobre datas e horários</p>
        </Card>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Button
          onClick={onStartRegistration}
          size="lg"
          className="bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Começar Cadastro
        </Button>
      </div>
    </div>
  )
}
