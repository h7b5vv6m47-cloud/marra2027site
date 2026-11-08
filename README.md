# MARRA — 2ª EDIÇÃO

Site estático pronto para GitHub + Vercel. Não precisa instalar dependências nem executar build.

## Publicar no GitHub
1. Crie um repositório novo no GitHub.
2. Envie todos os arquivos e pastas deste projeto, mantendo a pasta `assets`.
3. Faça o commit.

## Publicar na Vercel
1. Entre em https://vercel.com e escolha **Add New → Project**.
2. Importe o repositório do GitHub.
3. Framework Preset: **Other**.
4. Build Command: deixe vazio.
5. Output Directory: `.` (raiz do projeto).
6. Clique em **Deploy**.

A Vercel vai gerar um endereço público para compartilhar.

## Configuração importante
- O WhatsApp foi configurado inicialmente para `+55 85 98688-2730`, usando o número informado como chave Pix. Se o atendimento usar outro WhatsApp, abra `script.js` e altere a variável `phone` (formato: código do país + DDD + número, somente dígitos).
- A chave Pix está em `index.html` como `85986882730`. Se precisar alterar, atualize também o texto da mensagem no `script.js`.
- O botão do WhatsApp não consegue anexar o comprovante automaticamente. Ele abre a conversa com a mensagem pronta e orienta o comprador a anexar a imagem ou PDF manualmente.
- A confirmação dos ingressos é manual, após a conferência do comprovante.
- A página informa entrada a partir de 16 anos e consumo de bebidas alcoólicas somente para maiores de 18 anos.

## Arquivos
- `index.html`: conteúdo e estrutura da página.
- `styles.css`: identidade visual e layout responsivo.
- `script.js`: contagem regressiva, cálculo, Pix e WhatsApp.
- `assets/marra-logo.png`: imagem enviada usada na capa e no rodapé.


## Atualizações incluídas
- Dois botões para entrar nos grupos oficiais de WhatsApp.
- Contato para dúvidas e compra de ingressos: (85) 98688-2730.
- Aviso destacado de que a organização não trabalha com reembolsos.
