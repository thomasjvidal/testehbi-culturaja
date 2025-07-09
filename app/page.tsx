"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { VisitorForm } from "@/components/visitor-form"
import { VisitorData } from "@/components/visitor-data"
import { Header } from "@/components/header"
import type { VisitorFormData } from "@/types/visitor"

export default function Home() {
  const [visitorData, setVisitorData] = useState<VisitorFormData | null>(null)
  const [showForm, setShowForm] = useState(false)

  const handleFormSubmit = (data: VisitorFormData) => {
    setVisitorData(data)
  }

  const handleStartRegistration = () => {
    setShowForm(true)
  }

  const handleBackToHome = () => {
    setShowForm(false)
    setVisitorData(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header onBackToHome={handleBackToHome} showBackButton={showForm} />

      <main className="container mx-auto px-4 py-8">
        {!showForm ? (
          <HeroSection onStartRegistration={handleStartRegistration} />
        ) : (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-slate-900">Cadastro de Visitante</h1>
              <p className="text-slate-600">Preencha seus dados para participar das feiras culturais</p>
            </div>

            <VisitorForm onSubmit={handleFormSubmit} />

            {visitorData && <VisitorData data={visitorData} />}
          </div>
        )}
      </main>
    </div>
  )
}
