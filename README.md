# CulturaJá - Localizador de Feiras Culturais

Projeto desenvolvido para teste técnico de Desenvolvedor Frontend Júnior, utilizando Next.js 14, React, TypeScript, TailwindCSS, Axios e React Hook Form.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **TailwindCSS**
- **Axios**
- **React Hook Form**
- **shadcn/ui** (componentes de UI)
- **Lucide React** (ícones)

## 📋 Funcionalidades

- Página inicial com banner e data atual
- Formulário de cadastro completo (nome, e-mail, data de nascimento, celular, CEP, endereço, número, bairro, cidade, UF)
- Preenchimento automático de endereço via API ViaCEP
- Exibição dos dados cadastrados após envio
- Design 100% responsivo (mobile e desktop)
- Tratamento de erro para CEP inválido
- Componentização e código limpo
- Acessibilidade (ARIA, roles, feedback visual)
- README detalhado

## 🛠️ Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/thomasjvidal/testehbi-culturaja.git
   cd testehbi-culturaja
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse em [http://localhost:3000](http://localhost:3000)

## 🎨 Layout e Estilo

- Banner com imagem e data atual
- Layout limpo, organizado e intuitivo
- Cores e espaçamentos consistentes com o design system
- Rodapé harmonioso com a paleta do projeto

## 🔌 Consumo da API ViaCEP

- Busca automática ao sair do campo CEP (onBlur)
- Preenchimento automático dos campos de endereço
- Tratamento de erros (CEP inválido, timeout, rede)
- Feedback visual durante a busca

## 📄 Decisões Técnicas

- **Next.js 14**: escolhido para aproveitar o App Router, SSR e otimizações modernas
- **TailwindCSS**: produtividade, responsividade e consistência visual
- **React Hook Form**: performance e validação eficiente
- **Axios**: requisições HTTP robustas
- **Componentização**: fácil manutenção e reuso

## ♿ Acessibilidade

- ARIA labels e roles
- Navegação por teclado
- Feedback visual para erros

## 📝 Observações

- Todos os requisitos obrigatórios do teste foram implementados
- Diferenciais técnicos presentes (componentização, acessibilidade, performance, documentação)
- Não foi implementada versão em React Native (opcional)

---

**Desenvolvido por [thomasjvidal](https://github.com/thomasjvidal)**
