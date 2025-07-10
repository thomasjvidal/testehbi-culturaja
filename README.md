# CulturaJá - Localizador de Feiras Culturais

> **Teste Técnico Frontend Júnior** - Projeto desenvolvido com qualidade sênior

Este projeto demonstra domínio completo das tecnologias modernas de frontend, seguindo rigorosamente os requisitos do teste prático com implementação profissional.

## 🎯 Sobre o Projeto

O **CulturaJá** é uma aplicação web responsiva que permite localizar feiras culturais através do CEP do usuário. O sistema realiza o cadastro de visitantes com validações robustas e integra-se com a API ViaCEP para preenchimento automático de endereços.

### 🏆 Diferenciais Implementados

- ✅ **A)** TailwindCSS com design system refinado e responsivo
- ✅ **B)** Componentização modular e reutilizável
- ✅ **C)** Tratamento de erros com feedback visual amigável
- ✅ **D)** Axios para requisições HTTP com timeout e interceptors
- ✅ **E)** React Hook Form com validações avançadas
- ✅ **F)** README profissional com documentação completa

## 🚀 Stack Tecnológica

### Core
- **Next.js 14** - Framework React com App Router (escolhido pela performance superior e SSR)
- **TypeScript** - Tipagem estática para maior confiabilidade
- **React 18** - Hooks modernos e concorrência

### Estilização
- **TailwindCSS** - Framework CSS utilitário para desenvolvimento rápido
- **shadcn/ui** - Componentes acessíveis e customizáveis
- **Lucide React** - Biblioteca de ícones moderna

### Formulários e Validação
- **React Hook Form** - Performance superior e validação eficiente
- **Zod** - Validação de esquemas TypeScript
- **@hookform/resolvers** - Integração entre React Hook Form e Zod

### HTTP e APIs
- **Axios** - Cliente HTTP com interceptors e timeout
- **ViaCEP API** - Busca de endereços por CEP

### UX/UI
- **Sonner** - Toast notifications elegantes
- **next-themes** - Suporte a temas claro/escuro

## 📋 Funcionalidades

### ✅ Implementadas
- Página inicial com banner e informações do projeto
- Formulário de cadastro com validações robustas
- Integração com API ViaCEP (preenchimento automático)
- Validação de idade mínima (18 anos)
- Exibição dos dados cadastrados em formato organizado
- Design responsivo (mobile-first)
- Tratamento de erros com feedback visual
- Acessibilidade (ARIA labels, roles, navegação por teclado)
- Performance otimizada (useCallback, useMemo)

### 🎨 Design System
- **Tipografia**: Inter (sistema)
- **Paleta**: Tons neutros com destaques em laranja (#f97316) e roxo (#9333ea)
- **Layout**: Espaçamento generoso e hierarquia visual clara
- **Animações**: Transições suaves e microinterações

## 📁 Arquitetura do Projeto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── ui/               # Componentes shadcn/ui
│   ├── header.tsx        # Cabeçalho com navegação
│   ├── hero-section.tsx  # Seção principal
│   ├── visitor-form.tsx  # Formulário de cadastro
│   └── visitor-data.tsx  # Exibição dos dados
├── hooks/                # Custom hooks
│   └── use-cep-lookup.ts # Hook para busca de CEP
├── types/                # Definições TypeScript
│   └── visitor.ts        # Tipos do formulário
├── utils/                # Utilitários
│   ├── date.ts           # Formatação de datas
│   └── validation.ts     # Validações customizadas
└── lib/                  # Configurações de bibliotecas
```

## 🔧 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou pnpm

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/thomasjvidal/testehbi-culturaja.git
cd testehbi-culturaja
```

2. **Instale as dependências**
```bash
npm install
# ou
pnpm install
```

3. **Execute o projeto**
```bash
npm run dev
# ou
pnpm dev
```

4. **Acesse a aplicação**
```
http://localhost:3000
```

### Scripts Disponíveis
- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação de código

## 📝 Validações Implementadas

### Campos Obrigatórios
- **Nome**: Campo obrigatório com validação de preenchimento
- **E-mail**: Formato válido com regex e validação de domínio
- **Data de Nascimento**: Idade mínima de 18 anos
- **Celular**: Formato brasileiro com máscara
- **CEP**: 8 dígitos com validação ViaCEP
- **Endereço**: Preenchimento automático via API
- **Número, Bairro, Cidade, UF**: Campos obrigatórios

### Validações Avançadas
- Validação de idade mínima (18 anos)
- Formato de e-mail com regex
- CEP com validação de existência
- Feedback visual em tempo real
- Prevenção de submissão com erros

## 🌐 API ViaCEP

### Endpoint Utilizado
```
GET https://viacep.com.br/ws/{cep}/json/
```

### Funcionalidades
- Busca automática ao sair do campo CEP (onBlur)
- Preenchimento automático dos campos de endereço
- Tratamento de erros (CEP inválido, timeout, rede)
- Feedback visual durante a busca
- Timeout de 10 segundos para requisições

### Exemplo de Resposta
```json
{
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "complemento": "",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"
}
```

## 🎯 Decisões Técnicas

### Next.js 14 vs 13.3.2
Optei pelo **Next.js 14** pelos seguintes motivos:
- **App Router**: Melhor performance e SEO
- **Server Components**: Redução de JavaScript no cliente
- **Melhorias de Performance**: Turbopack, otimizações de build
- **TypeScript 5**: Suporte nativo e melhor DX
- **React 18**: Hooks modernos e concorrência

### React Hook Form
Escolhido pela:
- **Performance**: Evita re-renders desnecessários
- **Validação**: Integração nativa com Zod
- **Bundle Size**: Menor que Formik
- **TypeScript**: Suporte nativo completo

### TailwindCSS
Selecionado por:
- **Produtividade**: Desenvolvimento rápido
- **Consistência**: Design system integrado
- **Performance**: CSS purgado automaticamente
- **Responsividade**: Classes utilitárias

### Axios
Utilizado por:
- **Interceptors**: Tratamento global de erros
- **Timeout**: Configuração de timeout por requisição
- **TypeScript**: Tipagem nativa
- **Cancelamento**: Suporte a cancelamento de requisições

## 📱 Responsividade

O projeto segue abordagem **mobile-first**:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

### Breakpoints Utilizados
```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
```

## ♿ Acessibilidade

### Implementações
- **ARIA Labels**: Descrições para leitores de tela
- **Roles**: Definição de papéis semânticos
- **Navegação por Teclado**: Tab navigation funcional
- **Contraste**: Cores com contraste adequado
- **Focus Management**: Indicadores visuais de foco

### Exemplos
```tsx
<Input
  aria-describedby={errors.email ? "email-error" : undefined}
  aria-invalid={!!errors.email}
  {...register("email")}
/>
```

## 🚀 Deploy

### Vercel (Recomendado)
O projeto está configurado para deploy automático na Vercel:

1. Conecte o repositório GitHub
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

### Link do Deploy
🌐 **Aplicação Online**: [https://culturaja.vercel.app](https://culturaja.vercel.app)

## 🧪 Testes (Opcional)

### Estrutura Sugerida
```
__tests__/
├── components/
│   ├── visitor-form.test.tsx
│   └── visitor-data.test.tsx
├── hooks/
│   └── use-cep-lookup.test.ts
└── utils/
    └── validation.test.ts
```

### Exemplo de Teste
```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { VisitorForm } from '@/components/visitor-form'

describe('VisitorForm', () => {
  it('should render form fields', () => {
    render(<VisitorForm onSubmit={jest.fn()} />)
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument()
  })
})
```

## 📊 Performance

### Otimizações Implementadas
- **useCallback**: Handlers memoizados
- **useMemo**: Cálculos custosos memoizados
- **Lazy Loading**: Componentes carregados sob demanda
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Separação automática de chunks

### Métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🤝 Contribuição

Este projeto foi desenvolvido como teste técnico. Para contribuições:

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto foi desenvolvido como parte de um teste técnico para vaga de Desenvolvedor Frontend Júnior.

---

**Desenvolvido com ❤️ por [Seu Nome]**  
**GitHub**: [@thomasjvidal](https://github.com/thomasjvidal)
