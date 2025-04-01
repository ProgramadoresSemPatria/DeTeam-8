# EasyEvent - Plataforma de Gerenciamento de Eventos


## Introdução

O EasyEvent é uma solução moderna e intuitiva para criação e gerenciamento de eventos, desenvolvida para simplificar o processo de organização e participação em eventos. A plataforma oferece uma experiência completa tanto para organizadores quanto para participantes, desde a criação do evento até a gestão de participantes e relatórios.

###  Objetivo

O objetivo principal do EasyEvent é democratizar a organização de eventos, tornando o processo mais acessível, eficiente e profissional. A plataforma elimina as barreiras tradicionais na organização de eventos, oferecendo ferramentas intuitivas e recursos avançados para garantir o sucesso de qualquer tipo de evento.

## Tecnologias Utilizadas

### Frontend

- **Next.js 15**: Framework React com App Router para construção de interfaces modernas e performáticas
- **TypeScript**: Superset do JavaScript que oferece segurança de tipos e recursos avançados
- **React 19**: Biblioteca JavaScript para construção de interfaces de usuário reutilizáveis
- **Tailwind CSS**: Framework CSS focado em utilidades para estilização ágil
- **Shadcn/ui**: Biblioteca de componentes baseada em Radix UI para interfaces consistentes
- **Framer Motion**: Biblioteca para animações e transições suaves
- **Zustand**: Gerenciamento de estado global eficiente e simples
- **React Query**: Gerenciamento de cache e requisições otimizado
- **React Hook Form + Zod**: Validação e gerenciamento de formulários robusto

## 📁 Estrutura do Projeto

```
├── app/                    # Diretório principal do Next.js (App Router)
│   ├── (auth)/            # Rotas autenticadas
│   ├── contact/           # Página de contato
│   ├── eventos/           # Páginas relacionadas a eventos
│   ├── institucional/     # Páginas institucionais
│   ├── painel/           # Painel administrativo
│   ├── globals.css       # Estilos globais
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Página inicial
├── components/           # Componentes reutilizáveis
│   ├── animations/       # Componentes de animação
│   ├── general/         # Componentes gerais
│   ├── layout/          # Componentes de layout
│   └── ui/              # Componentes base (shadcn)
├── hooks/               # Custom hooks
├── lib/                 # Utilitários e configurações
├── services/            # Serviços e APIs
├── util/               # Funções utilitárias
├── public/             # Arquivos estáticos
└── types/              # Definições de tipos TypeScript
```

##  Funcionalidades Principais

### Para Organizadores

- **Criação de Eventos**: Interface intuitiva para criar eventos com detalhes completos
- **Gestão de Participantes**: Controle total sobre inscrições e participantes
- **Relatórios**: Área com métricas e insights sobre o evento
- **Compartilhamento**: Ferramentas para divulgação e compartilhamento do evento

### Para Participantes

- **Inscrição Simplificada**: Processo de registro otimizado
- **Informações Detalhadas**: Acesso a todas as informações do evento
- **Histórico**: Acompanhamento de eventos inscritos

### Recursos Adicionais

- **Agenda**: Gerenciamento de programação e horários
- **Check-in**: Sistema de presença digital
- **Analytics**: Métricas e relatórios detalhados

## Instalação

### Pré-requisitos

- Node.js 18+
- pnpm 8+

### Passos para Instalação

1. Clone o repositório:

```bash
git clone [url-do-repositorio]
cd frontend
```

2. Instale as dependências:

```bash
pnpm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env.local
```

4. Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

##  Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento com Turbopack
- `pnpm build` - Gera a build de produção
- `pnpm start` - Inicia o servidor de produção
- `pnpm lint` - Executa a verificação de linting

## Design System

O projeto utiliza um design system consistente baseado em:

- **Tipografia**: Geist Sans para texto e Geist Mono para código
- **Componentes**: Biblioteca shadcn/ui com customizações

##  Como Contribuir

1. Fork o projeto
2. Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push para a Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

##  Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

##  Equipe

- [Luiz Renan](https://github.com/luiznwz) - Desenvolvedor Frontend
- [Vandilson Brito](https://github.com/vandilsonbrito) - Desenvolvedor Full Stack
- [Patrick Simões](https://github.com/PatrickSimoes) - Desenvolvedor Backend
