"use client"

import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-50 to-orange-50 border-t border-purple-100 text-slate-700 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">© 2025 CulturaJá</span>
            <span className="text-purple-500">•</span>
            <span className="text-sm text-slate-600">Todos os direitos reservados</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-600">Desenvolvido por</span>
            <a 
              href="https://github.com/thomasjvidal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-700 transition-colors font-semibold"
            >
              thomasjvidal
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-purple-200">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-xs text-slate-500 text-center md:text-left">
              Projeto desenvolvido como teste técnico para vaga de Desenvolvedor Frontend Júnior
            </p>
            
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/thomasjvidal/testehbi-culturaja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-purple-600 transition-colors"
                aria-label="Ver código no GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/thomasjvidal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-purple-600 transition-colors"
                aria-label="Perfil no LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 