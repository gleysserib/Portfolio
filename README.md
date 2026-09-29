# Portfólio de Tecnologia

Portfólio responsivo em React, TypeScript e Vite. Os textos pessoais, links, tecnologias, projetos e estudos ficam centralizados em `src/data.ts`.

## Requisitos

- Node.js 20+ ou 22+
- npm

## Executar localmente

No terminal, entre nesta pasta e rode:

```bash
npm install
npm run dev
```

Abra o endereço local informado pelo Vite (normalmente `http://localhost:5173`). Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

Os arquivos gerados ficam em `dist/`.

## Personalizar

1. Abra `src/data.ts` e atualize `profile.name`, `profile.email`, `profile.github` e `profile.linkedin`.
2. Edite `skillGroups`, `projects`, `learning` e `studies` para refletir informações reais. Para links de projeto, atualize o `href` do botão em `src/App.tsx` quando houver repositório ou demo.
3. Em `index.html`, ajuste title, descrição e Open Graph. Atualize também o nome no título, caso queira usar outra identidade.
4. Coloque imagens próprias em `public/` se desejar substituir as prévias conceituais geradas em CSS.

Placeholders entre colchetes devem ser substituídos. O item de concluídos apenas informa que nenhum curso ou certificação concluída foi fornecido; troque-o somente por informações confirmadas.

## Publicar

O projeto pode ser publicado em Vercel, Netlify ou outro host estático com suporte a Vite:

1. Envie o projeto para um repositório Git.
2. Importe o repositório no serviço de hospedagem.
3. Configure o comando de build como `npm run build` e a pasta de saída como `dist`.
4. Publique. Para atualização, envie as alterações ao branch conectado ao serviço.

Como é um site estático, não precisa configurar servidor backend para hospedar o portfólio.
