🌎 WorldExplorer

Portal web para consulta de informações sobre países do mundo, desenvolvido como parte da disciplina Programação e Design para Web III.

📌 Sobre o projeto

O WorldExplorer permite pesquisar países e visualizar informações como:

Nome oficial

Capital

População

Bandeira em emoji e imagem SVG

Região

Sub-região

Idiomas

Moedas

Fusos horários

🛠️ Tecnologias utilizadas

Next.js 14

TypeScript

React

App Router

CSS

API de países

📁 Estrutura do projeto
worldexplorer/
├── app/
│   ├── pais/
│   │   └── [name]/
│   │       └── page.tsx
│   ├── sobre/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── CountryCard.tsx
│   └── SearchBar.tsx
│
├── .env.local
├── .gitignore
├── package.json
└── README.md

⚙️ Configuração

Crie um arquivo .env.local na raiz do projeto com:

NEXT_PUBLIC_API_URL=https://countries.dev


O arquivo .env.local está configurado no .gitignore e não deve ser enviado ao GitHub.

🚀 Como executar localmente

Instale as dependências:

npm install


Execute o projeto:

npm run dev


Depois, acesse:

http://localhost:3000

🔎 Como utilizar

Na página inicial, digite o nome de um país no campo de busca e clique em Buscar.

Após encontrar o país, clique em Ver detalhes para acessar informações adicionais.

🌐 Rotas

/ — Página principal com busca de países.

/pais/[name] — Página de detalhes de um país.

/sobre — Informações sobre o projeto e o aluno.

🎓 Informações acadêmicas

Projeto desenvolvido para a disciplina Programação e Design para Web III, do curso de Tecnologia em Análise e Desenvolvimento de Sistemas.

📚 Objetivo

O objetivo do projeto é demonstrar a utilização do Next.js 14 com App Router, componentes reutilizáveis, rotas dinâmicas, consumo de API e organização de uma aplicação web.