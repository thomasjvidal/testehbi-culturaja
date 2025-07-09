"use client"

import { ArrowLeft, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatCurrentDate } from "@/utils/date"

interface HeaderProps {
  onBackToHome: () => void
  showBackButton: boolean
}

export function Header({ onBackToHome, showBackButton }: HeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <Button variant="ghost" size="sm" onClick={onBackToHome} className="text-slate-600 hover:text-slate-900">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            )}
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              CulturaJá
            </h1>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Calendar className="w-4 h-4" />
            <span>{formatCurrentDate()}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
