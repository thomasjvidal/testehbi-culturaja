# CulturaJá - Localizador de Feiras Culturais

Este projeto segue rigorosamente os requisitos do teste prático, mas apresenta uma proposta visual refinada para demonstrar domínio de UI profissional.

## 🎯 Sobre o Projeto

O **CulturaJá** é uma aplicação web que permite localizar feiras culturais através do CEP do usuário. O sistema realiza o cadastro de visitantes e integra-se com a API ViaCEP para preenchimento automático de endereços.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Estilização utilitária
- **shadcn/ui** - Componentes de interface
- **React Hook Form** - Gerenciamento de formulários
- **Axios** - Cliente HTTP para API
- **Lucide React** - Ícones

## 📋 Funcionalidades

- ✅ Página inicial com banner e informações do projeto
- ✅ Formulário de cadastro de visitante com validações
- ✅ Integração com API ViaCEP para preenchimento automático
- ✅ Validação de idade mínima (18 anos)
- ✅ Exibição dos dados cadastrados
- ✅ Design responsivo e elegante
- ✅ Tratamento de erros com toast notifications

## 🎨 Design

O projeto segue um design system moderno inspirado em grandes marcas como Apple e Nike:

- **Tipografia**: Inter (sistema)
- **Paleta**: Tons neutros com destaques em laranja e roxo
- **Layout**: Espaçamento generoso e hierarquia visual clara
- **Animações**: Transições suaves e microinterações

## 📁 Estrutura do Projeto

\`\`\`
src/
├── app/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/              # Componentes shadcn/ui
│   ├── header.tsx
│   ├── hero-section.tsx
│   ├── visitor-form.tsx
│   └── visitor-data.tsx
├── hooks/
│   └── use-cep-lookup.ts
├── types/
│   └── visitor.ts
└── utils/
    ├── date.ts
    └── validation.ts
\`\`\`

## 🔧 Instalação e Execução

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/seu-usuario/culturaja-frontend.git
cd culturaja-frontend
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

3. Execute o projeto:
\`\`\`bash
npm run dev
\`\`\`

4. Acesse: \`http://localhost:3000\`

## 📝 Validações Implementadas

- **Nome**: Campo obrigatório
- **E-mail**: Campo obrigatório com validação de formato
- **Data de Nascimento**: Campo obrigatório com validação de idade mínima (18 anos)
- **Celular**: Campo obrigatório
- **CEP**: Campo obrigatório com integração ViaCEP
- **Endereço, Número, Bairro, Cidade, UF**: Campos obrigatórios

## 🌐 API Utilizada

- **ViaCEP**: \`https://viacep.com.br/ws/{cep}/json/\`
  - Preenchimento automático de endereço
  - Tratamento de erros para CEPs inválidos

## 🎯 Decisões Técnicas

### React Hook Form
Escolhido pela performance superior e facilidade de validação, evitando re-renders desnecessários.

### Axios
Utilizado para requisições HTTP com melhor tratamento de erros e interceptors.

### shadcn/ui
Componentes acessíveis e customizáveis que seguem as melhores práticas de design.

### Estrutura Modular
Separação clara entre componentes, hooks, tipos e utilitários para melhor manutenibilidade.

## 📱 Responsividade

O projeto é totalmente responsivo, adaptando-se a:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deploy

O projeto está configurado para deploy automático na Vercel através do GitHub.

## 📄 Licença

Este projeto foi desenvolvido como parte de um teste técnico.
